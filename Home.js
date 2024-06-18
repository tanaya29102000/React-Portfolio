import React from 'react'

function Home() {
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
    <section className="home">
        <div className="image">
            <img src="Photo.jpeg" alt="profile"/>
        </div>
        <div className="content">
            <h3>Hi, I'm</h3>
            <h3>Tanaya</h3>
            <span>front-end developer</span>
            <p>I have experience in React JS, and Microsoft SQL Database (6 month) 
                as well as I have a strong understanding of Redux hook and other state
                 management libraries and its components, as well as HTML5, CSS, Bootstrap,
                  JavaScript and other programming languages , I am a quick learner, excellent
                   communication skills. Familiarity with (ES6, webpack, Git, GitHub etc.).</p>
            <a href="about" class="btn"> About Me <i class="fas fa-user"></i> </a>
        </div>
    </section>
    </div>
  )
}

export default Home;
