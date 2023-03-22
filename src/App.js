import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Accueil from './pages/Accueil';
import Mesfavoris from './pages/Mesfavoris';

function App() {
  let component
  switch (window.location) {
    case "/":
      component = <Accueil />
      break;
    case "/vosfavoris":
      component = <Mesfavoris />
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar />
      <div className="container">
        {component}
      </div>
    </>
  )
}

export default App;
