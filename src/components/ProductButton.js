import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import ProductPage from './ProductPage'

/*function ProductButton() {
    return (
        <div class="btn">
            <button type="button" onClick= 'productArr[0]' class="btn-style">Sélectionner</button>
        </div>
    )
}

export default ProductButton*/




function ProductButton() {
    
    
    return (
        
        <div>
                
                <Link to="/product">Selectionnez</Link>
                <Switch>
                    <Route path="/product" component={ProductPage}>
                    </Route>
                </Switch>
        </div>
        

        
    )
}

export default ProductButton