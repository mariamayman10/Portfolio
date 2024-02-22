import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import "../CSS/Skills.css";

const Skills = () => {
  const skills = [
    { name: "C++ Mastery", percent: 95 },
    { name: "Python Proficiency", percent: 80 },
    { name: "Java Expertise", percent: 90 },
    { name: "SWE Concepts", percent: 85 },
    { name: "CS Fundamentals", percent: 90 },
    { name: "HTML Proficiency", percent: 95 },
    { name: "CSS Proficiency", percent: 90 },
    { name: "JS Proficiency", percent: 95 },
    { name: "Bootstrap Proficiency", percent: 95 },
    { name: "Django Competence", percent: 75 },
    { name: "ReactJS Proficiency", percent: 90 }
  ];
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200)
        setSlidesPerView(4);
      else if (screenWidth >= 1000)
        setSlidesPerView(3); 
      else if(screenWidth >= 600)
        setSlidesPerView(2)
      else
        setSlidesPerView(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="skills-container col-lg-12 col-md-12 col-sm-12 col-12" id="skills">
      <p className="title">Skills</p>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper col-lg-7 col-md-8 col-sm-11 col-11"
      >
        {
        skills.map((skill, index) => (
          <SwiperSlide key={index} className='skills-content'>
            <div className="skill">
              <div className="outer">
                <div className="inner">
                  <p className="skill-percent">{skill.percent}%</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id={`GradientColor-${index}`}>
                    <stop offset="0%" stopColor="#4500BB" />
                    <stop offset="50%" stopColor="#5821B8" />
                    <stop offset="100%" stopColor="#844DE3" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="80" 
                  cy="80" 
                  r="70" 
                  strokeLinecap="round" 
                  style={{
                    strokeDasharray: `${2 * Math.PI * 70}`,
                    strokeDashoffset: `${(100 - skill.percent) * (2 * Math.PI * 70) / 100}`,
                    fill: "none",
                    stroke: `url(#GradientColor-${index})`
                  }}
                  className='skill-circle'
                />
              </svg>
              <p className="skill-name">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skills;
