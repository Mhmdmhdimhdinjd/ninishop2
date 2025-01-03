import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Productslist from './components/Productslist'
import ShoppingBasket from './components/Shoppingbasket';
import Profile from './components/Profile';
import Footer from './components/Footer';
import store from './redux/store';
import Home from './components/Home';
import ProductDetails from './components/Productdeteils';


function App() {
  return (

    <Provider store={store}>

      <Router >

        <Navbar />

        <Routes>

          <Route path="/ninishop2/Home" element={<Home/>} />

          <Route path="/Products" element={<Productslist />} />

          <Route path="/Shoppingbasket" element={<ShoppingBasket />} />

          <Route path="/ninishop2/profile" element={<Profile />} />

          <Route path="/ninishop2/product/:id" element={<ProductDetails />} />

        </Routes>

        <Footer />

      </Router>

    </Provider>

  );
}

export default App;
