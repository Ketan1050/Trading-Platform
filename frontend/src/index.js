import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';
import HomePage from './landing_page/home/HomePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div> <h1>Hello, World!</h1></div>  */}
    <HomePage /> 
  </React.StrictMode>
); 
