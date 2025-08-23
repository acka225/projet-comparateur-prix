import { useState } from "react";
import Navbar from "../components/Navbar";
import ProductForm from "../components/ProductForm";
import PriceList from "../components/PriceList";

export default function AjouterPrix() {
  const [prices, setPrices] = useState([]);

  const handleAddPrice = (newPrice) => {
    setPrices([...prices, newPrice]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Ajouter un prix</h2>
        <ProductForm onSubmit={handleAddPrice} />
        <PriceList prices={prices} />
      </div>
    </div>
  );
}
