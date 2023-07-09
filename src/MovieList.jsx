import React, { useEffect, useState } from "react";
import "./MovieList.css";
import requests from "./Request.js";
import Modal from "./Modal";
import List from "./List";

const MovieList = ({ openModal, setOpenModal }) => {
  const [movies, setMovies] = useState([]);
  const imagebase_URL = "https://image.tmdb.org/t/p/original/";
  const [modalData, setModalData] = useState(null);

  const getMovie = (fetchUrl) => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  };

  useEffect(() => {
    getMovie(requests.fetchNetflixOriginals);
  }, []);

  return (
    <>
      <div className="movie-btn">
        <ul>
          <List getMovie={getMovie} requests={requests} />
        </ul>
      </div>

      <div className="row">
        <div className="row__posters">
          {movies.map((item) => (
            <>
              <div
                className="list"
                key={item.id}
                onClick={() => {
                  setOpenModal(true);
                  setModalData(item);
                }}
              >
                <img
                  className="row__posterLarge"
                  key={item.id}
                  src={`${imagebase_URL}${item.poster_path}`}
                  alt={item.name}
                />
                <p>{item.title || item.name}</p>
              </div>

              <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                modalData={modalData}
                imagebase_URL={imagebase_URL}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
