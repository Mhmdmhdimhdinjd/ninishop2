import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Productslist from './components/Productslist'
import ShoppingBasket from './components/Shoppingbasket';
import Profile from './components/Profile';
import store from './redux/store';
import Home from './components/Home';
import ProductDetails from './components/Productdeteils';
import PrivateRoute from './components/PrivateRoute.jsx'
import Page_not_found from './components/page-not-found.jsx';
import Layout from './components/layout.jsx';

function App() {


  return (

    <Provider store={store}>



      <Router >

        <Routes>

          <Route path="/ninishop2/Shoppingbasket" element={<PrivateRoute> <Layout> <ShoppingBasket /></Layout> </PrivateRoute>} />

          <Route path="/ninishop2/Home" element={<PrivateRoute> <Layout><Home /> </Layout></PrivateRoute>} />

          <Route path="/ninishop2/Products" element={<PrivateRoute> <Layout><Productslist /> </Layout></PrivateRoute>} />

          <Route path="/ninishop2/profile" element={<PrivateRoute> <Layout><Profile /> </Layout></PrivateRoute>} />

          <Route path="/ninishop2/product/:id" element={<PrivateRoute> <Layout><ProductDetails /> </Layout></PrivateRoute>} />

          <Route path="/ninishop2" element={<PrivateRoute> <Layout><Home /> </Layout></PrivateRoute>} />

          <Route path="/ninishop2/*" element={<Page_not_found />} />

        </Routes>

      </Router>

    </Provider>

  );
}

export default App;
