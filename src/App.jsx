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

          <Route path="/ninishop2/Shoppingbasket" element={<PrivateRoute> <ShoppingBasket /> </PrivateRoute>} />

          <Route path="/ninishop2/Home" element={<PrivateRoute><Home /></PrivateRoute>} />

          <Route path="/ninishop2/Products" element={<PrivateRoute><Productslist /></PrivateRoute>} />

          <Route path="/ninishop2/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          <Route path="/ninishop2/product/:id" element={<PrivateRoute><ProductDetails /></PrivateRoute>} />

          <Route path="/ninishop2/*" element={<Page_not_found />} />

        </Routes>

        <Footer />

      </Router>

    </Provider>

  );
}

export default App;
