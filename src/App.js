import styles from "./App.module.scss";
import { useState, useEffect } from "react";
import Home from "./containers/home/Home";
import Cart from "./containers/cart/Cart";
import Products from "./containers/products/Products";
import Product from "./components/product/Product";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  const [cartTally, setCartTally] = useState();

  const handleCartCount = (tally) => {
    setCartTally(tally);
  };

  return (
    <Router>
      <Navbar addTally={cartTally} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Home />
        </Route>
        <Route path="/products/:id">
          <Product getCount={handleCartCount} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
