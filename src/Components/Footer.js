import React from "react";
import "../CSS/all.css";
import "../CSS/Footer.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
      <div className="footer col-12 d-flex">
        <div className="left col-4 mt-auto">
          <p className="logo">Mariam Ayman</p>
        </div>
        <div className="right col-8 mt-auto">
          <div className="icons">
            <a className="icon link" href="https://github.com/mariamayman10">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="icon link"
              href="https://www.linkedin.com/in/mariam-ayman-40957a267/"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="icon link">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </div>

          <p class="copyright">Copyright © 2024 Mariam Ayman.</p>
        </div>
        <div className="main-floot col-lg-8 col-md-10 col-sm-12 col-12">
                <div className="text col-lg-4 col-md-5 col-sm-12 col-12">Take a look on my projects, and drop your Email.</div>
                <div className="input col-lg-8 col-md-7 col-sm-12 col-12">
                  <input type="text" placeholder="Email"/>
                  <button>Submit</button>
                </div>
            </div>
      </div>
    </>
  );
};
export default Footer;
