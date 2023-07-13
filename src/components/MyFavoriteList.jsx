import React, { useEffect, useState } from "react";

const MyFavoriteList = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoriteMovies"));
    if (storedFavorites) {
      setFavoriteMovies(storedFavorites);
    }
  }, []);

  return (
    <div className="mx-28 text-white">
      {favoriteMovies.length > 0 ? (
        favoriteMovies.map((film) => (
          <div className="text-white" key={film.id}>
            <h3>{film.title}</h3>
          </div>
        ))
      ) : (
        <p className="text-white text-center">Aucun film préféré trouvé</p>
      )}
    </div>
  );
};

export default MyFavoriteList;
