import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// import headerLog from  './../images/header-logo.png';
import headerLog from "./../images/logo.png";
import { useSelector } from "react-redux";
const Navbar = (props) => {
  const state = useSelector((state) => state.amount);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <>
      <div id="pre-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <span>
                Don’t just follow fashion… set fashion trends!{" "}
                <i class="fa fa-bolt" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-custom static-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={headerLog} alt="" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button" onClick={toggleClass} 
            
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={isActive?"collapse-show":"navbar-collapse"} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/e-commerce">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <Link to="/cardItem" className="cart">
              <i class="fa fa-shopping-cart"></i>
              <span className="number_items">{state.length}</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
