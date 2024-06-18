import React from "react";

const Blogs = () => {
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

      <section className="blogs">
        <h1 className="heading">
          {" "}
          <span>my</span> blogs{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src="images/blog1.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/blog2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link" />{" "}
              </a>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="images/blog3.jpg" alt="" />
            </div>
            <div className="content">
              <div className="icons">
                <a href="#">
                  {" "}
                  <i className="fas fa-calendar" /> 21st may, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i className="fas fa-user" /> by admin{" "}
                </a>
              </div>
              <h3>blog title goes here.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, illum.
              </p>
              <a href="#" className="btn">
                {" "}
                read more <i className="fas fa-link" />{" "}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
