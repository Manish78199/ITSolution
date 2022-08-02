import React from 'react'
import './Assets/Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,NavDropdown,Container} from 'react-bootstrap';
import {Link} from "react-router-dom"

export default function (props) {
    return (
        <Navbar style={{backgroundColor:"#3435ce"}} variant="dark"expand="lg">
        <Container>
         
          <Navbar.Brand href="/" style={{fontFamily:"Sacramento",fontSize:"25px"}} className="brandlogo">{props.Brand}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link style={{textDecoration:"none",color:"white"}} to="/">Home</Link>
              <Nav.Link >Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
