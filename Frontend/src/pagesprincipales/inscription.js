import Navbar from "../components/Navbar";
import UserForm from "../components/UserForm";

export default function Inscription() {
  const handleRegister = (data) => {
    console.log("Inscription avec :", data);
    // Tu peux envoyer les données au backend Django ici
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow mt-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Inscription</h2>
        <UserForm onSubmit={handleRegister} type="register" />
      </div>
    </div>
  );
}
