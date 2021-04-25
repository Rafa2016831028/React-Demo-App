import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import  Navigation from './Component/Nav/Navigation';
import { BrowserRouter} from "react-router-dom";
ReactDOM.render(
    <BrowserRouter>
    <React.StrictMode>
    <Navigation/>
    </React.StrictMode>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

reportWebVitals();
