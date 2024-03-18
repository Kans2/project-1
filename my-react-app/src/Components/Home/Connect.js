import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

// Assuming you are using react-router-dom for navigation

export default function Connect() {

  return (
    <div className="connect">
      <div className="container">
        <h1 className="text-center">Find Me on</h1>
        <br></br>
        <br></br>
        <div className='social'>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
