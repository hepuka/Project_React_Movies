import React from "react";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import { useEffect, useState } from "react";
import { arrayMovies } from "../movieDatabase";
import Menu from "../components/List";
import Modal from "../components/Modal";

const HomeScreen = ({openModal, setOpenModal }) => {
  const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([])
    const imagebase_URL = "https://image.tmdb.org/t/p/original/";
    const [modalData, setModalData] = useState(null);
   async function getMovies() {
        const res = await Promise.all(arrayMovies);
        const data = await Promise.all(res.map((item)=>{
        return item.json()
}))
        setMovies(data)
        setRandomMovie(data[0].results[Math.floor(Math.random() * data[1].results.length)]);
        setSelectedMovie(data[0].results);
    }

    useEffect(() => {
    getMovies();

    }, []);

    const movieRender = (n) => {
       setSelectedMovie(movies[n].results)
    }

  return (
    <div className="homeScreen">
      <Nav />
      <Banner randomMovie={randomMovie} />
        <Menu movieRender={movieRender}/>
        <div className="row">
            <div className="row__posters">
                {selectedMovie.map((item) => (
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
    </div>
  );
};

export default HomeScreen;
