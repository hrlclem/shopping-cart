import React, {useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/ItemDetail.css';


const ItemDetail = () => {

    const productId = useParams().id;

    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({});
    const [itemQty, setItemQty] = useState(1);

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://dummyjson.com/products/${productId}`);
        const item = await fetchItem.json();

        setItem(item);
    };
    const addQty = () => {
        setItemQty(itemQty+1)
    };

    const subQty = () => {
        if(itemQty === 1){
            return;
        }
        setItemQty(itemQty-1)
    };

    return(
        <div className='productInfoPage'>
            <div className='breadcrumbLine'>homepage / products / {item.category} / {item.title}</div>
            <div className='productDetails'>
                <div className='leftProductInfo'> 
                    <img alt='productImg' src={item.thumbnail}></img>
                </div>
                <div className='rightProductInfo'>  
                    <h1 className="productTitle rightDiv">{item.title}</h1>
                    <div className="productDescription rightDiv">{item.description}</div>            
                    <div className="productPrice rightDiv">{item.price}€</div>  
                    <div className='quantityManageDiv'>
                        <div className='updateQuantityDiv rightDiv'>
                            <button className='substractBtn countBtn' onClick={subQty}>-</button>  
                            <div className='quantityCount'>{itemQty}</div>          
                            <button className='addBtn countBtn' onClick={addQty}>+</button>          
                        </div>
                        <button className='productAddToCartBtn rightDiv'>Add to Cart</button>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;