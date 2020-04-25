import React, { Component } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';

import config from '../config';

export default class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      detail: []
    }
  }

  componentDidMount() {
    // const { movieId } = this.props.match.params.id
    this.setState({ loading: true })

    fetch(`${config.API_BASE_URL}/movie`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${config.ACCESS_TOKEN}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        detail: data.results,
        loading: false
      })
    })
    console.log(this.state.detail);
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          <Row>
            <Col lg={3}>
              <img alt="" src="/black.jpg" id="movie-detail-image" />
              <Button variant="secondary" className="movie-detail-left-part">Watch Trailer</Button>
              <Button variant="secondary" className="movie-detail-left-part">Rate Movie</Button>
            </Col>
            <Col lg={6}>
              <h3>Movie Title</h3>
              <ul className="list-inline">
                <li className="list-inline-li">Released date</li>
                <li className="list-inline-li">Genre</li>
                <li>Time</li>
              </ul>
              <p style={{ color: "grey" }}>Rating</p>
              <p style={{ textAlign: "justify" }}>Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control — all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.</p>
              <h6>Director :</h6>
              <h6>Cast :</h6>
              <Form className="movie-review">
                <Form.Group>
                  <Form.Label style={{marginBottom: "20px"}}>Write a review</Form.Label>
                  <Form.Control as="textarea" placeholder="Something...... anything.........." style={{height: "100px", resize: "none"}} />
                </Form.Group>
                <Button variant="secondary" type="submit">Submit</Button>
              </Form>
            </Col>
            <Col lg={3}>
              <h5 style={{ marginLeft: "50px" }}>Similar Movies :</h5>
              <Card id="similar-movie-card">
                <Card.Img variant="top" src="/window.jpg" />
                <p className="similar-movie-title">Movie Title</p>
              </Card>
              <Card id="similar-movie-card">
                <Card.Img variant="top" src="/window.jpg" />
                <p className="similar-movie-title">Movie Title</p>
              </Card>
              <Card id="similar-movie-card">
                <Card.Img variant="top" src="/window.jpg" />
                <p className="similar-movie-title">Movie Title</p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
