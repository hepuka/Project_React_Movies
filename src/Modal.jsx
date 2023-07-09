import React from "react";
import "./Modal.css";

const Modal = ({ open, onClose, modalData, imagebase_URL }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div className="modalContainer">
        <div className="modalLeft">
          <img
            src={`${imagebase_URL}${modalData.poster_path}`}
            alt={modalData.name}
          />
        </div>

        <div className="modalRight">
          <div>
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
          </div>
          <div className="content">
            <h1>Title: {modalData.name || modalData.title}</h1>
            <h2>
              Release date: {modalData.release_date || modalData.first_air_date}
            </h2>
            <h2>Genre: {modalData.genre_ids[0]}</h2>
            <h2>Rate: {modalData.vote_average}</h2>
            <h3>Overview: {modalData.overview}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
