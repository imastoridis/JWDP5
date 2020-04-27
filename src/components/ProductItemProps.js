import React from 'react'

function ProductItemProps(props) {
    return (
        <div>
            <h3>Table Vintage</h3>
                <p>Vernis : {props.varnish}</p>
                <p>Produit : {props.name}</p>
                <p>Prix : {props.price}</p>
                <p>Description : {props.description}</p>
        </div>
    )
}

export default ProductItemProps

//it is used in product page, no reason you need to kill it