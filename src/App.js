import './App.css';
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDetails from "./components/MovieDetails";
import {MoviesContextProvider} from "./context/MovieContextProvider";

function App() {
  return (
      <Router>
      <Header/>
      <MoviesContextProvider>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </MoviesContextProvider>
      <Footer/>
      </Router>
  );
}

export default App;
