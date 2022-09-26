import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Products from './components/Products';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';
import ItemDetail from './components/ItemDetail';

import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function RouteSwitch() {
  return (
      <Router>
        <div className="App">
        <Header/>
          <Routes>
              <Route exact path="/" element={<Homepage/>}/>
              <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/shoppingCart" element={<ShoppingCart/>}/>
              <Route path='/products/:id' element={<ItemDetail/>}/>
          </Routes>
        <Footer/>
        </div>
      </Router>

  );
}

export default RouteSwitch;
