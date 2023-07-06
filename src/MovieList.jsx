import React, { useEffect, useState } from "react";
import "./MovieList.css";
import requests from "./Request.js";
import Modal from "./Modal";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const imagebase_URL = "https://image.tmdb.org/t/p/original/";
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  function getMovie(fetchUrl) {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));

    console.log(movies);
  }

  useEffect(() => {
    getMovie(requests.fetchNetflixOriginals);
  }, []);

  return (
    <>
      <div className="movie-btn">
        <ul>
          <li onClick={() => getMovie(requests.fetchNetflixOriginals)}>
            NETFLIX ORIGINALS
          </li>
          <li
            onClick={() => {
              getMovie(requests.fetchTrending);
            }}
          >
            TRENDING NOW
          </li>
          <li onClick={() => getMovie(requests.fetchTopRated)}>TOP RATED</li>

          <li onClick={() => getMovie(requests.fetchActionMovies)}>Action</li>
          <li onClick={() => getMovie(requests.fetchComedyMovies)}>Comedy</li>
          <li onClick={() => getMovie(requests.fetchHorrorMovies)}>Horror</li>
          <li onClick={() => getMovie(requests.fetchRomanceMovies)}>Romance</li>
          <li onClick={() => getMovie(requests.fetchDocumentaries)}>
            Documentaries
          </li>
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
