import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="home-container">
      <img src="/profile.jpg" alt="Profile" className="profile-image" />
      <h1>Welcome to My Portfolio</h1>
      <p>
        I'm Kolli Anusha, a Bachelor’s student in Computer Science specializing in Cybersecurity at Amrita School of Engineering. 
        I have expertise in database management, ethical hacking, cyber forensics, and network security. 
        Passionate about cybersecurity, I aim to become a network security engineer.
      </p>
      
      <div className="nav-buttons">
        <button onClick={() => navigate("/education")}>Education</button>
        <button onClick={() => navigate("/skills")}>Skills</button>
        <button onClick={() => navigate("/projects")}>Projects</button>
        <button onClick={() => navigate("/certificates")}>Certificates</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>
    </section>
  );
};

export default Home;
