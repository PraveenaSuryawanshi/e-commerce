import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import { useParams } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import json from "./../../src/singleItem.json";
import OrderAdd from "./orderAdd";
import { FreeMode, Navigation, Thumbs } from "swiper";
import Footer from "./footer";

const SingleProduct = (props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  let params = useParams();
  console.warn(props);

  return (
    <>
      <div className="single-product">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>Single Product</h1>
              </div>
            </div>
            {json.items.map((item, index) => {
              return item.id === params.id ? (
                <>
                  <div key={index} className="col-md-6">
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mySwiper2"
                    >
                      {item.image.map((imgs) => {
                        return (
                          <SwiperSlide>
                            <img className="center" src={imgs} />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>

                    <Swiper
                      onClick={setThumbsSwiper}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={4}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                      className="mt-20"
                    >
                      {item.image.map((imgs) => {
                        return (
                          <SwiperSlide>
                            <img className="center h100" src={imgs} />
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                  <div className="col-md-6">
                    <div className="right-content">
                      <h4>{item.name}</h4>
                      <h6>₹{item.rate}</h6>
                      <ul>
                        {item.desc.map((c) => {
                          return <li>{c}</li>;
                        })}
                      </ul>
                      <span>{item.stock} left on stock</span>
                      <OrderAdd id={item.id} value="Order Now!" />
                      <div className="down-content">
                        <div className="categories">
                          <h6>
                            Brand:{" "}
                            <span>
                              <a href="#">{item.brand}</a>
                            </span>
                          </h6>
                        </div>
                        <div className="share">
                          <h6>
                            Share:{" "}
                            <span>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                              <a href="#">
                                <i className="fa fa-linkedin"></i>
                              </a>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div className="featured-items">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>You May Also Like</h1>
              </div>
            </div>
            <div className="col-md-12">
              <OwlCarousel className="owl-theme" loop margin={10}>
                {json.items.map((data) => {
                  return (
                    <Link to={`/e-commerce/products/singleitem/${data.id}`}>
                      <div className="featured-item">
                        <img src={data.image[0]} alt={data.brand} />
                        <h4>{data.brand}</h4>
                        <h6>{data.rate}</h6>
                      </div>
                    </Link>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
