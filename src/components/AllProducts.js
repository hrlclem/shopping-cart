import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Products.css';
import ProductInfo from './ProductInfo';

const AllProducts = () => {

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
        <div className='products'>  
            <div className='pageTitle'>Shop page with all products</div>
            <div className='mainDiv'>
                <div className='leftPanelDiv'>
                    <div className='categoryDiv'>
                        <div className='categoryTitle'>Categories</div>
                        <li>
                            <ul>Dog</ul>
                            <ul>Cat</ul>
                            <ul>Dolphin</ul>
                        </li>
                    </div>
                </div>
                <div className='allProductsDiv'>
                    {items.map(item => {
                        return(
                            <div className='uniqueProductDiv' key={item.id}>
                                <Link className="productLink" to={`/products/${item.id}`}>
                                    <ProductInfo 
                                        key={item.id} 
                                        product={item.title} 
                                        price={item.price}
                                        thumbnail={item.thumbnail}
                                    />
                                </Link>
                                <button className='productBtn'>Add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AllProducts;