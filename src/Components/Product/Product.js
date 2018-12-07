import React from 'react'



// key={i}
// name={product.name}
// url={product.imageUrl}
// price={product.price}
export default function Product(props) {
    return (
        <div className='product-component'>
            Product
            <img src={props.url}/>
            <div className='products'>
                <h1>{props.name}</h1>
                <p>Price: ${props.price}.00</p>
            </div>
        </div>
    )
};