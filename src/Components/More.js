import React, { useState } from "react";
import "../CSS/More.css";
import Resume from "../Data/MariamAymanTahaResume.pdf";
import 'bootstrap/dist/css/bootstrap.min.css'

const More = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [displayedContent, setDisplayedContent] = useState("projects");

  const displayContent = (content) => {
    setDisplayedContent(content);
  };
  const displayDescription = (index) => {
    setHoveredProject(index);
  };
  const hideDescription = () => {
    setHoveredProject(null);
  };
  const open = (link) => {
    window.open(link, "_blank");
  };

  const projects = [
    {
      name: "Toffee Store",
      description:
        "A Java program for an online Toffee Store for viewing products and adding them to the cart.",
      link: "https://github.com/mariamayman10/Toffee",
    },
    {
      name: "Library Management System",
      description:
        "A Java based system and MySQL DB with features for book management, and user authentication.",
      link: "https://github.com/mariamayman10/LibraryManagementSystem",
    },
    {
      name: "Order & Notification Management System",
      description:
        "Two subsystems for managing orders and notifications, built using Java and SpringBoot.",
      link: "https://github.com/mariamayman10/OrderNotificationM",
    },
    {
      name: "FlixHub",
      description:
        "A comprehensive and user-friendly web application for browsing and discovering movies and series.",
      link: "https://github.com/mariamayman10/FlixHub",
    },
    {
      name: "ClaudiaWeather",
      description:
        "A ReactJS project that helps in navigating detailed temperature throughout world's cities.",
      link: "https://github.com/mariamayman10/ClaudiaWeather",
    },
    {
      name: "Country Population Viewer",
      description:
        "A Python GUI application that simulates real world statistics about different countries.",
      link: "https://github.com/mariamayman10/Country-Population-Viewer-openpyxl",
    },
  ];

  return (
    <>
      <div className="more-container col-lg-12 col-md-12 col-sm-12 col-12" id="more">
        <p className="More-title">More</p>
        <div className="btns-cont mb-5">
          <div className="btns col-12 col-sm-12 col-md-10 col-lg-6  m-auto">
            <button
              className="btn btn1 col-lg-4 col-md-4 col-sm-4 col-4"
              onClick={() => displayContent("projects")}
            >
              Projects
            </button>
            <button
              className="btn col-lg-4 col-md-4 col-sm-4 col-4"
              onClick={() => displayContent("resume")}
            >
              Resume
            </button>
            <button
              className="btn btn3 col-lg-4 col-md-4 col-sm-4 col-4"
              onClick={() => displayContent("contact")}
            >
              Drop Email
            </button>
          </div>
        </div>

        <div className="more-content">
          {displayedContent === "projects" && (
            <>
              <div className="projects-container col-lg-12 col-md-12 col-sm-12 col-12">
                {projects.map((project, index) => (
                  <div
                    className="project col-lg-3 col-md-4 col-sm-6 col-10"
                    key={index}
                    onMouseEnter={() => displayDescription(index)}
                    onMouseLeave={hideDescription}
                  >
                    <p
                      className="project-name"
                      style={{
                        display: index === hoveredProject ? "none" : "block",
                      }}
                    >
                      {project.name}
                    </p>
                    <span
                      className="description"
                      style={{
                        display: index === hoveredProject ? "block" : "none",
                      }}
                    >
                      {project.description}
                    </span>
                    <div className="git-icon">
                      <i
                        className="fa-brands fa-github"
                        onClick={() => open(project.link)}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
              <p className="note">
                Hover to view projects' description, for more CHECK{" "}
                <i
                  className="fa-brands fa-github"
                  onClick={() => open("https://github.com/mariamayman10")}
                ></i>
              </p>
            </>
          )}
          {displayedContent === "resume" && (
            <div className="resume-container p-3 m-auto col-lg-7 col-md-9 col-sm-10 col-12">
              <p className="resume-p">
                Thank you for your interest in learning more about my
                qualifications and experiences. Feel free to download my resume
                to get a comprehensive overview of my skills, education, and
                work history. As my journey continues, I am committed to
                constant learning and growth. I look forward to expanding my
                skillset and updating my resume with new achievements and
                experiences.
              </p>
              <div className="resume-btn-cont">
                <button className="resume-btn">
                  <a href={Resume}>
                    <i class="fa-solid fa-download"></i> &nbsp;Download my
                    Resume
                  </a>
                </button>
              </div>
            </div>
          )}
          {displayedContent === "contact" && (
            <div className="contact-container col-lg-7 col-md-8 col-sm-12 col-12 m-auto p-0 mb-5">
              <p className="contact-title pt-3 ps-3">Drop Your Message Here</p>
              <div className="row col-12 p-3 m-auto"> 
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name" className="ms-auto"/>
              </div>
              <div className="row col-12 p-3 m-auto">
                <input type="text" placeholder="Email Address"/>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="ms-auto"
                />
              </div>
              <div className="row col-12 p-3 m-auto">
                <textarea type="text" placeholder="Your Message"/>
              </div>
              <div className="cont-btn-cont pb-3">
                <button className="cont-btn">SEND</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default More;
