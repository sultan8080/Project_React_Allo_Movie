import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

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
            {films?.map(movie => (

                <div className='col-lg-3 col-md-4 col-sm-6 col-12' >
                    <a href="#">
                        <div className='card shadow-sm mb-3'>
                            <img className="card-img-top" src="" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                {/* href="#" className="btn btn-primary">Go somewhere */}

                                <div className='d-flex'>
                                    <button type="button" className="btn btn-warning btn-sm">Ajouter en favoris <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    )
}

export default FilmsList;
