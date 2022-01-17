import React, {useContext, useState} from 'react';
import '../styles/header.css'
import {NavLink} from "react-router-dom";
import {CartContext} from "../Context/CartContext";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const Header = () => {
    const asalToken=localStorage.getItem('asalToken')
    const [cart,setCart] = useContext(CartContext)
    const [modal,setModal]=useState(false)
    const openModal = () => {
      setModal(!modal)
    }
    return (
       <>
           <section className="header">
               <div className="container">
                   <div className="left">
                       <NavLink to="/">
                           <img src="./images/logo.png" alt=""/>
                       </NavLink>
                   </div>
                   <div className="right">
                       <NavLink to="/" activeClassName="ctive">Bosh sahifa</NavLink>
                       <NavLink to="/about" activeClassName="ctive">Biz haqimizda</NavLink>
                       <NavLink to="/products" activeClassName="ctive">Mahsulotlar</NavLink>
                       <NavLink to="/cart" activeClassName="ctive">Savatcha <i className="fas fa-cart-plus"/> {cart.length>=1?<h2>{cart.length}</h2>:''}</NavLink>
                       {
                           asalToken
                               ?
                               <NavLink to="/cabinet" activeClassName="ctive">Kabinet <i className="fas fa-user"/></NavLink>
                               :
                               <button onClick={openModal} className="register">Kirish</button>
                       }


                   </div>
               </div>
           </section>
           <Modal open={modal} onClose={openModal} center>
               <h2 className="register-title">Ro'yxatdan oting</h2>
               <form>
                   <input placeholder="Ism" type="text"/>
                   <input placeholder="Telefon raqam" type="text"/>
                   <input placeholder="Parol" type="password"/>
                   <button className="register-button">Kirsh</button>
               </form>
           </Modal>
       </>
    );
};

export default Header;
