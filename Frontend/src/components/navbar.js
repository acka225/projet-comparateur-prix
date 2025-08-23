import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">ComparateurPrix</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Accueil</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/ajouter">Ajouter Prix</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/comparer">Comparer</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/evolution">Graphiques</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/connexion">Connexion</Link></li>
          </ul>
        </div>
      </div>
    </nav>

}

export default Navbar;
