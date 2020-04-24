import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button, Carousel, InputGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="carousel-wrapper">
          <Carousel className="slider">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="seats.jpg"
                alt="First slide"
                height="500px"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="seatswithagirl.jpg"
                alt="Second slide"
                height="500px"
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
        </div>
        <div className="movies-list-title container-wrapper">
          <p>Now Showing Movies</p>
        </div>
        <div className="movies-list container-wrapper">
          <Row>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="/movie-detail/1">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="movies-list-title container-wrapper">
          <p>Popular Movies</p>
        </div>
        <div className="movies-list container-wrapper">
          <Row>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={2} sm={2}>
              <Card>
                <Card.Img variant="top" src="makkai.jpg" />
                <Card.Body>
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>Released Date</ListGroupItem>
                    <ListGroupItem>Rating</ListGroupItem>
                  </ListGroup>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">View Details</Card.Link>
                  <Card.Link href="#">Watch trailer</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}