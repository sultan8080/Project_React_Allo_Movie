import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import FilmsListDisplay from "./DisplayFilmsList";
let api_url = "https://api.themoviedb.org/3/discover/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
let api_movie_URL = "https://api.themoviedb.org/3/search/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&page=1&include_adult=false&query=";


const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [query, setQuery] = useState();


  const fetchFilms = async (x) => {
    try {
      const { data } = await axios.get(x);
      setFilms(data?.results);
      setLoading(false);
    } catch (error) {
      setIsErr(true);
    }
  };

  useEffect(() => {
    fetchFilms(api_url);
  }, []);

  const queryFilm = async (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&page=1&include_adult=false&query=${query}`;
    fetchFilms(url);
  }


  // console.log(films);
  return (
    <>
      <div className="d-flex justify-content-center my-3">
        <div className="col-sm-6 col-12">
          <form onSubmit={queryFilm}>
            <div className="d-flex">
              <input type="search"
                className="form-control"
                placeholder="Entrer le nom de film" aria-label="search"
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                value={query}          ></input>
              <button className="bg-warning" type="submit">
                <i className="bi bi-search-heart "></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row mt-5">

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
