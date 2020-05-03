import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { getSimilarMovies } from '../services/moviesServices';

export default class SimilarMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarMovies : [],
      loading: false
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })
    let similarMovies = [];
    
    try {
      similarMovies = await getSimilarMovies(this.props.details.match.params.id)
    } catch (e) {
      console.log("There is an error........", e)
    }

    this.setState({
      similarMovies,
      loading: false
    })
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
            <Col lg={6}><Button variant="secondary" className="landing-page-button" as={Link} to={`/similar-movies/${this.props.details.match.params.id}`}>View More</Button></Col>
            <Col lg={3} />
          </Row> 
          </> }
      </div>
    )
  }
}
