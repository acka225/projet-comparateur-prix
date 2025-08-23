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

// export default App;
