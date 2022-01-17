import React, {useState, useEffect, useRef} from 'react';
import "../styles/productPage.css"
import products from "../Database/products";

const ProductPage = () => {
    const [product,setProduct]=useState(products)
    const [all,setAll]=useState(true)
    return (
        <section className="productPage">
            <div className="container">
                <div className="row">
                    <div className="col-3 col3">
                        <div className="card">
                            <div className="card-body p-0">
                                <h6>Asal turlari</h6>
                                <div className="type">
                                    <input onClick={()=>{setAll(!all)}} checked={all} type="checkbox"/>
                                    <p>Hammasi</p>
                                </div>
                                <div className="type">
                                    <input   type="checkbox"/>
                                    <p>Xom asal</p>
                                </div>
                                <div className="type">
                                    <input   type="checkbox"/>
                                    <p>Klassik asal</p>
                                </div>
                                <div className="type">
                                    <input   type="checkbox"/>
                                    <p>Maxsus asal</p>
                                </div>
                                <div className="type">
                                    <input   type="checkbox"/>
                                    <p>Oddiy suzilgan asal</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            {product.map((item,index)=>{
                                return(
                                    <div className="col-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="action">
                                                    aksiya
                                                </div>
                                                <img style={{width:"100%",height:"150px"}} src={item.image[0]} alt=""/>
                                                <span className="title">{item.name}</span>
                                                <div className="d-flex align-items-center justify-content-start">
                                                    <span className="price">{item.price} so'm</span>
                                                    <button>
                                                        <i className="fas fa-cart-plus"></i>
                                                    </button>
                                                </div>
                                                <button>Buyurtma qilish</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductPage;
