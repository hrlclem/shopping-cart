import '../assets/css/Homepage.css';
import React from 'react';
import homepagePic from "../assets/img/homepagePic.jpg";
import {Link} from 'react-router-dom';

const Homepage = ({cartItems}) => {

    return (
        <div className="fullPage">
            <div className='homepage'>
                <div className="leftPresentation">
                    <div className="titlePresentation">BestStore of the year</div>
                    <div className="descriptionPresentation">Find everything, <br></br>deliver everywhere</div>
                    <Link to="/products">
                        <button className="presentationBtn">SHOP NOW</button>        
                    </Link>  
                </div>      

                <img alt="homepagePic" className="homepagePic" src={homepagePic}></img>
            </div>
        </div>
    );
  };
  
  export default Homepage;