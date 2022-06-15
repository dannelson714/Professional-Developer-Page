import React from "react";
import "../styles/Portfolio.css"

import {Github, PlayBtn } from "react-bootstrap-icons"


export default function Portfolio(props) {
  return (
    
    <div className="container">
        <div className="row" style = {{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {/* <div className=""> */}
                {/* <ul className="list-group"> */}
                {props.projects.map(item => (
                    // <li className="list-group-item" key={item.id}>
                        <div 
                            className="project"
                            key={item.id}
                            style = {{
                                border: '.01em solid black',
                                margin: "1rem",
                                fontSize: "1.5rem",
                                padding: ".5rem .5rem",
                                height: "8rem",
                                width: "18rem",
                                justifyContent: "center",
                                color: "white",
                                background: "rgba(0,0,0,0.4)",
                                textShadow: "0 0 .5rem black",
                                backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${item.img})`,
                                backgroundSize: "cover",
                            }}
                            >
                                <span className='front-side'>
                                    <h5 className="card-title"> {item.name}</h5>
                                </span>
                                <span className='back-side'>
                                    <a 
                                        className="btn btn-link btn-floating btn-lg text-dark m-1 github"
                                        href={item.githubURL}
                                        role="button"
                                        data-mdb-ripple-color="dark">
                                        <Github />
                                    </a>
                                    <p className="random">    </p>
                                    <a
                                    className="btn btn-link btn-floating btn-lg text-dark m-1 github"
                                    role="button"
                                    data-mdb-ripple-color="dark" 
                                    href={item.deployedURL}>  
                                    <PlayBtn /> </a>
                                    <br>
                                    </br>
                                    <p className="tech-text">{item.tech}</p>
                                </span>
                        </div>       
                    // </li>
                ))}
                {/* </ul> */}
            {/* </div> */}
        </div>
        <div style={{height: "80px", width:"100%", clear:"both"}}></div>
    </div>
    
  );
}
