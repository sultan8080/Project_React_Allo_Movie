import React from "react";
import { Link } from "react-router-dom";

const imgPath = "https://image.tmdb.org/t/p/w500/";

function FilmsListDisplay({ film }) {
  return (

    <div className=" w-96  flex flex-col border">
      <div className="bg-white">
        <div className="flex">
          <div className="">
            <img src={imgPath + film.poster_path}
              alt="Image de film" />
          </div>
          <div className="p-2 flex flex-col justify-between">

            <h4 className="text-lg">     {film.title}</h4>
            <div className="flex justify-between">

              <small className="bg-gray-400 rounded-2xl text-white text-center px-2 py-1 ">{film.vote_average}</small>

              <p className="text-gray-500">{film.release_date}</p>
            </div>

            <div className="flex space-x-3 text-sm font-medium">



              <button className="mb-2 md:mb-0 dark:bg-gray-900  text-white px-4 py-2 shadow-sm tracking-wider border  rounded-full hover:bg-gray-800 inline-flex items-center space-x-2 ">
                Découvrez
              </button>

              <button
                className="mb-2 md:mb-0 bg-cyan-700 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-cyan-800"
                type="button" aria-label="like">Favoris</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// <div className="w-72 h-48  border flex flex-row   text-gray-400">
//   <div class="h-48">
//     <img
//       className="h-full"
//       src={imgPath + film.poster_path}
//       alt="Image de film"
//     />
//   </div>
//   <div className="flex flex-col">
//     <div className="flex justify-between items-start">
//       <h6 className="font-bold">{film.title}</h6>

//     </div>


//     <div className="text-sm">Date de Sortie: {film.release_date}</div>
//     <div className="bg-yellow-400 font-bold rounded-xl p-2">{film.rating}</div>

//     <div className=" flex flex-row justify-round items-center">
//       <Link to={`/FilmDetails/${film.id}`} state={{ film }}>
//         <button
//           type="button"
//           className=""
//         >
//           En savoir Plus{" "}
//         </button>
//       </Link>

//       <button type="button" className="">
//         En Favoris

//       </button>
//     </div>

//   </div>


// </div>

// <div className=" col-lg-4 col-sm-6 col-12 ">
//       <div className="card mb-3 shadow-sm">
//         <div className="row g-0">
//           <div className="col-md-5">
//             <img
//               className="card-img-top"
//               src={imgPath + film.poster_path}
//               alt="Image de film pas trouvé"
//             />
//           </div>
//           <div className="col-md-7">
//             <div className="card-body">
//               <h6 className="card-title fw-bold">{film.title}</h6>
//               <p className="card-text"> Date de Sortie: {film.release_date} </p>


//             </div>
//           </div>
//         </div>
//       </div>
//     </div>


export default FilmsListDisplay;
