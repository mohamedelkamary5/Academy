import React from "react";
import "./style.scss";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const NavbarComponent = () => {
  return (
    <div className="app bg-dark">
      <div className="container">
        <Navbar bg="dark" expand="md">
          <Navbar.Brand href="#">OUR ACADEMY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Projects</Nav.Link>
              <Nav.Link href="#">Clients</Nav.Link>
              <Nav.Link href="#">Contact Us</Nav.Link>
              <Nav.Link href="#">
                <FontAwesomeIcon icon={faSearch} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarComponent;
