import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "../CSS/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  const goContact = () => {
    const mailtoUrl = "mailto:mariamayman3131@gmail.com";
    const anchor = document.createElement("a");
    anchor.href = mailtoUrl;
    anchor.click();
  };

  return (
    <>
      <div className="header-cont col-lg-12 col-md-12 col-sm-12">
        <nav className="navbar navbar-expand-md fixed-top bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand ms-3">Mariam Ayman</a>

            <button
              className="navbar-toggler me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars-staggered"></i>
            </button>

            <div
              className="collapse navbar-collapse bg-dark p-lg-0 p-md-0 p-sm-2 p-2"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="about"
                    smooth={true}
                    duration={200}
                  >
                    ABOUT
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="skills"
                    smooth={true}
                    duration={200}
                  >
                    SKILLS
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    className="nav-link"
                    to="more"
                    smooth={true}
                    duration={200}
                  >
                    MORE
                  </ScrollLink>
                </li>
                <li className="nav-item d-sm-none">
                  <a
                    className="nav-link icon pt-lg-1 pt-md-1"
                    href="https://github.com/mariamayman10"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
                <li className="nav-item d-sm-none">
                  <a
                    className="nav-link icon"
                    href="https://www.linkedin.com/in/mariam-ayman-40957a267/"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="nav-item d-sm-none">
                  <a className="nav-link icon ">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <div className="d-none d-sm-block">
                  <a
                    className="nav-link icon ms-0"
                    href="https://github.com/mariamayman10"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    className="nav-link icon"
                    href="https://www.linkedin.com/in/mariam-ayman-40957a267/"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a className="nav-link icon">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </div>
                <li className="nav-item ms-lg-2 ms-md-2">
                  <button className="contact-btn" type="" onClick={goContact}>
                    Get Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
