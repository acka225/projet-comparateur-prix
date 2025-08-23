import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";

export default function Connexion() {
  const handleLogin = (credentials) => {
    console.log("Connexion avec :", credentials);
    // Tu peux ajouter une logique d'authentification ici
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Connexion</h2>
        <UserForm onSubmit={handleLogin} type="login" />
        <p className="mt-4 text-center text-sm text-gray-600">
          Pas encore inscrit ?{" "}
          <Link to="/inscription" className="text-blue-600 hover:underline">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}
