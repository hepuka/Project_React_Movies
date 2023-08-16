import React from "react";
import "./Banner.css";

const Banner = ({ randomMovie }) => {
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </h1>
        <h1 className="banner__discription">{randomMovie?.overview}</h1>
      </div>
    </header>
  );
};

export default Banner;
