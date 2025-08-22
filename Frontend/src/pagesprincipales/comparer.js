function ComparerPrix() {
  const produits = [
    { nom: "Savon", prix: 500, magasin: "Carrefour" },
    { nom: "Savon", prix: 450, magasin: "Leader Price" },
    { nom: "Savon", prix: 520, magasin: "Super U" },
  ];

  return (
    <div>
      <h2 className="mb-4">Comparaison des prix</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Prix (XOF)</th>
            <th>Magasin</th>
          </tr>
        </thead>
        <tbody>
          {produits.map((p, index) => (
            <tr key={index}>
              <td>{p.nom}</td>
              <td>{p.prix}</td>
              <td>{p.magasin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ComparerPrix;
