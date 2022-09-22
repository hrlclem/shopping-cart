import '../assets/css/Header.css';
import React from 'react';
import headerLogo from "../assets/img/headerLogo.png";
import shopLogo from "../assets/img/shopLogo.png";



const Header = () => {

    return(
        <div className='header'>
            <img alt="headerLogo" className="headerLogo" src={headerLogo}></img>
            <div className="rightSideHeader">
                <ul className="headerList">
                    <li>Home</li>
                    <li>About</li>
                </ul>
                <img alt="headerLogo" className="shopLogo" src={shopLogo}></img>
            </div>
        </div>
    )
}

export default Header;