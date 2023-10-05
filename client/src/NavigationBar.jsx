import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

// Functional component representing the navigation bar of the application.
const NavigationBar = () => {
  return (
    // Navbar component from react-bootstrap with dark styling.
    <Navbar bg="dark" variant="dark">
      {/* Branding element for the application. */}
      <Navbar.Brand>Decentralized Certification</Navbar.Brand>
      
      {/* Navigation links container with 'mr-auto' for margin. */}
      <Nav className="mr-auto">
        {/* LinkContainer for the 'Home' link, providing a Bootstrap-styled navigation link. */}
        <LinkContainer to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        
        {/* LinkContainer for the 'Download Certificate' link. */}
        <LinkContainer to="/download-certificate">
          <Nav.Link>Download Certificate</Nav.Link>
        </LinkContainer>
        
        {/* LinkContainer for the 'Contact Us' link. */}
        <LinkContainer to="/contact-us">
          <Nav.Link>Contact Us</Nav.Link>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;
