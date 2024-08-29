import React from 'react';
import { createRoot } from 'react-dom/client';  // Updated import
import App from './App';
import './App.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(<App />);
