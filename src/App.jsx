import "./App.css";
import Navbar from "./Navbar";
import Accueil from "./pages/Accueil";
import Mesfavoris from "./pages/Mesfavoris";
import FilmDetails from "./pages/FilmDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
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
