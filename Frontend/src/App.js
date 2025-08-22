import Accueil from "./pagesprincipales/accueil";
import Connexion from "./pagesprincipales/connexion";
import AjouterPrix from "./pagesprincipales/ajouterprix";
import ComparerPrix from "./pagesprincipales/comparerPrix";
import EvolutionPrix from "./pagesprincipales/evolutionprix";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Routes>
  <Route path="/" element={<Accueil />} />
  <Route path="/connexion" element={<Connexion />} />
  <Route path="/ajouter" element={<AjouterPrix />} />
  <Route path="/comparer" element={<ComparerPrix />} />
  <Route path="/evolution" element={<EvolutionPrix />} />
</Routes>

      </header>
    </div>
  );
}

export default App;
