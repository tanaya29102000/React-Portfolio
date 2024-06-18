import React from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.error("Error sending email:", error.text);
          alert("An error occurred while sending the message. Please try again.");
      });
  };

  return (
    <div>
      <nav className="navbar">
        <a href="/">
          <i className="fas fa-home" /> <span>home</span>
        </a>
        <a href="/about">
          <i className="fas fa-user" /> <span>about</span>
        </a>
        <a href="/projects">
          <i className="fas fa-briefcase" /> <span>Projects</span>
        </a>
        <a href="/blogs">
          <i className="fas fa-blog" /> <span>blogs</span>
        </a>
        <a href="/contact">
          <i className="fas fa-address-book" /> <span>contact</span>
        </a>
      </nav>

      <section className="contact">
        <h1 className="heading">
          contact <span>me</span>
        </h1>
        <div className="row">
          <div className="info-container">
            <h1>get in touch</h1>
            <p>
              I have experience in designing &amp; developing user interfaces,
              testing, debugging &amp; optimizing web functionality that improve
              workflow efficiencies.
            </p>
            <div className="box-container">
              <div className="box">
                <i className="fas fa-map" />
                <div className="info">
                  <h3>address :</h3>
                  <p>Nagpur mh. India - 441111</p>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-envelope" />
                <div className="info">
                  <h3>email :</h3>
                  <p>kanerkartanaya29@gmail.com</p>
                </div>
              </div>
              <div className="box">
                <i className="fas fa-phone" />
                <div className="info">
                  <h3>number :</h3>
                  <p>+91 8806531291</p>
                </div>
              </div>
            </div>
            <div className="share">
              <a
                href="https://github.com/tanaya29102000"
                target="_blank"
                className="fab fa-github"
              />
              <a
                href="https://www.linkedin.com/in/tanaya-kanerkar-b29655288"
                target="_blank"
                className="fab fa-linkedin"
              />
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="fab fa-instagram"
              />
              <a
                href="https://www.facebook.com/Tanaya-Kanerkar"
                target="_blank"
                className="fab fa-facebook-f"
              />
            </div>
          </div>
          <form onSubmit={sendEmail}>
            <div className="inputBox">
              <input type="text" name="name" placeholder="Name" required />
              <input type="text" name="phone" placeholder="Phone" required />
            </div>
            <div className="inputBox">
              <input type="email" name="email" placeholder="Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              cols={30}
              rows={10}
              required
            />
            <input
              type="submit"
              className="btn btn-contact"
              value="Send Message"
            />
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
