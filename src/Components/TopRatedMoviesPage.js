import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import config from '../config';

export default class TopRatedMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(`${config.API_BASE_URL}/movie/top_rated`, { 
      method: 'GET', 
      headers: {
        authorization: `Bearer ${config.ACCESS_TOKEN}`, 
      }
    })
    .then(res => res.json())
    .then(movies => {
      this.setState({
        list: movies.results,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          <h3>Top Rated Movies</h3>
          { this.state.loading ? 
            <h5 className="loading">Loading.........</h5> :
            <Row>
              {this.state.list.map((item, index) => 
                <Col lg={2} key={index}>
                  <Card id="movie-list-card" as={Link} to={`/movie-detail/${item.id}`}>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                    <Card.Body id="movie-list-card-body">
                      <Card.Title id="movie-title">{item.original_title}</Card.Title>
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
