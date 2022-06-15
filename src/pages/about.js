import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import '../styles/About.css';
import backgroundPic from '../images/IMG_1764 4.jpeg';

import danPic from '../images/3172A429-39EC-414D-A9A6-4C4C0A2857EE_1_105_c.jpeg'

export default function About() {
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
        <section>
          <div className="biography">
            <br>
            </br>
            <h2 className="pageTitle">Biography</h2>
            <br>
            </br>
            <p>
            Developer Daniel Nelson comes to the world of full-stack coding by a circuitous path. Born and raised in Scotch Plains, New Jersey, 
            Daniel set out to pursue a STEM education at Cornell University, but ultimately found his way into music composition. After achieving 
            a PhD from the University of Pennsylvania in 2010 he continued to work as a composer, arranger, orchestrator and performer, always 
            staying on the cutting edge of music software.
            </p>
            <br>
            </br>
            <p>
            In 2021, following a deep personal loss, Daniel returned to the world of tech, diving into computer science by way of the coding 
            language, Python. Seeking structure and rigor for his working, he commenced a course of study in 2022 with the University of
            Pennsylvania Full-Stack Web Development certificate program. Now he works in each new project to join together the disparate strands
            of creativity, thoughtful architecture, careful process, and audience empathy that have characterized his artistic and technical
            achievements throughout his life.
            </p>
          </div>
          <div className="picContainer">
            <br>
            </br>
            <img className="danPic" src={danPic} alt="Portrait of Dan"></img>
          </div>
        </section>
      <div className="buffer" style={{height: "50px", width:"100%", clear:"both"}}></div>
      <Footer />
    </div>
  );
}