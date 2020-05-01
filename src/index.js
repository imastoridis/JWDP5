//import Form from "./js/components/Form";


import React from 'react';
import ReactDOM from 'react-dom';
import Main from './js/components/Main';
import {BrowserRouter as Router} from 'react-router-dom'
import '../src/index.css';
//import * as serviceWorker from './serviceWorker';

//import {ProductProvider} from "./js/components/componentExports"


ReactDOM.render(<Main />,document.getElementById('container')
  );
{/*
ReactDOM.render(
  
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
    
  </React.StrictMode>
  ,
  document.getElementById('container')
);*/}