import React from "react";
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import MovieList from "../MovieList";

const HomeScreen = ({ openModal, setOpenModal }) => {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <MovieList openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default HomeScreen;
