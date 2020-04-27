import React from 'react'

function ProductItem() {
    const productArr = ProductData.map(items =>
        <ProductItemProps
            varnish={props.items.varnish}
            name={items.name}
            price={items.price}
            description={items.description}
        />)
        return (
            <div>
                {productArr}
                
            </div>
        )}

export default ProductItem


