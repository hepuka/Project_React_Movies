import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./Request";
import axios from "axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        /*random számot generál, hogy melyik filmet mutassa véletlenszerűen a Banner-ben*/
        request.data.results[Math.floor(Math.random() * 20)]
      );

      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  /*lerövidíti a discriptiont ha túl hosszú*/
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner__discription">
          {truncate(movie?.overview, 200)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
