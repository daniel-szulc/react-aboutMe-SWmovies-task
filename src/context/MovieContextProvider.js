import React, { useState } from 'react';
import MoviesContext from './MoviesContext';
import SWApiClient from "../services/SWApiClient";

export const MoviesContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = () => {
      SWApiClient.fetchMovies().then((moviesData) => {
        setMovies(moviesData);
        setLoading(false);
      });
  };

  return (
    <MoviesContext.Provider value={{ movies, fetchMovies, loading }}>
      {children}
    </MoviesContext.Provider>
  );
};
