import './Entete.scss';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) {
    // Calculer le nombre d'article dans le panier
    const [panier, setPanier] = props.etatPanier;
    const valeursPanier = Object.values(panier);

    return(
        <header className="Entete">
            <div className="logo">Magasin</div>
            <ul className="navPrincipale">
                <li>Produits</li>
                <li>A propos de nous</li>
                <li>Contactez-nous</li>
            </ul>

            <ul className="navUtilisateur">
                <li>
                    <Badge badgeContent={valeursPanier.reduce((valInit, valCourante) => valInit + valCourante.qte, 0)} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </li>
                <li>Mon compte</li>
            </ul>
        </header>
    )
}

export default Entete;

//navPrincipal - camelCase (classe)
//ListeProduits - PascalCase (Composant)
//nav-principal - kebab-case
//nav_principale - snake_case