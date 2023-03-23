import React from "react";
import { Link } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function FilmsListDisplay({ film }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="card shadow-sm mb-3">
        <img
          className="card-img-top"
          src={imgPath + film.poster_path}
          alt="Card image cap"
        />
        <div className="card-body">
          <h6 className="card-title">{film.title}</h6>
          <p className="card-text"> Date de Sortie: {film.release_date} </p>
          <hr />
          {/* href="#" className="btn btn-primary">Go somewhere */}
          <div className="d-flex justify-content-around">
            <Link to={`/FilmDetails/${film.id}`} state={{ film }}>
              <button type="button" className="btn btn-warning btn-sm">
                En savoir Plus{" "}
              </button>
            </Link>

            <button type="button" className="btn btn-warning btn-sm">
              En Favoris{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                fill="red"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmsListDisplay;
