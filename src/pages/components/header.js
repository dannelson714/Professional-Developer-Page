import React, { useEffect, useState } from "react";
import "../../styles/Header.css";
import {
  useNavigate,
  useLocation,
  Link
} from "react-router-dom";
import { Github, Twitter, Linkedin } from "react-bootstrap-icons";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const [trans, setTrans] = useState(false);

  //To capture the logic for whether the hamburger is clicked on
  const [active, setActive] = useState(false);

  useEffect(() => {
    let pageName = location.pathname;
    pageName = "https://dannelson714.github.io/Professional-Developer-Page/#" + pageName;
    const aTag = document.getElementsByTagName("a");
    console.log(aTag);
    console.log(pageName);
    for (let i=1; i<aTag.length; i++) {
      if (pageName === aTag[i].href) {
        aTag[i].style.textDecoration = 'underline';
      }
    }
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setTrans(window.pageYOffset > 50)
      );
    }
  }, []);
//as with above logic except conditional if(false) then set trueend result setActive(true)
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", () => {
      if (!active) {
        document.body.style.overflow = "hidden";
        setActive(true);
        if(location.pathname === "/projects"){
          const collection = document.getElementsByClassName('container');
          for (let i=0; i<collection.length; i++) {
            collection[i].style.marginTop = "500px";
        }
      }}
      else {
        document.body.style.overflow = "visible";
        setActive(false);
        if(location.pathname === "/projects"){
          const collection = document.getElementsByClassName('container');
          for (let i=0; i<collection.length; i++) {
            collection[i].style.marginTop = "0px";
      }}}
  });
})

  return (
    <header className={`header ${trans ? "trans" : ""} ${active ? "active" : ""}`}>
        <nav className="navbar">
            <Link to='/' className="nav-logo">Daniel Nelson</Link>
            <ul className={`nav-menu ${active ? "active" : ""}`}>
                <li className="nav-item">
                <Link to='/about'>Biography</Link>
                </li>
                <li className="nav-item">
                  <Link to='/projects'>Portfolio</Link>
                </li>
                <li className="nav-item">
                  <Link to='/skills'>Experience</Link>              
                </li>
                <li className="nav-item">
                  <Link to='/contact'>Contact</Link>            
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://twitter.com/dannelson"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <Twitter />
                  </a>         
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://www.linkedin.com/in/daniel-nelson-24a97123/"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <Linkedin />
                  </a>         
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-link btn-floating btn-lg text-dark m-1"
                    href="https://github.com/dannelson714"
                    role="button"
                    data-mdb-ripple-color="dark"
                  >
                    <Github />
                  </a>         
                </li>
            </ul>
            <div className={`hamburger ${active ? "active" : ""}`}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    </header>
          
          
          
          
          
          
          
          
          
          
          
          
          
  );
}

export default Header;
