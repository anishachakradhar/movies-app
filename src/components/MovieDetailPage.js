import React, { Component } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { getMovieDetail, getSimilarMovies } from '../services/moviesServices';

import SimilarMovies from './SimilarMovies';

export default class MovieDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      detail: [],
      similarMovies: [],
      reviews: [],
      review: ''
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    let detail = [];
    let similarMovies = [];

    try {
      [ detail, similarMovies ] = await Promise.all([
        getMovieDetail(this.props.match.params.id),
        getSimilarMovies(this.props.match.params.id)
      ]);
      console.log('this...', detail);
      console.log('here...', similarMovies);
    } catch (e) {
      console.log("There is an error........", e);
    }

    this.setState({
      detail,
      similarMovies,
      loading: false
    })
  }

  async componentDidUpdate(oldProps) {
    if (oldProps.match.params.id !== this.props.match.params.id) {
      this.setState({ loading: true })

      let detail = [];
      let similarMovies = [];

      try {
        [ detail, similarMovies ] = await Promise.all([
          getMovieDetail(this.props.match.params.id),
          getSimilarMovies(this.props.match.params.id)
        ]);
      } catch (e) {
        console.log('There is an error........', e);
      }

      this.setState({
        detail,
        similarMovies,
        loading: false
      })
    }
  }

  handleReview = (e) => {
    this.setState({
      review: e.target.value
    })
  }

  handleSubmitReview = (e) => {
    e.preventDefault();
    
    if (!this.state.review) {
      return;
    }

    const reviews = [...this.state.reviews, this.state.review];
    this.setState({
      reviews,
      review: ''
    })
    console.log(this.state.reviews)
  }

  getPosterUrl = (path) => {
    if(!path) {
      return `${process.env.PUBLIC_URL}/images/no-image.jpg`
    }
  
    return `https://image.tmdb.org/t/p/w500/${path}`
  }

  render() {
    return (
      <div className="container-wrapper movie-detail">
        <div className="movie-detail-container">
          {this.state.loading ? 
            <h5 className="loading">Loading.........</h5> :
            <Row>
              <Col lg={3}>
                <img 
                  alt="" 
                  src={ this.getPosterUrl(this.state.detail.poster_path) } 
                  id="movie-detail-image" 
                />
                <Button variant="secondary" className="movie-detail-left-part">Watch Trailer</Button>
                <Button variant="secondary" className="movie-detail-left-part">Rate Movie</Button>
              </Col>
              <Col lg={6}>
                <h3>{this.state.detail.title}</h3>
                <h6><i>{this.state.detail.tagline}</i></h6>
                <p className="rating"><FontAwesomeIcon icon={faStar} color="#f5af22"/> {this.state.detail.vote_average}</p>
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
                <p className="overview">{this.state.detail.overview}</p>
                <h6>Director :</h6>
                <ul>
                  {this.state.detail.credits &&
                    this.state.detail.credits.crew.map((item, index) => 
                      item.department  === "Directing" ? 
                      <li key={index}>
                        <a href={`/cast-crew-detail/${item.id}`} className="cast-crew-link">{ item.name }</a>
                      </li> 
                      : "" 
                    )
                  }
                </ul>
                <h6>Cast : </h6>
                <ul>
                  {this.state.detail.credits ? 
                    this.state.detail.credits.cast.map((item, index) => 
                      <li key={index}>
                        <a href={`/cast-crew-detail/${item.id}`} className="cast-crew-link">{ item.name }</a>
                        { item.character ? 
                          <p className="character-names"> as { item.character }</p> 
                          : "" 
                        }
                      </li>
                    ) 
                    : "" 
                  }
                </ul>
                <Form className="movie-review">
                  <Form.Group>
                    <Form.Label id="review-heading">Write a review</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      className="review-box" 
                      name="text" value={this.state.review} 
                      onChange={this.handleReview} 
                    />
                  </Form.Group>
                  <Button variant="secondary" type="submit" onClick={this.handleSubmitReview}>Submit</Button>
                </Form>
                <div className="movie-review">
                  <p>Reviews : </p>
                  {this.state.reviews.length !== 0 ?
                    <Table responsive>
                      <tbody>
                          {this.state.reviews.map((data,index) => 
                              <tr key={index}>
                                  <td>{index + 1}. {data}</td>
                              </tr>
                          )}
                      </tbody>
                    </Table> 
                    : <p>No reviews yet</p>
                  }
                </div>
              </Col>
              <Col lg={3}>
                <SimilarMovies
                  similarMovies={this.state.similarMovies}
                  movieId={this.props.match.params.id}
                />
              </Col>
            </Row>
          }
        </div>
      </div>
    )
  }
}
