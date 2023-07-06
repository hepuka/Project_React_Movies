import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import MovieList from "../MovieList";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <MovieList />
    </div>
  );
};

export default HomeScreen;
