import React from "react";
import { useLocation } from "react-router-dom";
import AddRemoveFavoriteButton from "./AddRemoveFavoriteButton";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function FilmDetails() {
  const { state } = useLocation();
  const film = state?.film;

  return film ? (
    <div className="md:mx-20 text-white p-4 md:mt-10">
      <div className="md:flex">
        <div className="md:w-1/5">
          <img
            className="w-full h-auto rounded-lg shadow"
            src={imgPath + film.poster_path}
            alt="Film Poster"
          />
        </div>
        <div className="md:w-2/3 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-2">{film.title}</h1>
          <p className="text-gray-500 mb-4">
            Date de sortie: {film.release_date}
          </p>
          <p className="mb-4">{film.overview}</p>
          <div className="flex justify-between">
            <p className="text-gray-500 font-medium">
              Ratings: {film.vote_average}
            </p>
            <p className="text-gray-500 font-medium">
              Vote Total: {film.vote_count}
            </p>
            <p className="text-gray-500 font-medium">
              Popularité: {film.popularity}
            </p>
          </div>

          <AddRemoveFavoriteButton film={film} />
        </div>
      </div>
    </div>
  ) : (
    "Désolé !! Aucun film trouvé"
  );
}

export default FilmDetails;
