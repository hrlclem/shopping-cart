import {React, useState, useEffect}  from 'react';
import '../assets/css/ShoppingCart.css';

const ShoppingCart = ({cartItems, addProduct, removeProduct, removeProdComplete, emptyCart}) => {

    useEffect(() => {
        fetchProducts();
    },[])

    const [items, setItems] = useState([]);

    const fetchProducts = async() => {
        const data = await fetch(`https://dummyjson.com/products/`);
        const items = await data.json();
        setItems(items.products);
    }

    let itemsPrice = 0;
    const calculatePrices = items.map(item => {
        if(cartItems.find(x => x.productId === item.id)){
            let indexOfItem = cartItems.findIndex(x => x.productId === item.id);
            itemsPrice += item.price * cartItems[indexOfItem].quantity;
        };
    });

    const taxPrice = itemsPrice *0.2;
    const totalPrice = itemsPrice + taxPrice; 

    return(
        <div className='shoppingCart'>  
            <div className='breadcrumbLine'>homepage / products / shopping cart</div>
            <div className='cartMain'>
                {cartItems.length === 0 && (
                    <div className='emptyCartDiv'>No items added yet</div>
                )}
                {cartItems.length !== 0 && (
                    <div className='fullCartDiv'>
                        <div className='headerCartDiv'>
                            <div className='cartTitle'>Shopping Cart</div>
                            <button className='cartRemoveBtn' onClick={() => emptyCart()}>Remove All</button>
                        </div>
                        <div className='cartContentDiv'>
                            {items.map(item => {
                                if(cartItems.find(x => x.productId === item.id)){
                                    let indexOfItem = cartItems.findIndex(x => x.productId === item.id);
                                    return(
                                        <div className="itemRow">
                                        {cartItems[indexOfItem].quantity > 0 &&
                                            <div className='fullItemCart' key={item.id}>
                                                <div className="imgContainerCart">
                                                    <img alt="prodImgCart" className='prodImgCart' src={item.thumbnail}></img>
                                                    <div className='prodCartTitle'>{item.title}</div>
                                                </div>
                                                <div className='rightSideCart'>
                                                    <div className='updateQtyDiv rightDiv'>
                                                        <button className='substractBtn countBtn' onClick={() => removeProduct(item.id, cartItems[indexOfItem].quantity)}>-</button>  
                                                        <div className='prodCartQty'>{cartItems[indexOfItem].quantity}</div>
                                                        <button className='addBtn countBtn' onClick={() => addProduct(item.id, 1)}>+</button>          
                                                    </div>
                                                    <div className='priceRmvDiv'>
                                                        <div className='prodCartPrice'>{item.price * cartItems[indexOfItem].quantity}€</div>
                                                        <button className='removeCartItem' onClick={() => removeProdComplete(item.id)}>REMOVE</button>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                   </div>
                                )}})}
                        </div>
                        <div className='totalCartDiv'>
                            <div className='titlesPrice'>
                                <div className='itemsPriceTitle'>Item Price</div>
                                <div className='itemTaxTitle'>Tax Price</div>
                                <div className='totalCartTitle'>Total Price</div>
                            </div>
                            <div className='valuesPrice'>
                                <div className='itemsPrice'>{itemsPrice}€</div>
                                <div className='itemTax'>{taxPrice.toFixed(2)}€</div>
                                <div className='totalCart'>{totalPrice.toFixed(2)}€</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ShoppingCart;