import BtnAjoutPanier from './BtnAjoutPanier'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import './Produit.scss'

export default function Produit({nom, prix, id, etatPanier}) {
    const [panier, setPanier] = props.etatPanier;

    function ajouterPanier() {
        if (panier[id]) {
            panier[id].qte++;
        }
        else {
            panier[id] = {nom: nom, prix: prix, qte: 1}
        }
        setPanier(JSON.parse(JSON.stringify(panier)));
    }

    let qte = 0;
    let texte = "Ajouter au panier";
    let couleur = "";
    if(panier[id]) {
        qte = panier[id].qte;
        texte = <AddCircleOutlineIcon />;
    }
    return(
        <li className="Produit">
            <img src={'images-produits/' + id + '.webp'} alt=""/>
            <div className="info">
                <p className="nom">{nom}</p>
                <p className="prix">{prix}</p>
            </div>
            <BtnAjoutPanier onClick={ajouterPanier} qte={} texte={""} />
        </li>
    );
}