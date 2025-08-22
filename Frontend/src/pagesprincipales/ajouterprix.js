import { useState } from "react";

function AjouterPrix() {
  const [prix, setPrix] = useState("");
  const [magasin, setMagasin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prix enregistré !");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Ajouter un Prix</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Prix (XOF)</label>
          <input
            type="number"
            className="form-control"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Magasin</label>
          <input
            type="text"
            className="form-control"
            value={magasin}
            onChange={(e) => setMagasin(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-secondary w-100">
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default AjouterPrix;
