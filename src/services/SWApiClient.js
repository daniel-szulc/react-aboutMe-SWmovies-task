class SWApiClient {
  static fetchMovies() {
    return fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => data.results.map((movie) => ({
        ...movie,
        url_id: movie.url.split('/').pop() //add new ID value from url value by which videos will be found
      })))
      .catch((error) => {
        console.error('There was an error fetching the movies!', error);
        return [];
      });
  }

  static fetchMovieById(id) {
    return fetch(`https://swapi.dev/api/films/${id}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error(`There was an error fetching the movie with id ${id}!`, error);
        return null;
      });
  }
}

export default SWApiClient;
