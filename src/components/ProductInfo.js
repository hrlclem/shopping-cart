import React  from 'react';
import '../assets/css/Products.css';

const ProductInfo = (props) => {

    const {product, key, price, thumbnail} = props;

    return(
        <div className='uniqueProduct' key={key}>
                <img alt="productImg" className='productImgAll' src={thumbnail}></img>
                <div className='productInfo'>
                    <div className='productTitle'>{product}</div>
                    <div className='productPrice'>{price}€</div>
                </div>
        </div>

    )
}

export default ProductInfo;