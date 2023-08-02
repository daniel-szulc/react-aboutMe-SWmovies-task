import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, {useEffect, useState} from "react";
import SWApiClient from "./services/SWApiClient";
import MoviesContext from './context/MoviesContext';

function App() {

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SWApiClient.fetchMovies().then((data) => {
      setMovies(data);
      setLoading(false);
    });
  }, []);

  return (

    <div>
      <Header/>
      <MoviesContext.Provider value={{ movies, loading }}>
      <Main/>
      </MoviesContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
