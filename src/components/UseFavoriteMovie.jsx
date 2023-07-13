import { useEffect, useState } from "react";

const useFavoriteMovie = (film) => {
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
    const storedFavorites =
      JSON.parse(localStorage.getItem("favoriteMovies")) || [];

    if (isFavorite) {
      const updatedFavorites = storedFavorites.filter(
        (favFilm) => favFilm.id !== film.id
      );
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    } else {
      const updatedFavorites = [...storedFavorites, film];
      localStorage.setItem("favoriteMovies", JSON.stringify(updatedFavorites));
    }

    setIsFavorite((prevFavorite) => !prevFavorite);
  };

  return { isFavorite, handleAddRemoveFavorite };
};

export default useFavoriteMovie;
