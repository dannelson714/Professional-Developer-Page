import React from "react";
import '../../styles/Footer.css';
import backgroundPic from '../../images/4056 (1) 4.jpeg'


function Footer() {
  return (
    <footer>
      <div style={{
        height: "500px", 
        width:"100%", 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url('${backgroundPic}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // position: "relative",
        }}>
      </div>
    </footer>
  );
}

export default Footer;