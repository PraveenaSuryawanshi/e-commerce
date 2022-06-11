import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import json from "./../singleItem.json";

const Home = () => {
  const data = json.items;
  const item = data.slice(0,5);
  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="caption">
                <h2>Luxury, For the Woman Who Deserves It</h2>
                <div className="line-dec"></div>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  <br />
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="main-button">
                 <Link to={`/products`}>
                 Order Now!
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featured-items">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>Featured Items</h1>
              </div>
            </div>
            <div className="col-md-12">
              <OwlCarousel className="owl-theme" loop margin={10}>
              {item.map((data)=>{
                    return (
                <div className="featured-item">
                  
                      <Link to={`/products/singleItem/${data.id}`}>
                        <img
                          src={data.image[0]}
                          alt={data.brand}
                          className="h300"
                        />
                        <h4>{data.brand}</h4>
                        <h6>₹{data.rate}</h6>
                      </Link>
                </div>
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

export default Home;
