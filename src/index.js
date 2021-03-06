import React from 'react';
import ReactDOM from 'react-dom';
 
import App from './App';
import { BrowserRouter } from "react-router-dom";

const title = 'React with Webpack and Babel';
 
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
 
module.hot.accept();