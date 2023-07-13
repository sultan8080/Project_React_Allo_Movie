import React, { useState } from "react";

const AddRemoveFavoriteButton = ({ film }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddRemoveFavorite = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    if (isFavorite) {
      // Remove movie from favorites
      const updatedFavorites = storedFavorites.filter((favFilm) => favFilm.id !== film.id);
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    } else {
      // Add movie to favorites
      const updatedFavorites = [...storedFavorites, film];
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  return (
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
  );
};

export default AddRemoveFavoriteButton;
