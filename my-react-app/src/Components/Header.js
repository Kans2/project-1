import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillHome, AiOutlineUser, AiOutlineProject, AiOutlineFileText } from "react-icons/ai";
const Header = () => {
  return (
    <div className="App">
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" style={{color:'white',marginLeft:'10%',fontSize:'2rem'}}>SK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <GiHamburgerMenu /> {/* Using the hamburger menu icon */}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className="nav-link"
            >
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link
              href="#about"
              className="nav-link"
            >
              <AiOutlineUser /> About
            </Nav.Link>
            <Nav.Link
              href="#project"
              className="nav-link"
            >
              <AiOutlineProject /> Projects
            </Nav.Link>
            <Nav.Link
              href="#resume"
              className="nav-link"
            >
              <AiOutlineFileText /> Resume
            </Nav.Link>
            <Nav.Link
              href="#certificate"
              className="nav-link"
            >
              <AiOutlineFileText /> Certificates
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* Your other components/content */}
    </div>
  );
};

export default Header;
