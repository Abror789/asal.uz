import React from 'react';
import Main from "../components/Main";
import Shops from "../components/Shops";
import About from "../components/About";
import Products from "../components/Products";

const Home = () => {
    return (
        <div>
            <Main/>
            <Shops/>
            <About/>
            <Products/>
        </div>
    );
};

export default Home;
