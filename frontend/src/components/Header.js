import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/" exact>
            <Navbar.Brand>
              <img
                src={`/images/logoWhite.png`}
                alt="logo"
                style={{ width: "50px", height: "50px" }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
              <Nav.Link>
                <i className="fas fa-shopping-cart"></i>CART
              </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              <Nav.Link>
                <i className="fas fa-user"></i>SIGN IN
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
