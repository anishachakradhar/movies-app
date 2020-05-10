import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getUpcomingMovies } from '../services/moviesServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class UpcomingMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      upcomingList: []
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    let upcomingList = [];

    try {
      upcomingList = await getUpcomingMovies();
    } catch (e) {
      console.log('There is an error..........', e);
    }

    this.setState({
      upcomingList,
      loading: false
    })
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          <h3>Upcoming Movie</h3>
          {this.state.loading ? 
            <h5 className="loading">Loading.........</h5> :
            <Row>
              {this.state.upcomingList.map((item, index) => 
                <Col lg={2} key={index}>
                  <Card id="movie-list-card" as={Link} to={`/movie-detail/${item.id}`}>
                    <Card.Img 
                      variant="top" 
                      src={ item.poster_path? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : "/no-image.jpg"} 
                    />
                    <Card.Body id="movie-list-card-body">
                      <Card.Title>
                        <p id="movie-list-rating"><FontAwesomeIcon icon={faStar} color="#f5af22" /> {item.vote_average}</p>
                        <p id="movie-list-title">{item.title}</p>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </Row> 
          }
        </div>
      </div>
    )
  }
}
