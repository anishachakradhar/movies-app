import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getNowPlayingMovies } from '../services/moviesServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default class NowShowingMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      nowShowingList: []
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    let nowShowingList = [];

    try {
      nowShowingList = await getNowPlayingMovies();
    } catch (e) {
      console.log('There is an error.......' , e);
    }

    this.setState({ 
      nowShowingList,
      loading: false
    })
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          <h3>Now Showing Movie</h3>
          { this.state.loading ? 
            <h5 className="loading">Loading.........</h5> :
            <Row>
              {this.state.nowShowingList.map((item, index) => 
                <Col lg={2} key={index}>
                  <Card id="movie-list-card" as={Link} to={`/movie-detail/${item.id}`}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
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
