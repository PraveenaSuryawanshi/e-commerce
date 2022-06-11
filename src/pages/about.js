import React from "react";
import about from "./../images/about-us.jpg";
import Footer from "../components/footer";

const About = () =>{
    return(
<>
<div className="about-page">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <div className="line-dec"></div>
              <h1>About Us</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="left-image">
              <img src={about} alt=""/>
            </div>
          </div>
          <div className="col-md-6">
            <div className="right-content">
              <h4>Classy Cloth</h4>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> 
              <br/>
              <p>Donec fermentum tincidunt tellus quis fermentum. Proin eget imperdiet purus. Nulla facilisi. Aliquam tincidunt porttitor dui sed euismod. Duis est libero, rhoncus fermentum turpis id, tempus fringilla ipsum. Nullam venenatis tincidunt neque vel hendrerit. Suspendisse porta pretium porttitor.</p>
              <br/>
              <p>Sed purus quam, ultricies eu leo in, sollicitudin varius quam. Proin dictum urna ac diam fermentum tempus. Pellentesque urna urna, ullamcorper a tincidunt dignissim, venenatis in nisi. Vivamus in volutpat tellus. Etiam fermentum luctus posuere.</p>
              <br/>
             
              <div className="share">
                <h6>Find us on: <span><a href="#"><i className="fa fa-facebook"></i></a><a href="#"><i className="fa fa-linkedin"></i></a><a href="#"><i className="fa fa-twitter"></i></a></span></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
</>
    )
}

export default About;