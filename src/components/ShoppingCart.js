import React, {useState, useEffect}  from 'react';
import '../assets/css/Cart.css';
import { cartContent } from '../CartAction';



const ShoppingCart = () => {

    useEffect(() => {
        fetchProducts();
    },[])

    const [items, setItems] = useState([]);

    const fetchProducts = async() => {
        const data = await fetch('https://dummyjson.com/products');
        const items = await data.json();

        setItems(items.products);
        console.log(items.products)
    }

    return(
        <div className='shoppingCart'>  
            <div className='breadcrumbLine'>homepage / products / shopping cart</div>
            <div className='cartMain'>
                <div className='headerCartDiv'>
                    <div className='cartTitle'>Shopping Cart</div>
                    <button className='cartRemoveBtn'>Remove All</button>
                </div>
                <div className='cartContentDiv'>
                    <div className='cartProductDiv'>
                        {cartContent.map(item => {
                            console.log(item);
                            return(
                                <div className='productLineCart' key={item.id}>
                                    {item}
                                    {/* <Link className="productLink" to={`/products/${item.id}`}>
                                        <ProductInfo 
                                            key={item.id} 
                                            product={item.title} 
                                            price={item.price}
                                            thumbnail={item.thumbnail}
                                        />
                                    </Link> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;