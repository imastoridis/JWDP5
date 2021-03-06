import React from 'react'

import productData from './ProductData'
import img from "../images/oak_1.jpg"
import ProductButton from './ProductButton'


function ProductItemPropss(props) { //ProductTile, what the tile should show
    return (
        <div className="product">   
            <div className="product__specs">
                <h3>Meubles en chêne</h3>
                    <p>Vernis : {props.varnish}</p>
                    <p>Produit : {props.name}</p>
                    <p>Prix : {props.price}</p>
                    <p>Description : {props.description}</p>
                    <ProductButton/>
                    
            </div>  
            <div className="product__specs">     
                <img className="product-list_img" src = {img} alt={"oak"} />
            </div>
        </div>
    )
}

class ProductSpecs extends React.Component { //I find the info and give to prosp
    render () {
    const productArr = productData.map((items, _id) => 
        <ProductItemPropss 
        _id = {items._id}
        varnish = {items.varnish}
        name = {items.name}
        price = {items.price}
        description = {items.description}
        imageUrl = {items.imageUrl} />         
        )
    return (
        <div>
            {productArr}
        </div>
    )
}} 

export default ProductSpecs 
