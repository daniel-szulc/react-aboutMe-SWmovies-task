import React, { useContext } from 'react';
import MoviesContext from '../context/MoviesContext';

const FavoriteMovies = () => {
  const { movies, loading } = useContext(MoviesContext);

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
            <li>
             {movie.title}
            </li>
          )) : <li>No movies found</li>
          }
        </ul>
      )}
    </div>
  );
};

export default FavoriteMovies;
