import './Appli.scss';
import {useEffect, useState} from 'react';
import Entete from './Entete';
import ListeProduits from './ListeProduits';
import PiedDePage from './PiedDePage';

function Appli() {
  // Gérer l'état avec les "React Hooks"
  // UseState va créer une variable d'état initialisée a {}
  const etatPanier = useState(() => {
    return JSON.parse(window.localStorage.getItem('panier')) || {};
  //   let panierDansLS = window.localStorage.getItem('panier');
  //   if (panierDansLS !== null) {
  //     return JSON.parse(panierDansLS);
  //   }
  //   else {
  //     return {};
  //   }
  });

  const [panier, setPanier] = etatPanier;

  // Corriger avec useEffect()
  // Sauvegarder l'état du panier dans localStorage

  useEffect(
    () => window.localStorage.setItem('panier', JSON.stringify(etatPanier[0])), 
    [etatPanier[0]]);

  return (
    <div className="Appli">
      <Entete etatPanier={etatPanier}/>
      <section className="contenuPrincipal">
        <ListeProduits etatPanier={etatPanier}/>
      </section>
      <PiedDePage/>
    </div>
  );
}

export default Appli;
