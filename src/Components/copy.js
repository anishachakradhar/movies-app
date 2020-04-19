import React, { Component } from 'react';

import { Navbar, Nav, Form, FormControl, Button, Carousel, InputGroup } from 'react-bootstrap';

export class HomeContainer extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
        <Navbar variant="dark">
          <Navbar.Brand href="#home" className="navbar-title">MOVIES</Navbar.Brand>
          <Nav className="navbar-body">
            <Nav.Link href="#home" className="nav-element" active>Home</Nav.Link>
            <Nav.Link href="#features" className="nav-element">Movies</Nav.Link>
            <Nav.Link href="#pricing" className="nav-element">TV Shows</Nav.Link>
            <Nav.Link href="#pricing" className="nav-element">Login</Nav.Link>
            <Nav.Link href="#pricing" className="nav-element">Register</Nav.Link>
          </Nav>
        </Navbar>
        </div>
        <div className="slider">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="seats.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="seatswithagirl.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="nav-search">
        <Form inline>
          <InputGroup>
            <FormControl type="text" className="mr-sm-2" />
            <InputGroup.Append>
              <Button variant="outline-secondary" className="nav-button" id="basic-addon2">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        </div>
      </div>
    )
  }
}

export default HomeContainer
