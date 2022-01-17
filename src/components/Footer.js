import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div>
                    <img src="./images/logo-black.png" alt=""/>
                </div>
                <p>Asal asosiy ingredientlardan biridir <br/> kundalik ovqatlanish jadvalingizda </p>
                <div className="socials">
                    <img src="./images/f.png" alt=""/>
                    <img src="./images/t.png" alt=""/>
                    <img src="./images/g.png" alt=""/>
                    <img src="./images/p.png" alt=""/>
                </div>
                <div className="download">
                    <img src="./images/google.png" alt=""/>
                    <img src="./images/apple.png" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Footer;
