import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";
import FilmsListDisplay from "./DisplayFilmsList";


const FilmsList = () => {
  const [films, setFilms] = useState([]);
  const [isErr, setIsErr] = useState(false);
  const [querydata, setQuerydata] = useState([]);
  const [query, setQuery] = useState();


  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const { data } = await axios.get("https://api.themoviedb.org/3/discover/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate");
        setFilms(data?.results);
        setQuerydata(data.results);
      } catch (error) {
        setIsErr(true);
      }

    }
    fetchFilms();
  }, []);

  const handleQueary = (event) => {
    const getQuery = event.target.value;
    if (getQuery.length > 0) {
      const searchdata = films.filter((film) => film.title.toLowerCase().includes(getQuery));
      setFilms(searchdata);
    } else {
      setFilms(querydata);
    }
    setQuery(getQuery);
  }

  // console.log(films);
  return (
    <>
      <div className="w-1/3 mt-5 mx-auto">

        <input type="search"
          className="w-full p-3"
          placeholder="Entrer le nom de film" aria-label="search"
          onChange={(e) =>
            handleQueary(e)}
          value={query}          ></input>

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
