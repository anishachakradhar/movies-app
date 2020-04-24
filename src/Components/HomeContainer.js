import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './Header';
import MovieDetailPage from './MovieDetailPage';
import LandingPage from './LandingPage';
import Footer from './Footer';
import LatestMoviesPage from './LatestMoviesPage';
import PopularMoviesPage from './PopularMoviesPage';
import UpcomingMoviesPage from './UpcomingMoviesPage';

export class HomeContainer extends Component {
  render() {
    return (
      <Container fluid="true" className="main-container-wrapper">
        <Header />
        <Switch>
          <Route path="/movie-detail/:id">
            <MovieDetailPage />
          </Route>
          <Route path="/latest">
            <LatestMoviesPage />
          </Route>
          <Route path="/popular">
            <PopularMoviesPage />
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
