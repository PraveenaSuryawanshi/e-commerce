import React, { useEffect, useState, useRef } from "react";
import emailjs from "emailjs-com";

const Footer = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const form = useRef();

  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...email };
    console.log(data);
    setErrors(validate(email));
    setSubmit(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submit) {
      emailjs
        .sendForm(
          "service_ih9k71g",
          "template_eoja6zy",
          form.current,
          "IO66mzq1cNxXFCbQ8"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setEmail({ email: "" });
    }
  }, [errors]);

  const validate = (values) => {
    const error = {};
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!values.email) {
      error.email = " please enter email address";
    } else if (!regx.test(values.email)) {
      error.email = " please enter valid email";
    }
    return error;
  };

  return (
    <>
      <div className="subscribe-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>Subscribe on PIXIE now!</h1>
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              <div className="main-content">
                <p>
                  Integer vel turpis ultricies, lacinia ligula id, lobortis
                  augue. Vivamus porttitor dui id dictum efficitur. Phasellus
                  vel interdum elit.
                </p>
                <div className="container">
                  <form ref={form} id="subscribe" method="POST">
                    <div className="row">
                      <div className="col-md-7">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            value={email.email}
                            placeholder="Enter email address"
                            onChange={handleInput}
                          />
                          <p>{errors.email}</p>
                        </fieldset>
                      </div>
                      <div className="col-md-5">
                        <fieldset>
                          <button
                            onClick={handleSubmit}
                            type="submit"
                            id="form-submit"
                            className="button"
                          >
                            Subscribe Now!
                          </button>
                        </fieldset>
                        {Object.keys(errors).length === 0 && submit === true ? (
                          <p>sucessfully </p>
                        ) : null}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <img src="assets/images/header-logo.png" alt="" />
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">How It Works ?</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-rss"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>
                  Copyright &copy; 2019 Company Name - Design:{" "}
                  <a rel="nofollow" href="https://www.facebook.com/tooplate">
                    Tooplate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
