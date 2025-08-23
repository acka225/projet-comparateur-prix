import Navbar from "../components/Navbar";
import PriceList from "../components/PriceList";

const mockPrices = [
  { produit: "Riz", prix: 2000, magasin: "Magasin A", date: "2025-08-22" },
  { produit: "Riz", prix: 1000, magasin: "Magasin B", date: "2025-08-23" },
];

export default function Comparer() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Comparer les prix</h2>
        <PriceList prices={mockPrices} />
      </div>
    </div>
  );
}
