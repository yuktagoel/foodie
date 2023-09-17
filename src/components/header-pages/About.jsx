import React from "react";

const About = ({ name, img, desc }) => {
  return (
    <div className="about__wrapper">
      <img className="about__img" src={img} alt="girl" />
      <div>{name}</div>
      <div>{desc}</div>
    </div>
  );
};

export default About;
