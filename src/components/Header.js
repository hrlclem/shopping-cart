import '../assets/css/Header.css';
import React from 'react';
import shopLogo from "../assets/img/shopLogo.png";
import { Link } from 'react-router-dom';
import {cartContent} from "../CartAction";


const Header = () => {

    const headerBtnStyle = {
        color:'white'
    };

    return(
        <div className='header'>
            <Link className="headerBtnLogo" to="/">
                <div className="headerLogo">BestStore</div>
            </Link>

            <div className="rightSideHeader">
                <ul className="headerList">
                    <Link className="headerBtn" style={headerBtnStyle} to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="headerBtn" style={headerBtnStyle} to="/products">
                        <li>Products</li>
                    </Link>                    
                    <Link className="headerBtn" style={headerBtnStyle} to="/about">
                        <li>About</li>
                    </Link>
                </ul>
                <Link className="logoShoppingCartHeader" to="/shoppingCart">
                    <img alt="headerLogo" className="shopLogo" src={shopLogo}></img>
                    <div className="shoppingCartQuantityDiv">{cartContent.length}</div>
                </Link>  
            </div>
        </div>
    )
}

export default Header;