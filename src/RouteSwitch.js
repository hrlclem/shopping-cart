import './assets/css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import AllProducts from './components/AllProducts';
import About from './components/About';
import ShoppingCart from './components/ShoppingCart';
import ItemDetail from './components/ItemDetail';

import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function RouteSwitch() {

  const [cartItems, setCartItems] = useState([{productId: 3, quantity: 1}, {productId: 4, quantity: 1}]);

  const addProduct = (productId, qty) => {
    const ProductExist = cartItems.find((item) => item.productId === productId);
    if(ProductExist){
      setCartItems(cartItems.map((item)=> 
        item.productId === productId ? 
        {...ProductExist, quantity: ProductExist.quantity + qty}
        : item)
      );
    }
    else{
      setCartItems([...cartItems, {productId: productId, quantity: qty}]);
    }
  }

  const removeProduct = (productId, qty) =>{
    const ProductExist = cartItems.find((item) => item.productId === productId);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.productId !== productId))
    }
    else {
      setCartItems(cartItems.map((item)=> 
        item.productId === productId ? 
        {...ProductExist, quantity: ProductExist.quantity - 1}
        : item)
    );
    }
  }

  const removeProdComplete = (productId) => {
      setCartItems(cartItems.filter((item) => item.productId !== productId))
    };
  
  const emptyCart = () => {
    setCartItems([]);
  };

  


  return (
      <Router>
        <div className="App">
        <Header cartItems={cartItems}/>
          <Routes>
              <Route exact path="/" 
                  element={<Homepage/>} />
              <Route exact path="/products" 
                  element={
                  <AllProducts 
                    cartItems={cartItems} 
                    addProduct={addProduct}
                  />}/>
              <Route exact path="/about" 
                  element={<About/>}/>
              <Route exact path="/shoppingCart" 
                  element={
                  <ShoppingCart 
                    cartItems={cartItems} 
                    setCartItems={setCartItems}
                    addProduct={addProduct}
                    removeProduct={removeProduct}
                    removeProdComplete={removeProdComplete}
                    emptyCart={emptyCart}
                  />}/>
              <Route path='/products/:id' 
                  element={
                  <ItemDetail 
                    cartItems={cartItems} 
                    addProduct={addProduct}
                  />}/>
          </Routes>
        <Footer/>
        </div>
      </Router>

  );
}

export default RouteSwitch;
