import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="card_container">
                <h1>this is card</h1>
            </div>
        </div>
    );
};

export default Shop;