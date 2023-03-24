import React from "react";
import { Link } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function FilmsListDisplay({ film }) {
  return (
    <div className=" col-lg-4 col-sm-6 col-12 ">
      <div className="card mb-3 shadow-sm">
        <div className="row g-0">
          <div className="col-md-5">
            <img
              className="card-img-top"
              src={imgPath + film.poster_path}
              alt="Image de film pas trouvé"
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h6 className="card-title fw-bold">{film.title}</h6>
              <p className="card-text"> Date de Sortie: {film.release_date} </p>
              <br />
              <br />
              <br />
              <div className="d-flex-colum justify-content-center align-items-center">
                <Link to={`/FilmDetails/${film.id}`} state={{ film }}>
                  <button
                    type="button"
                    className="btn btn-outline-dark fw-bold tex btn-sm mb-2 w-100"
                  >
                    En savoir Plus{" "}
                  </button>
                </Link>

                <button type="button" className="btn btn-warning btn-sm w-100">
                  En Favoris
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    fill="red"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmsListDisplay;
