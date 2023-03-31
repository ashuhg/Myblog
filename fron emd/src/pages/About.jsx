import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Email sent successfully");
        } else {
          setStatus("Error sending email");
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus("Error sending email");
      });
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/your-profile");
  };

  const handleTwitterClick = () => {
    window.open("https://twitter.com/your-profile");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/your-profile");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/your-profile");
  };

  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-section">
            <h2>About Me</h2>
            <p>
              My name is Ashenafi Hagos I am a mechanical engineering graduate who has a passion for coding and decided to pursue it further by joining a software engineering boot camp at ALX. With a keen eye for detail and a love for problem-solving, I have gained expertise in various programming languages and software development concepts. I am excited to apply the skills I obtained during my time at ALX to build innovative software solutions.
            </p>
            <div className="socials">
              <a href="#" onClick={handleFacebookClick}><FaFacebookF /></a>
              <a href="#" onClick={handleTwitterClick}><FaTwitter /></a>
              <a href="#" onClick={handleInstagramClick}><FaInstagram /></a>
              <a href="#" onClick={handleLinkedinClick}><FaLinkedinIn /></a>
            </div>
          </div>
          <div className="about-section">
            <h2>My Skills</h2>
            <ul>
              <li>Web Development</li>
              <li>Graphic Design</li>
              <li>Content Creation</li>
              <li>Social Media Marketing</li>
            </ul>
          </div>
          <div className="about-section">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" className="text-input contact-input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              <textarea name="message" className="text-input contact-input" placeholder="Your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              <button type="submit" className="btn btn-big contact-btn">
                <i className="fas fa-envelope"></i>
                Send
              </button>
              {status && <p className="contact-status">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

