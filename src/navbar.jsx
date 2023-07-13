import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="dark:bg-gray-900 mx-20">
      <div className="flex flex-wrap items-center justify-between p-3">
        <Link to="/" className="flex items-center">
          <i className="bi bi-film"></i>
          <span className="mr-3 rotate-90 text-cyan-400">
            <i className="bi bi-film" width="20" height="18"></i>
          </span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-cyan-400">
            ALLO-MOVIE
          </span>
        </Link>

        <div className="flex p-4 text-cyan-400 gap-4 items-center">
          <NavLink exact to="/" className="hover:text-cyan-100">
            ACCUEIL
          </NavLink>

          <NavLink to="/Mesfavoris" className="hover:text-cyan-100">
            MES FAVORIS
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
