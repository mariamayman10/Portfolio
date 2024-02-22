import React from "react";
import "../CSS/MainSection.css";
const MainSection = () => {
  return (
    <>
      <div className="mainsection-container col-lg-12 col-md-12 col-sm-12" id="about">
        <div className="mainsection-content col-lg-6 col-md-10 col-sm-11 ms-lg-5 ms-md-3 ms-sm-2">
          <div className="welcome-btn-cont">
            <button className="welcome-btn">Welcome to my Portfolio</button>
          </div>

          <div className="animation">
            Hey! I'm Mariam Ayman. <br />
            <span className="mb-5"></span>
          </div>
          <div className="breif-div col-lg-8 col-md-10 col-sm-12">
            <p className="breif">
              As a dedicated student at FCAI-CU, I am on track to earn my
              bachelor's degree in 2025. Driven by a relentless pursuit of
              excellence, I am committed to enhancing my problem-solving skills
              and expanding my knowledge of cutting-edge frameworks and web
              technologies. My relentless drive to excel in web development
              motivates me to continually seek opportunities for growth and
              advancement. I am open to valuable insights and advice from
              experienced professionals who can help propel me towards achieving{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
