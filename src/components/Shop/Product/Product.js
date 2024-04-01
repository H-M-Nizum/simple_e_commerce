import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {clickAddToCard, product} = props
    const {img, name, price, stock, seller, ratings} = product
    
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
                <p>Stock: {stock}</p><br /><br /><br /><br />
           </div>
            <button onClick={()=>{clickAddToCard({product})}} className='addCardButton'>
                <p>Add to Card  <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
                
            </button>
        </div>
    );
};

export default Product;