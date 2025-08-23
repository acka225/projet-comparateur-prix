export default function PriceList({ prices }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Prix enregistrés</h2>
      <ul className="space-y-3">
        {prices.map((entry, idx) => (
          <li key={idx} className="bg-white p-4 rounded shadow">
            <p><strong>Produit :</strong> {entry.produit}</p>
            <p><strong>Prix :</strong> {entry.prix} FCFA</p>
            <p><strong>Magasin :</strong> {entry.magasin}</p>
            <p><strong>Date :</strong> {entry.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
