import React from 'react'
import './Assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom"

export default function (props) {
  return (
    <Navbar style={{
      backgroundColor: 'rgb(255, 255, 255)',
      boxShadow: '0 2px 4px lightgrey'
    }} variant="dark" expand="lg">
      <Container>

        <Navbar.Brand href="/" style={{ fontFamily: "Sacramento", fontSize: "25px", color: "black", fontWeight: "bold" }} className="brandlogo">{props.Brand}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link style={{ textDecoration: "none", fontWeight: "bold", padding: "2px 8px" }} to="/">Home</Link>

            <Link style={{ textDecoration: "none", fontWeight: "bold", padding: "2px 8px" }} to="">Services</Link>

            <Link style={{ textDecoration: "none", fontWeight: "bold", padding: "2px 8px" }} to="/">Technologeis</Link>

            <Link style={{ textDecoration: "none", fontWeight: "bold", padding: "2px 8px" }} to="/About">about us</Link>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
