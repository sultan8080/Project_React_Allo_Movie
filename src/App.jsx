import "./App.css";
import Navbar from "./Navbar";
import FilmDetails from "./components/FilmDetails";
import Accueil from "./pages/Accueil";
import Mesfavoris from "./pages/Mesfavoris";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Mesfavoris" element={<Mesfavoris />} />
          <Route path="/FilmDetails/:id" element={<FilmDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
