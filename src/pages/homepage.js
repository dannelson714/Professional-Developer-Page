import React from 'react';
import '../styles/Home.css';
import {useNavigate, Link } from "react-router-dom"

export default function Home() {

  return (
    <div className="panels">
      <div className="panel panel1">
      <Link to='/about'>Biography</Link>
      </div>
      <div className="panel panel2">
      <Link to='/projects'>Portfolio</Link>
      </div>
      <div className="panel panel3">
      <Link to='/skills'>Experience</Link>
      </div>
      <div className="panel panel4">
      <Link to='/contact'>Contact</Link>
      </div>
    </div>
  );
}