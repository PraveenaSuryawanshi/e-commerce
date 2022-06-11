import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import emptyCart from "../images/empty-cart.png";

const CardItem = () => {
  const stock = JSON.parse(localStorage.getItem("items"));
  const getdata = useSelector((state) => state.amount);
  const [list, updatedlist] = useState(getdata);

  const ondelet = (e) => {
      let name = e.target.getAttribute("name")
      updatedlist(list.filter(item => item.name !== name));
      console.log( "cartitm");
  }
  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>shopping Cart</h1>
              </div>
            </div>
          </div>

          {getdata.length != 0
            ? list.map((items, i) => {
                return (
                  <>
                    <div className="row" key={i}>
                      <div className="col-md-3">
                        <img src={items.image} alt="" className="h100" />
                      </div>
                      <div className="col-md-6">
                        <h4>{items.name}</h4>
                        <p>quantity : {stock}</p>
                        <span name={items.name} className="cursor" onClick={ondelet}>Delete</span> <span><Link to ="/products">see more like this</Link> </span>
                      </div>
                      <div className="col-md-3">
                        {stock > 1 ? (
                          <h3>₹ {stock.length * items.rate}</h3>
                        ) : (
                          <h3> ₹ {items.rate}</h3>
                        )}
                      </div>
                    </div>
                    <hr />
                  </>
                );
              })
            : <img src={emptyCart} className="center" alt="empty" />
        }
        </div>
      </div>
    </>
  );
};

export default CardItem;
