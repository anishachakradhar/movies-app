import React, { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import config from '../config';

export default class NowShowingMoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      nowShowingList: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch(`${config.API_BASE_URL}/movie/now_playing`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${config.ACCESS_TOKEN}`,
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        nowShowingList: data.results,
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          <h3>Now Showing Movie</h3>
          <Row>
            {this.state.nowShowingList.map((item, index) => 
              <Col lg={2} key={index}>
              <Card id="movie-list-card" >
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                <Card.Body id="movie-list-card-body">
                  <Card.Title id="movie-title">{item.original_title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            )}
          </Row>
        </div>
      </div>
    )
  }
}
