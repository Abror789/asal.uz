import React, {useState, useEffect, useContext, useRef} from 'react';
import {CartContext} from "../Context/CartContext";
import '../styles/cart.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const [cart,setCart] = useContext(CartContext)


      const sum=cart.map((item)=>item.price)
      const res= sum.reduce(function(prev, curr){
           return parseInt(prev) + parseInt(curr);
       })


    const Decrement = (id,price,soni) => {
        setCart(cart=>cart.map((item)=>id===item.id?{...item,quantity:item.quantity+1}:item))
        // setCart(cart=>cart.map((item)=>id===item.id?{...item,price:(parseInt(price)+(parseInt(price)))}:item))
        if (soni===4){
            toast.warn('5ta zakaz bera olasiz')
        }
    }
    const Increment = (id,price,soni) => {

        setCart(cart=>cart.map((item)=>id===item.id?{...item,quantity:item.quantity-(item.quantity>1?1:0)}:item))
        // setCart(cart=>cart.map((item)=>id===item.id?{...item,price:(parseInt(item.price)-parseInt(price))}:item))
    }
    const Delete=(id)=>{
        const deletedCart = cart.filter(food => food.id !== id);
        setCart(deletedCart)
    }
    return (
        <section className="cart">
            <div className="container">
                    <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>Nomi</th>
                                <th>Narxi</th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                               cart.map((item,index)=>{

                                    return(
                                        <tr key={index.toString()}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td className="d-flex">
                                                <button onClick={()=>{
                                                    Increment(item.id,item.price,item.quantity)
                                                }}>-</button>
                                                <div className="ms-3 me-3 d-flex align-items-center justify-content-center">{item.quantity}</div>
                                                <button disabled={item.quantity===5?true:false} onClick={()=>{
                                                    Decrement(item.id,item.price,item.quantity)
                                                }}>+</button>
                                            </td>
                                            <td><i onClick={()=>{
                                                Delete(item.id)
                                            }} className="fas fa-trash-alt"/></td>
                                        </tr>
                                    )
                                })
                            }</tbody>
                        </table>
                        <button className="w-50">{"Buyurtma    "+ res+ " so'm"}</button>
                    </div>
            </div>
        </section>
    );
};

export default Cart;
