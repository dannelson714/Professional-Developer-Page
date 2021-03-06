import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import backgroundPic from '../images/IMG_2038 3.jpeg'
import CV from '../images/CV.pdf';
import "../styles/Skills.css"

export default function Skills() {
  return (
    <div>
      <Header />
      <div style={{
        height: "600px", 
        width:"100%", 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('${backgroundPic}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // position: "relative",
        }}>
      </div>
      <div className="skillsPage">
        <br>
        </br>
        <h1 className="skills">Experience</h1>
        <div className="skills-list">
          <p>
          <a className="resume" href={CV}>Resume</a>
          <ul>
            <li className="skills-list">Dynamic & Reactive Web Development | React.js, JavaScript, HTML5, CSS3, Bootstrap</li>
            <li className="skills-list">Data-Driven Computing | jQuery, RESTful APIs, JSON, AJAX</li>
            <li className="skills-list">Back-End Development | Node.js, Express.js, MySQL, Sequelize, NoSQL (MongoDB), Insomnia</li>
            <li className="skills-list">Scripting | Python, Linux bash/shell, Unit testing</li>
            <li className="skills-list">Progressive Web Application | Asynchronous & Distributed Computing</li>
            <li className="skills-list">General Computer Science | Data Structures, Algorithms, Resource Management</li>
          </ul>
          </p>
        </div>
        <div style={{height: "80px", width:"100%", clear:"both"}}></div>
      </div>
      <Footer />
    </div>

  );
}