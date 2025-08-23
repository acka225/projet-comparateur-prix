import { useState } from "react";

export default function ProductForm({ onSubmit }) {
  const [produit, setProduit] = useState("");
  const [prix, setPrix] = useState("");
  const [magasin, setMagasin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleString();
    onSubmit({ produit, prix, magasin, date });
    setProduit("");
    setPrix("");
    setMagasin("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Nom du produit"
        value={produit}
        onChange={(e) => setProduit(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        placeholder="Prix (FCFA)"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        placeholder="Nom du magasin"
        value={magasin}
        onChange={(e) => setMagasin(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        Enregistrer
      </button>
    </form>
  );
}
