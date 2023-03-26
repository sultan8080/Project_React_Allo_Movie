import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function FilmDetails() {
  const { id } = useParams();
  const { state } = useLocation(); // <-- access route state
  const { film } = state || {}; // <-- unpack the film from state
  const imgPath = "https://image.tmdb.org/t/p/w500/";

  return film ? (
    <div className="col-md-10  mx-auto mt-4 ">
      <div className="  card shadow-lg mb-3">
        <div className="card-body container">
          <h1 className="text-center h1">{film.title}</h1>
          <hr />
          <h4 className="card-title text-center">
            Date de Sortie: {film.release_date}
          </h4>
          <p className="card-text">{film.overview}</p>
          <div className="d-flex justify-content-around">
            <p className="card-text fw-bold text-secondary">
              Ratings : {film.vote_average}
            </p>
            <p className="card-text fw-bold text-secondary">
              Vote Totale : {film.count}
            </p>
            <p className="card-text fw-bold text-secondary">
              Popularité : {film.popularity}
            </p>
          </div>
        </div>
        <img
          className="card-img-top"
          src={imgPath + film.poster_path}
          alt="Card image cap"
        />
      </div>
    </div>
  ) : (
    "No film found."
  );
}
export default FilmDetails;
