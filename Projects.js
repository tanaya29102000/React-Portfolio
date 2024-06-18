import React from "react";

const Projects = () => {
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

      <section className="portfolio">
      <h1 class="mt-5 heading">Heading
          {" "}
          <span>my</span> work{" "}
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="images/img-1.jpg" alt="" />
            <div className="content">
              <h3>project 01</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div className="box">
            <img src="images/img-2.jpg" alt="" />
            <div className="content">
              <h3>project 02</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
          <div className="box">
            <img src="images/img-3.jpg" alt="" />
            <div className="content">
              <h3>project 03</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </section>
      <section id="showMore" class="d-none portfolio">
        <div className="box-container">
          <div className="box">
            <img src="images/img-1.jpg" alt="" />
            <div className="content">
              <h3>project 07</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, praesentium.
              </p>
              <a href="#">read more</a>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div onclick="this.innerHTML=style.display='none'" className="box">
          {" "}
          <a
            onclick="myFunction(showMore)"
            className="btn"
            style={{ marginBottom: "3rem" }}
          >
            {" "}
            load more <i className="fas fa-redo" />{" "}
          </a>
        </div>
      </section>
    </div>
  );
};
export default Projects;
