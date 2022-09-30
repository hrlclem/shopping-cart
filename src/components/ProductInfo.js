import React  from 'react';
import '../assets/css/Products.css';

const ProductInfo = (props) => {

    const {product, key, price, thumbnail} = props;

    return(
        <div className='uniqueProduct' key={key}>
                <div className="imgContainer">
                    <img alt="productImg" className='productImgAll' src={thumbnail}></img>
                </div>
                <div className='allProductInfo'>
                    <div className='allProductTitle'>{product}</div>
                    <div className='allProductPrice'>{price}€</div>
                </div>
        </div>

    )
}

export default ProductInfo;