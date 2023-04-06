
// {(films.length > 0) ? (
//   films.map((films) =>
//     <FilmsListDisplay key={films.id} film={films} />)
// )


// <div className="flex flex-col lg:flex-row ">
// <input type="search"
//   className="lg:w-1/2 w-full p-3"
//   placeholder="Entrer le nom de film" aria-label="search"
//   onChange={(e) => {
//     setQuery(e.target.value);
//   }}
//   value={query}          ></input>
// <button className="border-cyan-400 bg-cyan-700 hover:bg-cyan-400 w-full lg:w-1/3" type="submit">
//   <i className="bi bi-search-heart" width="100" height="100"></i>
//   Chercher
// </button>
// </div>
// </form>


// const queryFilm = async (event) => {
//     event.preventDefault();
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=6cdd6b2df81d1e1f4b545b6fa1f4226d&language=en-US&page=1&include_adult=false&query=${query}`;
//     fetchFilms(url);
//   }
