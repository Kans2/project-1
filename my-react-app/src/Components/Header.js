import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiOutlineUser, AiOutlineProject, AiOutlineFileText, } from "react-icons/ai";
const Header = () => {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu /> {/* Using the hamburger menu icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
    
              id="work"
              style={{ display:'flex',flexDirection: 'column', alignItems: 'center', margin: "10px 20px", color: "white" }}
            >
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              style={{ display:'flex',flexDirection: 'column', alignItems: 'center', margin: "10px 20px", color: "white" }}
              id="work"
            >
               <AiOutlineUser /> About
            </Nav.Link>
            <Nav.Link
              href="#project"
              style={{ display:'flex',flexDirection: 'column', alignItems: 'center', margin: "10px 20px", color: "white" }}
              id="work"
            >
                <AiOutlineProject />   Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              style={{ display:'flex',flexDirection: 'column', alignItems: 'center', margin: "10px 20px", color: "white" }}
              id="work"
            >
            <AiOutlineFileText />   Resume
            </Nav.Link>
            <Nav.Link
              href="#certificate"
              style={{display:'flex', flexDirection: 'column', alignItems: 'center', margin: "10px 20px", color: "white" }}
              id="work"
            >
               <AiOutlineFileText />  Certificates
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Your other components/content */}
    </div>
  );
};


export default Header;