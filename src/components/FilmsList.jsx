import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import FilmsListDisplay from './DisplayFilmsList';

const FilmsList = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isErr, setIsErr] = useState(false);

    // fetching data

    const fetchFilms = async () => {
        try {
            const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
            setFilms(data?.results);
            setLoading(false);
        } catch (error) {
            console.error(error);
            setIsErr(true);
        }
    };

    useEffect(() => { fetchFilms() }, []);
    // console.log(films);
    return (
        <div className='row mt-5'>
            {films?.map(films => (
                <FilmsListDisplay film={films} />
            ))}
        </div>
    )
}

export default FilmsList;
