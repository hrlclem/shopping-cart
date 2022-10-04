import {React, useState, useEffect}  from 'react';
import '../assets/css/Cart.css';

const ShoppingCart = ({cartItems, addProduct}) => {

    useEffect(() => {
        fetchProducts();
    },[])

    const [items, setItems] = useState([]);

    const fetchProducts = async(productId) => {
        const data = await fetch(`https://dummyjson.com/products/`);
        const items = await data.json();

        setItems(items.products);
    }


    return(
        <div className='shoppingCart'>  
            <div className='breadcrumbLine'>homepage / products / shopping cart</div>
            <div className='cartMain'>
                {cartItems.length === 0 && (
                    <div className='emptyCartDiv'>Not items added yet</div>
                )}

                {cartItems.length !== 0 && (
                    <div className='fullCartDiv'>
                        <div className='headerCartDiv'>
                            <div className='cartTitle'>Shopping Cart</div>
                            <button className='cartRemoveBtn'>Remove All</button>
                        </div>
                        <div className='cartContentDiv'>
                            {items.map(item => {
                                if(cartItems.find(x => x.productId === item.id)){
                                    return(
                                        <div className='productLineCart' key={cartItems.productId}>
                                            <div className="imgContainer">
                                                <img alt="productImg" className='productImgAll' src={item.thumbnail}></img>
                                            </div>
                                            <div className='allProductInfo'>
                                                <div className='allProductTitle'>{item.title}</div>
                                                <div className='allProductTitle'>{item.price}€</div>
                                                <div className='allProductTitle'>--  {cartItems.quantity}  --</div>
                                            </div>
                                        </div>
                                )}})}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart;