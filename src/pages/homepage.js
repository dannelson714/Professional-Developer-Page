import React from 'react';
import '../styles/Home.css';
import {useNavigate} from "react-router-dom"

import danPic from '../../src/images/4056 (1).jpeg';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="panels">
      <div className="panel panel1">
      <a 
                    href="/about"
                    onClick={() => navigate("/about")}
                >Biography</a>
      </div>
      <div className="panel panel2">
      <a 
                    href="/projects"
                    onClick={() => navigate("/projects")}
                >Portfolio</a>
      </div>
      <div className="panel panel3">
      <a 
                    href="/skills"
                    onClick={() => navigate("/skills")}
                >Experience</a>
      </div>
      <div className="panel panel4">
      <a 
                    href="/contact"
                    onClick={() => navigate("/contact")}
                >Contact</a>
      </div>
    </div>
  );
}