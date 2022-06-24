import React from "react";
import json from "./../singleItem.json";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
const Product = (props) => {
    return(
        <>
       <div className="featured-page">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>Featured Items</h1>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div id="filters" className="button-group">
              <button className="btn btn-primary" >All Products</button>
              <button className="btn btn-primary">Newest</button>
              <button className="btn btn-primary" >Low Price</button>
              <button className="btn btn-primary">Hight Price</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="featured container no-gutter">
        <div className="row posts isotope">
        {
           json.items.map((data,i)=>{
               return (
                 <div key={data.id} className="item new col-md-4 isotope-item">
                   <Link to={`/products/singleItem/${data.id}`}>
                     <div className="featured-item">
                       <img src={data.image[0]} alt="" />
                       <h4>{data.brand}</h4>
                       <h6>₹{data.rate}</h6>
                     </div>
                   </Link>
                 </div>
               );
           })
       }
        </div>
    </div>
    <Footer/>
        </>
    )
}

export default  Product;