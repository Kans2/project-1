import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const footer = {
    backgroundColor: "black",
    width: "100%",
    padding: "2%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

 

  return (
    <div style={footer}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12">
            <p style={{ color: "white" }}>created by kans</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <p style={{ color: "white" }}>copy rights all reserved</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="footer-connect">
            <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.google.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-icons">
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
        </div>
      </div>
    </div>
  );
}