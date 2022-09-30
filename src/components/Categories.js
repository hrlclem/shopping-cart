import React from 'react';
import '../assets/css/Products.css';

const Categories = (props) => {

    return(
        <div className='categoryDiv'>
            {props.categories}
        </div>
    )
}

export default Categories;