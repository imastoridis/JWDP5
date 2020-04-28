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
                <Link to="/Cross Table">Cross Table</Link>
                <Link to="/Coffee Table">Selectionnez</Link>
                <Switch>
                    <Route path="/Cross Table" component={ProductPage}>
                    </Route>
                    <Route path="/Coffee Table" component={ProductPage}>
                    </Route>
                </Switch>
        </div>
        

        
    )
}

export default ProductButton