import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productslist from './components/Productslist'
import ShoppingBasket from './components/Shoppingbasket';
import Profile from './components/Profile';
import Slider from './components/Slider';
import Intro from './components/Intro'
import Product__demo from './components/products-demo';
// import Card__intro from './components/cardintro'


function App() {
  return (
    <Router >

      <Navbar/>

      <Slider/>

      <Intro/>

      <Product__demo/>

      {/* <Card__intro/> */}

      <Routes>

        <Route path="/Products" element={<Productslist />} />

        <Route path="/Shoppingbasket" element={<ShoppingBasket />} />

        <Route path="/Profile" element={<Profile />} />

      </Routes>

    </Router>
  );
}

export default App;
