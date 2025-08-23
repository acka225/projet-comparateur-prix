import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-primary bg-gradient">
      <div className="bg-white rounded-4 shadow-lg p-5 text-center w-75">
        <h1 className="fw-bold text-dark mb-4">
          Bienvenue sur <span className="text-primary">ComparateurPrix</span>
        </h1>

        <p className="lead text-muted mb-5">
          Comparez les prix des produits dans différents magasins et suivez leur
          évolution en temps réel.
        </p>

        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
          <Link to="/ajouter" className="btn btn-primary btn-lg px-4">
            Ajouter un prix
          </Link>
          <Link to="/comparer" className="btn btn-outline-primary btn-lg px-4">
            Comparer les prix
          </Link>
        </div>

        <div className="row text-muted">
          <div className="col-md-4 mb-4">
            <h5 className="text-primary"> Analyse</h5>
            <p>Suivez l’évolution des prix dans le temps.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-primary"> Magasins</h5>
            <p>Comparez plusieurs enseignes en un clic.</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-primary"> Profil</h5>
            <p>Historique des recherches et favoris.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
