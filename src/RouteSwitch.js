import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Shop from './components/Shop';
import ShoppingCart from './components/ShoppingCart';
import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function RouteSwitch() {
  return (
      <Router>
        <div className="App">
        <Header/>
          <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/shop" element={<Shop/>}/>
              <Route exact path="/shoppingCart" element={<ShoppingCart/>}/>
          </Routes>
        <Footer/>
        </div>
      </Router>

  );
}

export default RouteSwitch;
