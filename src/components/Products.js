import React,{useState,useContext,useEffect} from 'react';
import '../styles/products.css'
import products from "../Database/products";
import {CartContext} from "../Context/CartContext";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import {NavLink} from "react-router-dom";
const Products = () => {
    const [cart,setCart] = useContext(CartContext)
    const [honey,setHoney]=useState(products)
    const [open,setOpen]=useState(false)
    const [info,setInfo]=useState({})
    const [img,setImg]=useState()
    const [imgIndex,setImgIndex]=useState(0)
    const openModal = () => {
      setOpen(!open)
    }
    const imgActive = (index) => {
      setImgIndex(index)
    }
    useEffect(() => {
        localStorage.setItem("asal", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("asal")));
    }, []);
    const addToCart=(product)=>{
        setCart([...cart,product])
    }
    const arr=[]
    cart.forEach(element => {
        arr.push(element.id)
    });
    return (
        <>
            <section className="products">
                <div className="container">
                    <div className="info">

                        <h2>Bizning Mahsulotlar</h2>
                        <NavLink to="/products">Hammasini ko'rish</NavLink>
                    </div>
                    <div className="row">
                        {honey.map((item,index)=>{
                            return(
                                <div key={index.toString()} className="col-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="first">
                                                <h4>{item.name}</h4>
                                                <p>{item.desc}</p>
                                                <h6 onClick={()=>{
                                                    openModal()
                                                    setInfo(item)
                                                }}>Batafsil...</h6>

                                                {arr.includes(item.id)
                                                    ?
                                                    <button disabled={true}>
                                                        Savatchada bor
                                                    </button>
                                                    :
                                                    <button onClick={()=>{
                                                        addToCart(item)
                                                    }}>Xarid ...</button>
                                                }







                                            </div>
                                            <div className="second">
                                                <img src={item.image[0]} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Modal open={open} onClose={openModal} center>
                <div className="more">
                    <div className="more-main">
                        <h6 className="more-title">{info.name}</h6>
                        <span className="more-title price">Xarid <i className="fas fa-cart-plus"/></span>
                        <span className="more-title price">{info.price} so'm</span>
                    </div>
                    <div className="more-main-img">
                        <img src={img?img:(info.image?info.image[0]:'')} alt=""/>
                    </div>
                    {info.image?
                        <div className="more-images-div">
                            {info.image.map((item,index)=>{
                                return(
                                    <img onClick={()=>{
                                        setImg(item)
                                        imgActive(index)
                                    }} key={index.toString()} className={imgIndex===index?'more-image active':"more-image"} src={item} alt=""/>
                                )
                            })}
                        </div>
                        :
                        <div>
                            <h1>Ma'lumot yo'q</h1>
                        </div>
                    }
                </div>
            </Modal>
        </>
    );
};

export default Products;
