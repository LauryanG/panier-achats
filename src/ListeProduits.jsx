import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';
import fbAppli from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDYXixKoQkDQRBQM6g_v0lspnYwWsUV2OM",
  authDomain: "veille-technologique-173fb.firebaseapp.com",
  projectId: "veille-technologique-173fb",
  storageBucket: "veille-technologique-173fb.appspot.com",
  messagingSenderId: "884338243671",
  appId: "1:884338243671:web:a5b8adf2d90fea7ba98b12",
  measurementId: "G-19TYS3Z8K8"
};

export default function ListeProduits(props) {
  return (
    <div className="ListeProduits">
      <h2>Produits disponibles</h2>
      <ul>        
        {tabProduits.map(prd => 
         <Produit nom={prd.nom} prix={prd.prix} id={prd.id} etatPanier={props.etatPanier} key={prd.id} />
        )}
      </ul>
    </div>
  );
}