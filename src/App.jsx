import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Productslist from './components/Productslist'
import ShoppingBasket from './components/Shoppingbasket';
import Profile from './components/Profile';
import store from './redux/store';
import Home from './components/Home';
import ProductDetails from './components/Productdeteils';
// import PrivateRoute from './components/PrivateRoute.jsx'
import Page_not_found from './components/page-not-found.jsx';
import Layout from './components/layout.jsx';

function App() {




  return (

    <Provider store={store}>



      <Router >

        <Routes>

          <Route path="/ninishop2/Shoppingbasket" element={<Layout> <ShoppingBasket /></Layout>  }/>

          <Route path="/ninishop2/Home" element={ <Layout><Home /> </Layout> }/>

          <Route path="/ninishop2/Products" element= {<Layout><Productslist /> </Layout> }/>

          <Route path="/ninishop2/profile" element={<Layout><Profile /> </Layout> }/>

          <Route path="/ninishop2/product/:id" element={<Layout><ProductDetails /> </Layout> }/>

          <Route path="/ninishop2" element={<Layout> <Home /> </Layout> }/>

          <Route path="/ninishop2/*" element={<Page_not_found />} />

        </Routes>

      </Router>

    </Provider>

  );
}

export default App;
