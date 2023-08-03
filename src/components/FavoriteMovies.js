import React, {useContext, useEffect} from 'react';
import MoviesContext from '../context/MoviesContext';
import {Link} from "react-router-dom";
import Loader from "../utils/Loader";

const FavoriteMovies = () => {
  const { movies, fetchMovies, loading } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="favorite-movies">
      <h3>My favorite movies:</h3>
      {loading ? (
          <div className='loader'>
        <Loader/>
          </div>
      ) : (
        <ul className='round-list'>
          {
            movies.length>0 ?
            movies.map((movie, index) => (
              <Link key={movie.url_id} to={`/movie/${movie.url_id}`}>
                <li key={index} className='button'>
                 {movie.title}
                </li>
              </Link>
          )) : <li>No movies found</li>
          }
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
