import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './Header';
import MovieDetailPage from './MovieDetailPage';
import LandingPage from './LandingPage';
import Footer from './Footer';
import NowShowingMoviesPage from './NowShowingMoviesPage';
import TopRatedMoviesPage from './TopRatedMoviesPage';
import UpcomingMoviesPage from './UpcomingMoviesPage';
import CastCrewDetailPage from './CastCrewDetailPage';
import SimilarMoviesPage from './SimilarMoviesPage';

export class HomeContainer extends Component {
  render() {
    return (
      <Container fluid="true" className="main-container-wrapper">
        <Header />
        <Switch>
          <Route path="/movie-detail/:id" render={(props) => <MovieDetailPage {...props} />}/>
          <Route path="/cast-crew-detail/:id" render={(props) => <CastCrewDetailPage {...props} />}/>
          <Route path="/similar-movies/:id" render={(props) => <SimilarMoviesPage {...props} />}/>
          <Route path="/now-showing">
            <NowShowingMoviesPage />
          </Route>
          <Route path="/top-rated">
            <TopRatedMoviesPage />
          </Route>
          <Route path="/upcoming">
            <UpcomingMoviesPage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
        <Footer />
      </Container>
    )
  }
}

export default HomeContainer
