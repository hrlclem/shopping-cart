import React, {useState, useEffect}  from 'react';
import { useParams } from 'react-router-dom';
import '../assets/css/ItemDetail.css';




const ItemDetail = () => {

    const productId = useParams().id;

    useEffect(() => {
        fetchItem();
    },[]);

    const [item, setItem] = useState({});

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://dummyjson.com/products/${productId}`);
        const item = await fetchItem.json();

        setItem(item);
    };

    return(
        <div className='itemPage'>  
            <h1>{item.title}</h1>
            <img alt='productImg' src={item.thumbnail}></img>
            <div className="productPrice">{item.price}</div>
        </div>
    )
}

export default ItemDetail;