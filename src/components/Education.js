import React from "react";
import "./styles.css"; // Ensure this file exists

const Education = () => {
  return (
    <section className="education-container">
      <h1>Education</h1>

      <div className="education-item">
        <h2>B.Tech Computer Science (Cyber Security)</h2>
        <p><strong>Amrita Vishwa Vidyapeetham</strong></p>
        <p className="date">Oct 2021 – 2025 | Chennai, India</p>
        <p><strong>Current CGPA:</strong> 6.44</p>
      </div>

      <div className="education-item">
        <h2>Intermediate (MPC)</h2>
        <p><strong>Narayana Junior College</strong></p>
        <p className="date">2019 – 2021 | Vijayawada, India</p>
        <p><strong>Percentage:</strong> 94.4%</p>
      </div>

      <div className="education-item">
        <h2>10th Grade</h2>
        <p><strong>Narayana eTechno School</strong></p>
        <p className="date">2018 – 2019 | Piduguralla, Andhra Pradesh</p>
        <p><strong>CGPA:</strong> 10</p>
      </div>
    </section>
  );
};

export default Education;
