import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = ({cart}) => {
    console.log(cart)
    let total_price = cart.reduce((pre, cur)=> pre+(cur.price * cur.quantity), 0)
    let total_shipping = cart.reduce((pre, cur) => pre+(cur.shipping * cur.quantity), 0)
    let total_tax = (total_price * (5/100)).toFixed(2)
    let total = total_price + total_shipping + parseFloat(total_tax)

    const removeall = () => {
        total = 0
        total_tax = 0
        total_price = 0
        total_shipping = 0
    }

    let quantity = cart.reduce((pre, cur)=> pre+cur.quantity, 0)
    
    return (
        <div className="card_container">
            <h1 className='order_header'>Order Summary</h1>
            <br />
            <br />
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total_price}</p>
            <p>Total Shipping Chargs: ${total_shipping}</p>
            <p>Tax: ${total_tax}</p>
            <h3>Grand Total: ${total}</h3>
            <button onClick={removeall} className='card_btn1'>Clear Cart <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> </button>
            <button className='card_btn2'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Cart;