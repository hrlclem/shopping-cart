import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Products.css';



const Products = () => {

    useEffect(() => {
        fetchProducts();
    },[])

    const [items, setItems] = useState([]);

    const fetchProducts = async() => {
        const data = await fetch('https://dummyjson.com/products');
        const items = await data.json();

        setItems(items.products);
        console.log((items.products[0]));
    }

    return(
        <div className='products'>  
            <div className='pageTitle'>Shop page with all products</div>
            <div className='allProductsDiv'>
                {items.map(item => {
                    return(
                        <div className='uniqueProductDiv'>
                            <div className='uniqueProduct' key={item.id}>
                                <Link className="productLink" to={`/products/${item.id}`}>
                                    <img alt="productImg" className='productImgAll' src={item.thumbnail}></img>
                                    <div className='productInfo'>
                                        <div className='productPrice'>{item.price}€</div>
                                        <div className='productTitle'>{item.title}</div>
                                    </div>
                                </Link>
                                <button className='productBtn'>Add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Products;