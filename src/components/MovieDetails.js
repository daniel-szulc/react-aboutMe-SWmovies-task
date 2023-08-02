import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MoviesContext from "../context/MoviesContext";
import SWApiClient from "../services/SWApiClient";
import "../styles/_movieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const [movie, setMovie] = useState(null);

  useEffect(() =>{
    document.querySelector('.header').classList.add('sticky') //changing the header appearance on a page without the Hero element
  }, []);

  useEffect(() => {
    const movieInContext = movies.find((m) => m.url_id === id);

    if (movieInContext) {
      setMovie(movieInContext);
    } else {
      SWApiClient.fetchMovieById(id).then(setMovie);
    }
  }, [id, movies]);


  return (
    <div className="container">
      <div className="content">
    <div className="movie-details">
      {movie ? (
        <>
          <h1>{movie.title}</h1>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Producer:</strong> {movie.producer}</p>
          <p><strong>ID:</strong> {movie.episode_id}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Opening Crawl:</strong> {movie.opening_crawl}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default MovieDetails;
