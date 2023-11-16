import axios from 'axios';

class Movies {
  static all() {
    return axios
      .get('https://reactnative.dev/movies.json')
      .then(resp => resp.data);
  }
}

export default Movies;
