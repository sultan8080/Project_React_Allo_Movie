import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function FilmsListDisplay({ film }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    const isFilmFavorite = storedFavorites.some(
      (favFilm) => favFilm.id === film.id
    );
    setIsFavorite(isFilmFavorite);
  }, [film]);

  const handleAddRemoveFavorite = () => {
    const storedFavorites =   JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    if (isFavorite) {
      // Remove movie from favorites
      const updatedFavorites = storedFavorites.filter(
        (favFilm) => favFilm.id !== film.id
      );
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    } else {
      // Add movie to favorites
      const updatedFavorites = [...storedFavorites, film];
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  return (
    <div className="w-96 flex flex-col border">
      <div className="bg-white">
        <div className="flex">
          <div>
            <img src={imgPath + film.poster_path} alt="Film Poster" />
          </div>
          <div className="p-2 flex flex-col justify-between">
            <h4 className="text-lg">{film.title}</h4>
            <div className="flex justify-between">
              <small className="bg-gray-400 rounded-2xl text-white text-center px-2 py-1">
                {film.vote_average}
              </small>
              <p className="text-gray-500">{film.release_date}</p>
            </div>
            <div className="flex flex-col w-52">
              <Link
                to={`/FilmDetails/${film.id}`}
                state={{ film }}
                className="mb-2 text-center md:mb-0 bg-gray-900 text-white  py-1 shadow-sm border rounded-full hover:bg-gray-700"
              >
                Découvrez
              </Link>
              <button
                className={`mb-2 md:mb-0  text-white py-1 mt-3 shadow-sm rounded-full ${
                  isFavorite
                    ? "bg-red-800  hover:bg-red-900"
                    : " bg-cyan-700 hover:bg-cyan-800 "
                }`}
                type="button"
                onClick={handleAddRemoveFavorite}
              >
                {isFavorite ? "Retirer des favoris" : "Ajouter en favoris"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilmsListDisplay;
