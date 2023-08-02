import React, {useContext, useEffect} from 'react';
import MoviesContext from '../context/MoviesContext';
import {Link} from "react-router-dom";

const FavoriteMovies = () => {
  const { movies, fetchMovies, loading } = useContext(MoviesContext);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div className="favorite-movies">
      <h3>My favorite movies:</h3>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='round-list'>
          {
            movies.length>0 ?
            movies.map((movie, index) => (
            <li key={index}>
              <Link key={movie.url_id} to={`/movie/${movie.url_id}`}>{movie.title}</Link>
            </li>
          )) : <li>No movies found</li>
          }
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
