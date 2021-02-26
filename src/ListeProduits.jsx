import './ListeProduits.scss';
import Produit from "./Produit";
import tabProduits from './data/produits.json';
import fbAppli from 'firebase/app';
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYXixKoQkDQRBQM6g_v0lspnYwWsUV2OM",
  authDomain: "veille-technologique-173fb.firebaseapp.com",
  databaseURL: "https://veille-technologique-173fb-default-rtdb.firebaseio.com",
  projectId: "veille-technologique-173fb",
  storageBucket: "veille-technologique-173fb.appspot.com",
  messagingSenderId: "884338243671",
  appId: "1:884338243671:web:a5b8adf2d90fea7ba98b12",
  measurementId: "G-19TYS3Z8K8"
};

// Guide Firestore (https://firebase.google.com/docs/firestore)
// Étape 1 : initialiser le service Firebase et le produit Firestore
if(!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

const bd = fbAppli.firestore();

// Étape 2 : utiliser l'API firestore

// Exemple A : écrire des documents dans la collection "produits"
tabProduits.forEach(
  prd =>  bd.collection("produits").add(prd).then(
    refDoc => console.log("ID du document ajouté : ", refDoc.id)
  )
);

// Exemple B : lire des données dans une "collection"
bd.collection("produits").get().then(
  reponse => {
    reponse.forEach(
      doc => console.log("Produit dont le prix > 13$ : ", doc.data())
    )
  }
);

// Exemple C : observer les données en temps réel
let observerProduits = bd.collection("produits").onSnapshot(
  vue => vue.docChanges().forEach(
    changement => {
      if(changement.type=="added") {
        console.log(changement.doc.data());
      }
    }
  )
);


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