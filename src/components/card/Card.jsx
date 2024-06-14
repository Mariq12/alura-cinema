
import styles from "./Card.module.css";
import iconFavorito from "./iconFavorito.png";
import Props from "prop-types";


function Card({ id, layer, title }) {

    return (
        <div className={styles.container}>
                <img src={layer} alt={title} className={styles.layer} />
                <h2>{title}</h2>
            <img
                src={iconFavorito}
                alt="Icono favorito"
                className={styles.favorito}
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
