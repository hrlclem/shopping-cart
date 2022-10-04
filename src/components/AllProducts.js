import React, {useState, useEffect}  from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Products.css';
import ProductInfo from './ProductInfo';
// import Categories from './Categories';



const AllProducts = ({cartItems, addProduct}) => {

    useEffect(() => {
        fetchProducts();
    })

    const [items, setItems] = useState([]);

    const fetchProducts = async() => {
        const data = await fetch('https://dummyjson.com/products');
        const items = await data.json();

        setItems(items.products);
    }

    return(
        <div className='products'>  
            <div className='pageTitle'>Shop page with all products</div>
            <div className='mainDiv'>
                {/* <div className='categoriesDiv'>
                    {items.map(category => {
                            return(
                                <div className='categoryList' key={category.id}>
                                        <Categories 
                                            key={category.id} 
                                            category={category.category} 
                                        />
                                </div>
                            )
                    })};
                </div> */}
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
                                <button className='productBtn' onClick={() => {addProduct(Number(item.id), 1)}}>Add to cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default AllProducts;