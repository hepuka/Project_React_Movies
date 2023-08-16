import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import MovieList from "../MovieList";
import { useEffect, useState } from "react";
import requests from "../Request";

const HomeScreen = ({ openModal, setOpenModal }) => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState();

  const getMovie = (fetchUrl) => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setRandomMovie(
          data.results[Math.floor(Math.random() * data.results.length)]
        );
      });
  };

  useEffect(() => {
    getMovie(requests.fetchNetflixOriginals);
  }, []);

  return (
    <div className="homeScreen">
      <Banner randomMovie={randomMovie} />
      <Nav />
      <MovieList
        openModal={openModal}
        setOpenModal={setOpenModal}
        movies={movies}
        getMovie={getMovie}
      />
    </div>
  );
};

export default HomeScreen;
