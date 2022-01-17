import React from 'react';
import '../styles/main.css'
import {NavLink} from "react-router-dom";

const Main = () => {
    return (
        <section className="main">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7 left">
                        <div className="top">
                            <h2 className="first-text">Finger</h2>
                            <h2 className="second-text">licking</h2>
                           <div className="bee-text">
                               <img src="./images/bee-first.png" alt=""/>
                               <h2>honey!</h2>
                           </div>
                            <div className="buttons">
                               <NavLink style={{textDecoration:"none",color:"#fff"}} to="/products">Xarid... <i className="fas fa-cart-plus"/></NavLink>
                                <NavLink style={{textDecoration:"none",color:"#000"}} to="/about">Batafsil<i className="fas fa-chevron-right"/></NavLink>
                            </div>
                        </div>
                        <div className="honey">
                            <img src="./images/honey.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-5 right">
                        <img src="./images/bees.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
