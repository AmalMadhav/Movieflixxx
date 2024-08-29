import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';


const Api_url = 'http://www.omdbapi.com?apikey=bcbc349e'

const movie1= {
        "Title": "The Batman",
        "Year": "2022",
        "imdbID": "tt1877830",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
    }



const App = () =>{
    const [seachTerm,setSeachTerm]= useState('');
    const [movies,setMovies]=useState([]);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${Api_url}&s=${title}`);
        const data = await response.json(); 
    
        
        setMovies(data.Search);
    };
    useEffect(()=>{
        
        searchMovies("batman");

    },[])

    return(
        <div className="app">
            <h1>MOVIEFLIXX</h1>

            <div className="search">
                <input type="text"
                placeholder="search the movie here"
                value={seachTerm}
                onChange={(e)=> setSeachTerm(e.target.value)}

                
                 />
                <img src={SearchIcon}
                 alt="Search"
                 onClick={()=> searchMovies(seachTerm)}
                 />
                

            </div>
            {
                movies?.length > 0 ?(
                
                <div className="container">
                    {
                        movies.map((movie)=>
                            <MovieCard movie={movie}/>
                        )
                    }
                </div>
                ):(
                    <div className="empty">
                        <h2>404! No Movies Found!</h2>
                    </div>
                )

            }
            
            
            
            


        </div>
    
   




    );

    
}

export default App;