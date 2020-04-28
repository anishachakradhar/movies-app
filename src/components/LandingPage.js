import React, { Component } from 'react';
import { Row, Col, Form, FormControl, Button, Carousel, InputGroup, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getNowPlayingMovies, getUpcomingMovies } from '../services/moviesServices';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowingLoading: false,
      upcomingLoading: false,
      nowShowingList: [],
      upcomingList: []
    }
  }

  async componentDidMount() {
    this.setState({ 
      nowShowingLoading: true,
      upcomingLoading: true 
    })

    let nowShowingList = [];
    let upcomingList   = [];

    try {
      nowShowingList = await getNowPlayingMovies();
    } catch (e) {
      // handle your errors here
      console.log('Error...', e);
    }

    this.setState({
      nowShowingList,
      nowShowingLoading: false
    })

    try {
      upcomingList = await getUpcomingMovies();
    } catch (e) {
      // handle your errors here
      console.log('Error...', e);
    }

    this.setState({
      upcomingList,
      upcomingLoading: false
    })
  }

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
          { this.state.nowShowingLoading ? 
            <h5>Loading.........</h5> :
            <Row>
              {this.state.nowShowingList.slice(0,6).map((data, index) => 
                <Col lg={2} sm={2} key={index}>
                <Card id="landing-page-card">
                  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                  <Card.Body>
                    <Card.Title id="movie-title">{data.original_title}</Card.Title>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>{data.release_date}</ListGroupItem>
                      <ListGroupItem>Rating</ListGroupItem>
                    </ListGroup>
                  </Card.Body>
                  <Card.Body>
                    <Card.Link href={`/movie-detail/${data.id}`}>View Details</Card.Link>
                    <Card.Link href="#">Watch trailer</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              )}
              <Col lg={2} />
              <Col lg={8}>
                <Button variant="secondary" className="landing-page-button" as={Link} to="/now-showing">View More</Button>
              </Col>
              <Col lg={2} />
            </Row> 
          }
        </div>
        <div className="movies-list-title container-wrapper">
          <p>Upcoming Movies</p>
        </div>
        <div className="movies-list container-wrapper">
          { this.state.upcomingLoading ? 
            <h5>Loading.........</h5> :
            <Row>
              { this.state.upcomingList.slice(0,6).map((data, index) => 
                <Col lg={2} sm={2} key={index}>
                  <Card id="landing-page-card">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                    <Card.Body>
                      <Card.Title id="movie-title">{data.original_title}</Card.Title>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{data.release_date}</ListGroupItem>
                        <ListGroupItem>Rating</ListGroupItem>
                      </ListGroup>
                    </Card.Body>
                    <Card.Body>
                      <Card.Link href={`/movie-detail/${data.id}`}>View Details</Card.Link>
                      <Card.Link href="#">Watch trailer</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
              )}
              <Col lg={2} />
              <Col lg={8}>
                <Button variant="secondary" className="landing-page-button" as={Link} to="/upcoming">View More</Button>
              </Col>
              <Col lg={2} />
            </Row>
          }
        </div>
      </div>
    )
  }
}
