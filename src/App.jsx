import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Productslist from './components/Productslist'
import ShoppingBasket from './components/Shoppingbasket';
import Profile from './components/Profile';
import Slider from './components/Slider';
import Intro from './components/Intro'
import Product__demo from './components/products-demo';
// import Card__intro from './components/cardintro'
import Footer from './components/Footer';
import store from './redux/store';




function App() {
  return (

    <Provider store={store}>

      <Router >

        <Navbar />

        <Slider />

        <Intro />

        <Product__demo />

        <ShoppingBasket />

        {/* <Card__intro/> */}

        <Footer />


        <Routes>

          <Route path="/Products" element={<Productslist />} />

          <Route path="/Shoppingbasket" element={<ShoppingBasket />} />

          <Route path="/Profile" element={<Profile />} />

        </Routes>

      </Router>

    </Provider>

  );
}

export default App;
