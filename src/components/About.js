import React from 'react';
import '../styles/about.css'

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="row">
                    <div className="col-6 first">
                        <div className="img2">
                            <img src="./images/bg2.png" alt=""/>
                        </div>
                        <div className="img1">
                            <img src="./images/bg1.png" alt=""/>
                        </div>
                        <div className="img3">
                            <img src="./images/asal1.png" alt=""/>
                        </div>
                        <div className="img4">
                            <img src="./images/bee-first.png" alt=""/>
                        </div>
                    </div>
                    <div className="col-6 second">
                        <h2>Tabiat qo'ynida yaratilgan asal.</h2>
                        <p>Asal kundalik ovqatlanish jadvalingizning asosiy tarkibiy qismlaridan biridir. Brend sifatida
                            sizga yordam beradigan marketing strategiyasi kerak...</p>
                        <button>Batafsil ...</button>
                    </div>
                </div>
                <div className="row second-row">
                    <div className="col-6 second">
                        <h2>Sizning asalingiz yomon ta'mga egami? Bizni sinab ko'ring!</h2>
                        <p>Asal kundalik ovqatlanish jadvalingizning asosiy tarkibiy qismlaridan biridir. Brend sifatida
                            sizga yordam beradigan marketing strategiyasi kerak...</p>
                        <button>Batafsil ...</button>
                    </div>
                    <div className="col-6 first">
                        <div className="img2">
                            <img src="./images/bg2.png" alt=""/>
                        </div>
                        <div className="img1">
                            <img src="./images/bg1.png" alt=""/>
                        </div>
                        <div className="img3">
                            <img src="./images/asal2.png" alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
