import React,{useState,useRef} from 'react';
import "../styles/login.css"
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const nameRef=useRef(null)
    const passwordRef=useRef(null)
    const [active,setActive]=useState(false)
    const [eye,setEye]=useState(true)


    const login = (e) => {
      e.preventDefault()
      setActive(true)
    //    bacenddan malumot kelgandan song false boladi
    }
    return (
        <section className="login">
            <div className="container">
                <h2>Admin bo'limiga kirish</h2>
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <form onSubmit={login}>
                                    <input  ref={nameRef} placeholder="username" type="text"/>
                                    <input className="password" ref={passwordRef} placeholder="password" type={eye?"password":"text"}/>
                                    <i onClick={()=>{setEye(!eye)}} className="fas fa-eye"/>
                                    <i onClick={()=>{setEye(!eye)}} style={eye?{opacity:'0'}:{opacity:"1"}} className="fas fa-eye-slash"/>
                                    {
                                        active?
                                           <div style={{marginTop:"40px"}} className="w-100 d-flex align-items-center justify-content-center mb-3">
                                               <ClipLoader
                                                   loading={active}
                                                   color={"#E58211"}
                                                   size={30}
                                               />
                                           </div>
                                            :
                                            <button
                                                disabled={active}
                                                type="submit"
                                                // style={active?{opacity:"0.3"}:{opacity:"1"}}
                                            >
                                                <span>Kirish</span>
                                            </button>
                                    }


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
