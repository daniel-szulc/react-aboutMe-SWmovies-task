class SWApiClient {
  static fetchMovies() {
    return fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => data.results)
      .catch((error) => {
        console.error('There was an error fetching the movies!', error);
        return [];
      });
  }
}

export default SWApiClient;
