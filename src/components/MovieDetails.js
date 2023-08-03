import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MoviesContext from "../context/MoviesContext";
import SWApiClient from "../services/SWApiClient";
import "../styles/_movieDetails.css";
import Loader from "../utils/Loader";

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
          <p className="release-date">{movie.release_date}</p>
          <p className="opening-crawl">{movie.opening_crawl}</p>
          <div className="info-columns">
            <div className="column">
              <p><strong>Director:</strong></p>
              <p><strong>Producer:</strong></p>
            </div>
            <div className="column">
              <p>{movie.director}</p>
              <p>{movie.producer}</p>
            </div>
          </div>
        </>
      ) : (
        <div className='loader'>
          <Loader/>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default MovieDetails;
