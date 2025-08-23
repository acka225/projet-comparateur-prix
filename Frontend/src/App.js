<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";     // fichier: src/components/navbar.js
import Accueil from "./pagesprincipales/accueil"; 
import AjouterPrix from "./pagesprincipales/ajouterprix"; 
import ComparerPrix from "./pagesprincipales/comparer"; 
import EvolutionPrix from "./pagesprincipales/evolutionprix"; 
import Connexion from "./pagesprincipales/connexion"; 

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/ajouter" element={<AjouterPrix />} />
          <Route path="/comparer" element={<ComparerPrix />} />
          <Route path="/evolution" element={<EvolutionPrix />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </div>
    </Router>
  );
}
=======
// import { useEffect, useState } from "react";

// function App() {
//   const [produits, setProduits] = useState([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/produits/")
//       .then(res => res.json())
//       .then(data => setProduits(data));
//   }, []);

//   return (
//     <div>
//       <h1>Liste des produits</h1>
//       <ul>
//         {produits.map(p => (
//           <li key={p.id}>{p.nom}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
>>>>>>> 430b56e (Ajout du Backend Django)

// export default App;
