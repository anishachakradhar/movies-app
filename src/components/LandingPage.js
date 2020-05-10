import React, { Component } from 'react';
import { Row, Col, Button, Carousel, Card, ListGroup, ListGroupItem, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';

import { getNowPlayingMovies, getUpcomingMovies, getSearchMovie } from '../services/moviesServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import Search from './Search';

import debounce from '../utils/debounce';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowShowingLoading: false,
      upcomingLoading: false,
      nowShowingList: [],
      upcomingList: [],
      movie: '',
      suggestions: [],
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
      [ nowShowingList, upcomingList ] = await Promise.all([
        getNowPlayingMovies(),
        getUpcomingMovies(),
      ]);
    } catch (e) {
      // handle your errors here
      console.log('Error...', e);
    }

    this.setState({
      nowShowingList,
      nowShowingLoading: false,
      upcomingList,
      upcomingLoading:false,
    })
  }

  getPosterUrl = (path) => {
    if(!path) {
      return '/no-image.jpg'
    }
  
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

  onSearchChange = ( event, { newValue } ) => {
    this.setState({
      movie: newValue
    })
  }

  onSuggestionsFetchRequested = debounce(async ({ value }) => {
    try {
      let suggestions = await getSearchMovie(value);
      console.log('this is auto suggestions......',suggestions);
      this.setState({
        suggestions
      })
    } catch (e) {
      console.log('there is an error......', e);
    }
  }, 1000)

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
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
                <InputGroup id="inputgroup-search">
                  <Autosuggest 
                    inputProps = {{
                      placeholder: "Enter your movie title here.",
                      value: this.state.movie,
                      onChange: this.onSearchChange
                    }}
                    suggestions = { this.state.suggestions }
                    onSuggestionsFetchRequested = { this.onSuggestionsFetchRequested }
                    onSuggestionsClearRequested = { this.onSuggestionsClearRequested }
                    getSuggestionValue = { suggestion => suggestion.title }
                    renderSuggestion = { suggestion => (
                      <Card id="search-suggestions-card" as={ Link } to={`/movie-detail/${suggestion.id}`} >
                        <img alt="" className="search-suggestions-image" src={this.getPosterUrl(suggestion.poster_path)}/>
                        <span className="search-suggestions-movie-title">
                            {suggestion.title} 
                            <FontAwesomeIcon icon={faStar} color="#f5af22" className="search-suggestions-rating" /> 
                            {suggestion.vote_average}
                        </span>
                      </Card>
                    )}
                  />
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
          {this.state.nowShowingLoading ? 
            <h5>Loading.........</h5> :
            <Row>
              {this.state.nowShowingList.slice(0,6).map((data, index) => 
                <Col lg={2} sm={2} key={index}>
                  <Card id="landing-page-card">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                    <Card.Body>
                      <Card.Title id="movie-title">{data.title}</Card.Title>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{data.release_date}</ListGroupItem>
                        <ListGroupItem><FontAwesomeIcon icon={faStar} color="#f5af22" /> {data.vote_average}</ListGroupItem>
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
          {this.state.upcomingLoading ? 
            <h5>Loading.........</h5> :
            <Row>
              {this.state.upcomingList.slice(0,6).map((data, index) => 
                <Col lg={2} sm={2} key={index}>
                  <Card id="landing-page-card">
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                    <Card.Body>
                      <Card.Title id="movie-title">{data.title}</Card.Title>
                      <ListGroup className="list-group-flush">
                        <ListGroupItem>{data.release_date}</ListGroupItem>
                        <ListGroupItem><FontAwesomeIcon icon={faStar} color="#f5af22" /> {data.vote_average}</ListGroupItem>
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
