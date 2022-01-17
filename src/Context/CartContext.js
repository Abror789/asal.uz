import React,{useState} from "react";

export const CartContext=React.createContext();

export const CartProvider=(props)=>{
    const [cart,setCart]=useState(JSON.parse(localStorage.getItem("asal")) || [])
    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
