import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import FilmsListDisplay from "./FilmsListDisplay";

let api_url = "https://api.themoviedb.org/3/discover/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";


const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const[primaryList, setPrimaryList] = useState([]);

  const [query, setQuery] = useState();


  const fetchFilms = async (x) => {
    try {
      const { data } = await axios.get(x);
      setPrimaryList(data?.results);
      setFilms(data?.results);

    } catch (error) {
      setIsErr(true);
    }
  };

  useEffect(() => {
    fetchFilms(api_url);
  }, []);

  const queryFilm = async (event) => {
    
  }


  // console.log(films);
  return (
    <>
      <div className="lg:w-1/3 w-1/2 my-10 mx-auto">
        <form onSubmit={queryFilm}>
          <div className="flex flex-col lg:flex-row ">
            <input type="search"
              className="lg:w-1/2 w-full p-3"
              placeholder="Entrer le nom de film" aria-label="search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}          ></input>
            <button className="border-cyan-400 bg-cyan-700 hover:bg-cyan-400 w-full lg:w-1/3" type="submit">
              <i className="bi bi-search-heart" width="100" height="100"></i>
              Chercher
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8  gap-5 flex flex-wrap justify-center">

        {(films.length > 0) ? (
          films.map((films) =>
            <FilmsListDisplay key={films.id} film={films} />)
        ) : (
          <h2>Désolé !! Aucun film trouvé</h2>
        )}
      </div>
    </>
  );
};

export default FilmsList;


