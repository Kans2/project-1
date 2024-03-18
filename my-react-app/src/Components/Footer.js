import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const footer = {
    backgroundColor: "black",
    width: "100%",
    height: "max-content",
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
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="footer-icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon" />
          </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}