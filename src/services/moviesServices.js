import config from '../config';
import axios from 'axios';

export function getNowPlayingMovies() {
  return axios.get(`${config.API_BASE_URL}/movie/now_playing`, {
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`
    }
  })
  .then(response =>  response.data.results)
  .catch((e) => console.log(e))
}

export function getUpcomingMovies() {
  return axios.get(`${config.API_BASE_URL}/movie/upcoming`, {
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`
    }
  })
  .then(response => response.data.results)
  .catch((e) => console.log(e))
}

export function getTopRatedMovies() {
  return axios.get(`${config.API_BASE_URL}/movie/top_rated`, {
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`
    }
  })
  .then(response => response.data.results)
  .catch((e) => console.log(e))
}

export function getMovieDetail(movieId) {
  return axios.get(`${config.API_BASE_URL}/movie/${movieId}?append_to_response=credits`, {
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`
    }
  })
  .then(response => response.data)
  .catch((e) => console.log(e))
}

export function getCastCrewDetail(castId) {
  return axios.get(`${config.API_BASE_URL}/person/${castId}?append_to_response=credits`, {
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`
    }
  })
  .then(response => response.data)
  .catch((e) => console.log(e))
}

export function getSimilarMovies(movieId) {
  return axios.get(`${config.API_BASE_URL}/movie/${movieId}/similar`, {
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`
    }
  })
  .then(response => response.data.results)
  .catch((e) => console.log(e))
}