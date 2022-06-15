import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import backgroundPic from '../images/IMG_2038 3.jpeg'
import CV from '../images/CV.pdf';

export default function Skills() {
  return (
    <div>
      <Header />
      <div style={{
        height: "350px", 
        width:"100%", 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('${backgroundPic}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // position: "relative",
        }}>
      </div>
      <h1>Please <a href={CV} style = {{color: "black",}}>view</a> my resume.</h1>
      <p>
      <ul>
        <li>Dynamic & Reactive Web Development | React.js, JavaScript, HTML5, CSS3, Bootstrap</li>
        <li>Data-Driven Computing | jQuery, RESTful APIs, JSON, AJAX</li>
        <li>Back-End Development | Node.js, Express.js, MySQL, Sequelize, NoSQL (MongoDB), Insomnia</li>
        <li>Scripting | Python, Linux bash/shell, Unit testing</li>
        <li>Progressive Web Application | Asynchronous & Distributed Computing</li>
        <li>General Computer Science | Data Structures, Algorithms, Resource Management</li>
      </ul>
      </p>
      <div style={{height: "80px", width:"100%", clear:"both"}}></div>
      <Footer />
    </div>

  );
}