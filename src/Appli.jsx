import './Appli.scss';
import {useState} from 'react';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

function Appli() {
  
  // Gérer l'état avec les "React Hooks"
  // UseState va créer une variable d'état initialisée a {}
  const etatPanier = useState({});

  const panier = etatPanier[0];
  const setPanier = etatPanier[1];

  const [connexion, setConnexion] = useState(false); // Destructuring arrays

  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeProduits />
      </section>

      <PiedDePage/>
    </div>
  );
}

export default Appli;
