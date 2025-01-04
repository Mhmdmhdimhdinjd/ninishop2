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
import PrivateRoute from './components/PrivateRoute.jsx'
import Page_not_found from './components/page-not-found.jsx';


function App() {

  
  return (

    <Provider store={store}>

      <Router >

        <Navbar />

        <Routes>

        <Route path="/Shoppingbasket" element={<PrivateRoute> <ShoppingBasket /> </PrivateRoute>} />


          <Route path="/Home" element={<Home/>} />

          <Route path="/Products" element={<Productslist />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="*" element={<Page_not_found />} />

        </Routes>

        <Footer />

      </Router>

    </Provider>

  );
}

export default App;
