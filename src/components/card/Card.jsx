import { useFavoritesContext } from "../../context/Favorites";
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png";
import iconNoFavorito from "./iconNoFavorito.png";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


function Card({ id, layer, title }) {
    const { favorite, addFavorite } = useFavoritesContext();
    const isFavorite = favorite.some(fav => fav.id === id);
    const icon = isFavorite ? iconFavorito : iconNoFavorito;


    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={layer} alt={title} className={styles.layer} />
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
    id: PropTypes.number.isRequired,
    layer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
