import React, { useEffect, useState } from "react";
import useFavoriteMovie from "./UseFavoriteMovie";
import { Link } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

const MyFavoriteList = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];
    console.log(favoriteMovies);

    setFavoriteMovies(storedFavorites);
  }, []);

  const handleRemoveFavorite = (movieId) => {
    const updatedFavorites = favoriteMovies.filter(
      (favFilm) => favFilm.id !== movieId
    );
    localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    setFavoriteMovies(updatedFavorites);
  };

  return (
    <div className="mx-28 flex flex-wrap gap-4 justify-center">
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((film) => (
          <div className="w-96 flex flex-col border" key={film.id}>
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
                      className="mb-2 md:mb-0 bg-red-800 hover:bg-red-900 text-white py-1 mt-2 shadow-sm rounded-full"
                      type="button"
                      onClick={() => handleRemoveFavorite(film.id)}
                    >
                      Retirer des favoris
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white text-center">Aucun film préféré trouvé</p>
      )}
    </div>
  );
};

export default MyFavoriteList;
