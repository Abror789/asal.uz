import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutMain from "./pages/AboutMain";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Cart from "./pages/Cart";
import {CartProvider} from "./Context/CartContext";
import Login from "./dashboardPages/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductPage from "./pages/ProductPage";

const App = () => {
    return (
        <>
            <CartProvider>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={AboutMain}/>
                        <Route path="/products" exact component={ProductPage}/>
                        <Route path="/cabinet" exact component={AboutMain}/>
                        <Route path="/cart" exact component={Cart}/>
                        <Route path="/dashboard" exact component={Login}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </CartProvider>
            <ToastContainer />


        </>
    );
};

export default App;
