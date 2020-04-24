import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import config from '../config';

export default class PopularMoviesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      list: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(`${config.API_BASE_URL}/movie/popular`, { 
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
          <h3>Popular Movies</h3>
          <Row>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col id="movie-list-column">
              <Card>
                <Card.Img variant="top" src="fall.jpg" />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">Movie Title</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
