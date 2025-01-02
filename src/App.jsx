import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Productslist from './components/Productslist'
import ShoppingBasket from './components/Shoppingbasket';
import Profile from './components/Profile';
import Slider from './components/Slider';


function App() {
  return (
    <Router>

      <Navbar/>

      <Slider/>

      <Routes>

        <Route path="/Products" element={<Productslist />} />

        <Route path="/Shoppingbasket" element={<ShoppingBasket />} />

        <Route path="/Profile" element={<Profile />} />

      </Routes>

    </Router>
  );
}

export default App;
