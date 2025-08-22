function Connexion() {
  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Connexion</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Mot de passe</label>
          <input type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-secondary w-100">Se connecter</button>
      </form>
    </div>
  );
}

export default Connexion;
