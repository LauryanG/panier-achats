import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
    return(
        <div className="ListeProduits">
            <h2>Produits disponibles</h2>
            <ul>
                {/* Générer les produits a partir de la structure obtenue du fichier JSON des produits */}
                {
                    tabProduits.map(prd => 
                    <Produit etatPanier={props.etatPanier} key={prd.id} nom={prd.nom} prix={prd.prix} id={prd.id}/>
                )}
            </ul>
        </div>
    );
}