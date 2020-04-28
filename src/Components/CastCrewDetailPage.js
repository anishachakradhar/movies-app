import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import config from '../config';

export default class CastCrewDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      detail: []
    }
  }

  componentDidMount() {
    this.setState({ loading: true })

    fetch(`${config.API_BASE_URL}/person/${this.props.match.params.id}?append_to_response=credits`, {
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
                <img alt="" src={ this.state.detail.profile_path ? `https://image.tmdb.org/t/p/w500/${this.state.detail.profile_path}` : "/no_photo_available.jpg"} id="movie-detail-image" />
              </Col>
              <Col lg={9}>
                <h3>{ this.state.detail.name }</h3>
                <p>Known For <i>{ this.state.detail.known_for_department }</i></p>
                <ul style={{ color: "grey" }}>
                  <li>Birthday : { this.state.detail.birthday? this.state.detail.birthday : "Not mentioned"  }</li>
                  <li>Birth-place : { this.state.detail.place_of_birth? this.state.detail.place_of_birth : "Not mentioned" }</li>
                  <li>Gender : { this.state.detail.gender === 1 ? "Female" : "Male" }</li>
                </ul>
                <p style={{ textAlign: "justify" }}>{ this.state.detail.biography }</p>
                <Row>
                  { this.state.detail.credits && 
                    this.state.detail.credits.cast.length !== 0 ?
                    <Col lg={6}>
                      <h5>Acting : </h5>
                        {this.state.detail.credits.cast.map((item, index) => 
                        <li key={index}>
                          <a href={`/movie-detail/${item.id}`} className="cast-crew-link">{ item.original_title }</a>
                          { item.character ? <p className="character-names"> as { item.character }</p> : "" }
                        </li>
                        )}
                    </Col> : "" 
                  }
                  { this.state.detail.credits && 
                    this.state.detail.credits.crew.length !== 0 ?
                    <Col lg={6}>
                      <h5>Involvements : </h5>
                        {this.state.detail.credits.crew.map((item, index) => 
                        <li key={index}>
                          <a href={`/movie-detail/${item.id}`} className="cast-crew-link">{ item.original_title }</a>
                          { item.job ? <p className="character-names"> as { item.job }</p> : "" }
                        </li>
                        )}
                    </Col> : "" 
                  }
                </Row>
              </Col>
            </Row>
          }
        </div>
      </div>
    )
  }
}
