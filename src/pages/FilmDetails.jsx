import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function FilmDetails() {
  const { id } = useParams();

  const { state } = useLocation(); // <-- access route state

  const { film } = state || {}; // <-- unpack the film from state

  console.log(film);

  return film ? (
    <div>
      <h1>{film.id}</h1>
      <h1>{film.title}</h1>
    </div>
  ) : (
    "No item matched/found."
  );
}
export default FilmDetails;
