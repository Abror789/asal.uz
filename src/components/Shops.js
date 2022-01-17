import React from 'react';
import '../styles/shops.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Shops = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="shops">
            <div className="container">
               <h2>Bizning ishonchli do'konlarimiz</h2>
                <Carousel
                    className="carusel"
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div>
                        <a href="">
                            <img src="https://lh3.googleusercontent.com/HMAlPtWHFtgPX44mHfgqA6P7CjDnnUFq849cVkf6hqTvH08O-CGQdGtcYrFFdHS3Yi8=h1024-no-tmp_asaxiy_market_apk.jpg" alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://openshop.uz/">
                            <img src="https://openshop.uz/public/uploads/logo/e2nZVTXfAOPaCMkETlVcaBMPgdZjsL9dNfm0i5ky.webp" alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://jin.uz/">
                            <img src="https://jin.uz/wp-content/uploads/2020/09/jinlogo-5.png" alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://bringo.uz/">
                            <img src="https://lh3.googleusercontent.com/proxy/pOETiEv1uysWxbqZX_udf8keTaXkM8RbBAf_SEgnsdeutE0W-pb5mnBDu0VhfzhaI3af75BgJFbOUt6y7LP5L1Sl" alt=""/>
                        </a>
                    </div>
                    <div>
                        <a href="https://express24.uz/">
                            <img src="https://play-lh.googleusercontent.com/8KNY9whu-P3ZhJuEaiXB19wohRWlkeggk64UqaTNc5AAK9V1E1rAfu_N057FxZ76qmA" alt=""/>
                        </a>
                    </div>

                </Carousel>

            </div>
        </section>
    );
};

export default Shops;
