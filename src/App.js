import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom'

import HomePage from './components/HomePage'
import { ProductPage, ConfirmationPage } from './components';

function App() {
  return (
    <>
    <Switch>
      <Route path="/" component={HomePage} />
      <Route exact path="/product-page" component={ProductPage} />
      <Route exact path="/product-page/:slug" component={ProductPage} />
    </Switch>
  
    </>
  );
}

export default App;
