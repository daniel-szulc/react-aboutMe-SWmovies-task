import React from 'react';
import '../styles/_about.css';
import Gallery from "./Gallery";

const About = () => {
  return (
    <div id='about' className="about-section">
      <h1>About</h1>
      <div className="about-container">

        <div className="gallery">
          <Gallery images={[require("../images/image-1.jpg"),require("../images/image-2.jpg"),require("../images/image-3.jpg")]}/>
        </div>

        <div>
      <h2>Daniel Szulc</h2>
      <p>I'm a Master of Engineering in Computer Science, skilled in languages such as Java, C#, HTML, CSS and more. Passionate about technology and problem-solving, I'm interested in web development, graphic design and game development. Always eager for new challenges, I seek growth in both professional and personal aspects. In my leisure, I work on personal projects, explore new technologies and enjoy video games, music, literature, and culinary arts.</p>

      <h3>Technologies I'm familiar with:</h3>

      <ul className="tech-list">
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Java</li>
        <li>C#</li>
        <li>Unity</li>
        <li>SQL</li>
      </ul>

        </div>
    </div>
    </div>
  );
};

export default About;
