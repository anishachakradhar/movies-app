import config from '../config';

function responseHandler(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json()
}

export function getNowPlayingMovies() {
  return fetch(`${config.API_BASE_URL}/movie/now_playing`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`,
    }
  })
  .then(responseHandler)
  .then(data => data.results)
}

export function getUpcomingMovies() {
  return fetch(`${config.API_BASE_URL}/movie/upcoming`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${config.ACCESS_TOKEN}`,
    }
  })
  .then(responseHandler)
  .then(data => data.results)
}