import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Assuming you are using react-router-dom for navigation

export default function Connect() {

  return (
    <div className="connect">
      <div className="container"  style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="text-center" style={{color:'white'}}>Find Me on</h1>
        <br></br>
        <br></br>
        <ul className="about-connect-icons">
            <li className="connect-icons" >
              <a
                href="https://www.google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="connect-icons">
              <a
                href="https://www.google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
               
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="connect-icons">
              <a
                href="https://www.google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                
              >
                <FaFacebook />
              </a>
            </li>
         
          </ul>
      </div>
      </div>
  );
}
