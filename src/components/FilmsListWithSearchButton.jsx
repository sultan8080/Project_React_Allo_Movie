import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import FilmsListDisplay from "./DisplayFilmsList";


const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const [querydata, setQuerydata] = useState([]);
  const [query, setQuery] = useState();



  useEffect(() => {
    const fetchFilms = async () => {
      const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate");
      setFilms(data?.results);
      setQuerydata(data.results);
    }
    fetchFilms();
  }, []);


  const handleQuery = (event) => {
    event.preventDefault();
    if (query.length > 0) {
      const searchdata = films.filter((film) => film.title.toLowerCase().includes(query));
      setFilms(searchdata);
    }
  }

  const handleChange = (event) => {
    const filmsquery = event.target.value;
    setQuery(filmsquery);
  }

  // console.log(films);
  return (
    <>
      <div className="w-1/3 mt-5 mx-auto">
        <form onSubmit={handleQuery}>
          <div className="flex flex-col lg:flex-row ">
            <input type="search"
              className="lg:w-1/2 w-full p-3"
              placeholder="Entrer le nom de film" aria-label="search"
              onChange={handleChange} value={query}></input>
            <button className="border-cyan-400 bg-cyan-700 hover:bg-cyan-400 w-full lg:w-1/3 text-white" type="submit">
              <i className="bi bi-search-heart mr-1" width="50" height="50"></i>
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
