import React from "react";
import "./Intro.css";
import bg from "../../Assets/photo1.jpeg";
import { Link } from "react-scroll";
import bgnImg from "../../Assets/contact.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
      <span className="hello">Hello,</span>
      <span className="introText">I'm <span className="introName">Tanaya</span><br/>Website Designer</span>
      <p className="introPara">I am a skilled web designer with experience </p>
      <Link>
        <button className="btn">
          <img src={bgnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
          </div>
      <img src={bg} alt="Profile" className="bg"/>
    </section>
  );
};

export default Intro;
