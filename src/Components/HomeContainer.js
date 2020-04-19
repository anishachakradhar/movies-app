import React, { Component } from 'react';

import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Carousel, InputGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export class HomeContainer extends Component {
  render() {
    return (
      <div>
        <Container fluid="true">
          <Row>
            <Navbar variant="dark">
              <div className="wrapper flex">
                <Col lg={3}>
                  <Navbar.Brand href="#home" className="nav-title">MOVIES</Navbar.Brand>
                </Col>
                <Col lg={9}>
                  <Nav>
                    <Nav.Link href="#home" className="nav-element" active>Home</Nav.Link>
                    <Nav.Link href="#features" className="nav-element">Movies</Nav.Link>
                    <Nav.Link href="#pricing" className="nav-element">TV Shows</Nav.Link>
                    <Nav.Link href="#pricing" className="nav-element">Login</Nav.Link>
                    <Nav.Link href="#pricing" className="nav-element">Register</Nav.Link>
                  </Nav>
                </Col>
              </div>
            </Navbar>
          </Row>
          <Carousel className="slider">
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
          <Row className="nav-search">
            <Col lg={3} sm={3} />
            <Col lg={6} sm={6}>
              <Form inline>
                <InputGroup style={{width: "100%"}}>
                  <FormControl type="text" className="mr-sm-2" />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" className="nav-button" id="basic-addon2">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
            <Col lg={3} sm={3} />
          </Row>
        </Container>
        <Container className="list-container">
          <Row className="list">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="makkai.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HomeContainer
