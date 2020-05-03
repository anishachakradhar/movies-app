import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class SimilarMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarMovies : props.similarMovies || [],
      loading: false
    }
  }

  render() {
    return (
      <div>
        <h5 style={{ marginLeft: "50px" }}>Similar Movies :</h5>
        { this.state.loading ? 
          <h5 className="loading">Loading.........</h5> :
          <>
          {this.state.similarMovies.slice(0,3).map((data,index) => 
            <Card id="similar-movie-card" as={Link} to={`/movie-detail/${data.id}`} key={index}>
              <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
              <p className="similar-movie-title">{data.title}</p>
            </Card>
          )}
          <Row>
            <Col lg={3} />
            <Col lg={6}><Button variant="secondary" className="landing-page-button" as={Link} to={`/similar-movies/${this.props.movieId}`}>View More</Button></Col>
            <Col lg={3} />
          </Row> 
          </> }
      </div>
    )
  }
}
