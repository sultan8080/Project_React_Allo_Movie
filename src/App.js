import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import Accueil from "./pages/Accueil";
import Mesfavoris from "./pages/Mesfavoris";
import { Route, Routes } from "react-router-dom";
import FilmDetails from "./pages/FilmDetails";
import { useLocation } from "react-router-dom";

function App() {
  const { state } = useLocation(); // <-- access route state
  const { film } = state || {}; // <-- unpack the film from state

  const id = () => {
    return film.id;
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/allo-movie" element={<Accueil />} />

          <Route path="/Mesfavoris" element={<Mesfavoris />} />
          <Route path="/FilmDetails/:id" element={<FilmDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
