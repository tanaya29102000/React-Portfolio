import React from "react";

const About = () => {
  return (
    <div>
      <nav className="navbar">
        <a href="/">
          {" "}
          <i className="fas fa-home" /> <span>home</span>{" "}
        </a>
        <a href="about">
          {" "}
          <i className="fas fa-user" /> <span>about</span>{" "}
        </a>
        <a href="projects">
          {" "}
          <i className="fas fa-briefcase" /> <span>Projects</span>{" "}
        </a>
        <a href="blogs">
          {" "}
          <i className="fas fa-blog" /> <span>blogs</span>{" "}
        </a>
        <a href="contact">
          {" "}
          <i className="fas fa-address-book" /> <span>contact</span>{" "}
        </a>
      </nav>
      <section className="about">
        <h1 className="heading">
          {" "}
          about <span>me</span>{" "}
        </h1>
        <div className="row">
          <div className="info-container">
            <h1> profile </h1>
            <div className="box-container">
              <div className="box">
                <h3>
                  {" "}
                  <span>name : </span> Tanaya Kanerkar{" "}
                </h3>
                <h3>
                  {" "}
                  <span>hobby : </span> programming{" "}
                </h3>
                <h3>
                  {" "}
                  <span>works : </span> front-end developer{" "}
                </h3>
                <h3>
                  {" "}
                  <span>address : </span> Nagpur, MH. india{" "}
                </h3>
              </div>
              <div className="box">
                <h3>
                  {" "}
                  <span>sex : </span> Female
                </h3>
                <h3>
                  {" "}
                  <span>experience : </span> 1 years{" "}
                </h3>
                <h3>
                  {" "}
                  <span>freelance : </span> available{" "}
                </h3>
                <h3>
                  {" "}
                  <span>language : </span> english, hindi
                </h3>
              </div>
            </div>
            <a
              href="https://emerald-elsie-29.tiiny.site/"
              target="_blank"
              className="btn"
            >
              {" "}
              Show CV <i className="fas fa-eye" />{" "}
            </a>{" "}
             
            <a
              href="Resume-Tanaya-kanerkar (2).pdf" // Ensure this path is correct
              download="Tanaya_Kanerkar_CV.pdf"
              className="btn"
            >
              download CV <i className="fa fa-download" />
            </a>
          </div>
          <div className="count-container">
            <div className="box">
              <h3>01+</h3>
              <p>years of experience</p>
            </div>
            <div className="box">
              <h3>06+</h3>
              <p>happy clients</p>
            </div>
            <div className="box">
              <h3>3+</h3>
              <p>project completed</p>
            </div>
            <div className="box">
              <h3>5+</h3>
              <p>awards won</p>
            </div>
          </div>
        </div>
      </section>

      <section className="skills">
        <h1 className="heading">
          {" "}
          <span>my</span> skills{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="images/icon-1.png" />
            <h3>html</h3>
          </div>
          <div className="box">
            <img src="images/icon-2.png" />
            <h3>css</h3>
          </div>
          <div className="box">
            <img src="images/icon-3.png" />
            <h3>javascript</h3>
          </div>
          <div className="box">
            <img src="images/icon-4.png" />
            <h3>jquery</h3>
          </div>
          <div className="box">
            <img src="images/icon-5.png" />
            <h3>MsSql</h3>
          </div>
          <div className="box">
            <img src="images/icon-6.png" />
            <h3>react.js</h3>
          </div>
        </div>
      </section>

      <section className="education">
        <h1 className="heading">
          {" "}
          <span>my</span> education{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2015 - 2016</span>
            <h3>SECONDARY SCHOOL CERTIFICATE</h3>
            <p>SSC from Vidya Mandir High School &amp; with 85.40%</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2017 - 2018</span>
            <h3>HIGHER SECONDARY CERTIFICATE</h3>
            <p>HSC from Vidya Mandir Jr. collage. &amp; with 71.08%</p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2018 - 2021</span>
            <h3>GRADUATION DEGREE</h3>
            <p>
              Bachelors Degree In Computer Science From Shri Shivaji Science
              College Nagpur University. &amp; with 68%
            </p>
          </div>
          <div className="box">
            <i className="fas fa-graduation-cap" />
            <span>2021 - 2023</span>
            <h3>POST GRADUATION DEGREE</h3>
            <p>
              Master Degree In Master Of Computer Application From VMV College
              Nagpur University. &amp; with 92%
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
