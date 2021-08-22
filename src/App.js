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
import { getCartItems } from "../src/services/cart";

const App = () => {
    const [cart, setCart] = useState([]);

    const getCartData = async () => {
        const data = await getCartItems();
        setCart(data.length);
    };
    console.log(cart);

    useEffect(() => {
        getCartData();
    }, []);

    const passToNav = (num) => {
        console.log(num);
        getCartData();
    };

    const passedFromCart = (num) => {
        console.log(num);
        getCartData();
    };

    return (
        <Router>
            <Navbar givetoCart={cart} />
            <Switch>
                <Route path="/product/:id">
                    <Product cartCount={passToNav} />
                </Route>
                <Route path="/cart">
                    <Cart deleteCount={passedFromCart} />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
