import React, { Component } from 'react';
import { Navbar, Nav, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="black" variant="dark" expand="lg" id="main-nav">
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link>
                <DropdownButton alignRight title="Movies" id="navbar-dropdown-menu">
                  <Dropdown.Item eventKey="1" id="dropdown-menu-item" as={Link} to="/now-showing">Now Showing</Dropdown.Item>
                  <Dropdown.Item eventKey="2" id="dropdown-menu-item" as={Link} to="/top-rated">Top rated</Dropdown.Item>
                  <Dropdown.Item eventKey="3" id="dropdown-menu-item" as={Link} to="/upcoming">Upcoming</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4" id="dropdown-menu-item">Thriller</Dropdown.Item>
                  <Dropdown.Item eventKey="5" id="dropdown-menu-item">Horror</Dropdown.Item>
                </DropdownButton>
              </Nav.Link>
              <Nav.Link>
                <DropdownButton alignRight title="TV Shows" id="navbar-dropdown-menu">
                  <Dropdown.Item eventKey="11" id="dropdown-menu-item">Now Showing</Dropdown.Item>
                  <Dropdown.Item eventKey="12" id="dropdown-menu-item">Top rated</Dropdown.Item>
                  <Dropdown.Item eventKey="13" id="dropdown-menu-item">Upcoming</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="14" id="dropdown-menu-item">Thriller</Dropdown.Item>
                  <Dropdown.Item eventKey="15" id="dropdown-menu-item">Horror</Dropdown.Item>
                </DropdownButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
