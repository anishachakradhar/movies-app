import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import { getCastCrewDetail } from '../services/moviesServices';

export default class CastCrewDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      detail: []
    }
  }

  async componentDidMount() {
    this.setState({ loading: true })

    let detail = [];

    try {
      detail = await getCastCrewDetail(this.props.match.params.id);
    } catch (e) {
      console.log("There is an error....", e);
    }

    this.setState({
      detail,
      loading: false
    })
  }

  getProfileUrl = (path) => {
    if(!path) {
      return `${process.env.PUBLIC_URL}/images/no_photo_available.jpg`
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
                  src={ this.getProfileUrl(this.state.detail.profile_path) } 
                  id="movie-detail-image" 
                />
              </Col>
              <Col lg={9}>
                <h3>{ this.state.detail.name }</h3>
                <p>Known For <i>{ this.state.detail.known_for_department }</i></p>
                <ul className="basic-details">
                  <li>Birthday : { this.state.detail.birthday? this.state.detail.birthday : "Not mentioned"  }</li>
                  <li>Birth-place : { this.state.detail.place_of_birth? this.state.detail.place_of_birth : "Not mentioned" }</li>
                  <li>Gender : { this.state.detail.gender === 1 ? "Female" : "Male" }</li>
                </ul>
                <p className="overview">{ this.state.detail.biography }</p>
                <Row>
                  {this.state.detail.credits && 
                    this.state.detail.credits.cast.length !== 0 ?
                    <Col>
                      <h5>Acting : </h5>
                      {this.state.detail.credits.cast.map((item, index) => 
                        <li key={index}>
                          <a href={`/movie-detail/${item.id}`} className="cast-crew-link">{ item.title }</a>
                          {item.character ? 
                            <p className="character-names"> as { item.character }</p> 
                            : "" 
                          }
                        </li>
                      )}
                    </Col> 
                    : "" 
                  }
                  {this.state.detail.credits && 
                    this.state.detail.credits.crew.length !== 0 ?
                    <Col>
                      <h5>Involvements : </h5>
                      {this.state.detail.credits.crew.map((item, index) => 
                        <li key={index}>
                          <a href={`/movie-detail/${item.id}`} className="cast-crew-link">{ item.title }</a>
                          {item.job ? 
                            <p className="character-names"> as { item.job }</p> 
                            : "" 
                          }
                        </li>
                      )}
                    </Col> 
                    : "" 
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
