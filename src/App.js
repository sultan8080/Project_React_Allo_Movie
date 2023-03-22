import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Accueil from './pages/Accueil';
import Mesfavoris from './pages/Mesfavoris';
import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Mesfavoris" element={<Mesfavoris />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
