import React from "react";

const List = ({ getMovie, requests }) => {
  return (
    <>
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
    </>
  );
};

export default List;
