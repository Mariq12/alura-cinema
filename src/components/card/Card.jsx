import { useFavoritesContext } from "../../context/Favorites";
import styles from "./Card.module.css";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, layer, title }) {
    const { favorite, addFavorite } = useFavoritesContext();
    const isFavorite = favorite.some(fav => fav.id === id);

    const handleFavoriteClick = () => {
        addFavorite({ id, title, layer });
    };

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={layer} alt={title} className={styles.layer} />
                <h2>{title}</h2>
            </Link>
            <div 
                className={`${styles.favorite} ${isFavorite ? "is-favorite" : ""}`} 
                onClick={handleFavoriteClick}
            >
                {isFavorite ? (
                    <MdFavorite size={25} color="red" />
                ) : (
                    <MdFavoriteBorder size={25} color="gray" />
                )}
            </div>
        </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    layer: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;

