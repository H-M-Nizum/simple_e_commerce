import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, stock, seller, ratings} = props.product
    return (
        <div className='product_container'>
            <div className='product_img'> 
                <img src={img} alt="Product img" />
            </div>
           <div className='card_body' >
                <h4>{name}</h4>
                
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings} stars</p>
                <p>Price : ${price}</p>
                <p>Stock: {stock}</p><br /><br /><br />
           </div>
            <button className='addCardButton'>Add to Card</button>
        </div>
    );
};

export default Product;