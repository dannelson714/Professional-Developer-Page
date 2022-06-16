import React from 'react';
import '../styles/Home.css';
import {useNavigate, Link } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="panels">
      <div className="panel panel1">
      <Link to='/about'>Biography</Link>
      </div>
      <div className="panel panel2">
      <a 
                    href="#projects"
                    onClick={() => navigate("/projects")}
                >Portfolio</a>
      </div>
      <div className="panel panel3">
      <a 
                    href="#skills"
                    onClick={() => navigate("/skills")}
                >Experience</a>
      </div>
      <div className="panel panel4">
      <a 
                    href="#contact"
                    onClick={() => navigate("/contact")}
                >Contact</a>
      </div>
    </div>
  );
}