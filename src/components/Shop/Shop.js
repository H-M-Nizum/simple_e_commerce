import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './Product/Product';

import Cart from './Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    // use state for products
    const [products, setProducts] = useState([])
    // console.log(products)
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    // use state for add to cart
    const [cart, setCart] = useState([])
    const clickAddToCard = ({product}) => {
        console.log(product)
        let newCart = []
        const exists = cart.find(cartProduct => cartProduct.id === product.id)
        if(!exists){
            product.quantity = 1
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(cartProduct => cartProduct.id !== product.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }
        setCart(newCart)
        // store product information in local storage as a object
        addToDb(product.id)
    }
    // products.forEach(product => console.log(product.id))
    useEffect(()=>{
        const load_localstorage_Data = getShoppingCart()
        // console.log(load_localstorage_Data)
        const savedCard = []
        for(const Id in load_localstorage_Data){
            console.log(Id)
            const addedProduct = products.find(product => product.id === Id)
            if(addedProduct){
                const quantity = load_localstorage_Data[Id]
                addedProduct.quantity = quantity
                savedCard.push(addedProduct)
            }
            console.log(addedProduct)

        }
        setCart(savedCard)
    
    // Dependanci injection 
    }, [products])

    return (
        <div className='shop_container'>
            <div className="products_container">
                {
                    products.map(product => <Product product={product} key={product.id} clickAddToCard={clickAddToCard}></Product>)
                }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;