import { useFavoritesContext } from "../../context/Favorites";
import styles from "./Card.module.css";
import iconFavorite from "./iconFavorito.png";
import iconNoFavorite from "./iconNoFavorito.png";
import Props from "prop-types";
import { Link } from "react-router-dom";


function Card({ id, layer, title }) {
    const { favorite, addFavorite } = useFavoritesContext()
    const isFavorite = favorite.some(fav => fav.id === id)
    const icon = isFavorite ? iconFavorite : iconNoFavorite


    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={layer} alt={title} className={styles.capa} />
                <h2>{title}</h2>
            </Link>
            <img
                src={icon}
                alt="Icono favorito"
                className={styles.favorite}
                onClick={() => addFavorite({ id, title, layer })}
            />
        </div>
    );
}

Card.propTypes = {
    id: Props.number.isRequired,
    layer: Props.string.isRequired,
    title: Props.string.isRequired,
};

export default Card;
