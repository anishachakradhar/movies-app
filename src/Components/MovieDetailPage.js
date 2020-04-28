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
    this.setState({ loading: true })

    fetch(`${config.API_BASE_URL}/movie/${this.props.match.params.id}?append_to_response=credits`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${config.ACCESS_TOKEN}`
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        detail: data,
        loading: false
      })
    })
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          { this.state.loading ? 
            <h5 className="loading">Loading.........</h5> :
            <Row>
              <Col lg={3}>
                <img alt="" src={`https://image.tmdb.org/t/p/w500/${this.state.detail.poster_path}`} id="movie-detail-image" />
                <Button variant="secondary" className="movie-detail-left-part">Watch Trailer</Button>
                <Button variant="secondary" className="movie-detail-left-part">Rate Movie</Button>
              </Col>
              <Col lg={6}>
                <h3>{this.state.detail.original_title}</h3>
                <h6><i>{this.state.detail.tagline}</i></h6>
                <ul className="list-inline">
                  <li className="list-inline-li">{this.state.detail.release_date}</li>
                  <li className="list-inline-li">
                    {this.state.detail.genres ? 
                      this.state.detail.genres.map((genre, index) => 
                        <p key={index} className="genre-list">{ genre.name }</p> ) 
                      : ""
                    }
                  </li>
                  <li className="list-inline-li">{this.state.detail.runtime} minutes</li>
                  <li>{this.state.detail.status}</li>
                </ul>
                <p style={{ color: "grey" }}>Rating</p>
                <p style={{ textAlign: "justify" }}>{this.state.detail.overview}</p>
                <h6>Director :</h6>
                <ul>
                  { this.state.detail.credits &&
                    this.state.detail.credits.crew.map((item, index) => 
                      item.department  === "Directing" ? 
                      <li key={index}>
                        <a href={`/cast-crew-detail/${item.id}`} className="cast-crew-link">{ item.name }</a>
                      </li> : "" )
                  }
                </ul>
                <h6>Cast : </h6>
                <ul>
                  {this.state.detail.credits ? 
                    this.state.detail.credits.cast.map((item, index) => 
                      <li key={index}>
                        <a href={`/cast-crew-detail/${item.id}`} className="cast-crew-link">{ item.name }</a>
                        { item.character ? <p className="character-names"> as { item.character }</p> : "" }
                      </li>) 
                    : "" 
                  }
                </ul>
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
          }
        </div>
      </div>
    )
  }
}
