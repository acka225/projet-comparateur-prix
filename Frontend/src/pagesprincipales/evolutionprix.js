import Navbar from "../components/Navbar";
import PriceChart from "../components/PriceChart";

const mockData = [
  { date: "2025-08-20", prix: 1000 },
  { date: "2025-08-21", prix: 2000 },
  { date: "2025-08-22", prix: 3000 },
  { date: "2025-08-23", prix: 6000 },
];

export default function EvolutionPrix() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Évolution du prix</h2>
        <PriceChart data={mockData} />
      </div>
    </div>
  );
}
