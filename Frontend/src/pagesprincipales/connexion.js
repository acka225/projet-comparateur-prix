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
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Connexion</h2>
        <UserForm onSubmit={handleLogin} type="login" />
      </div>
    </div>
  );
}
