import styles from "./Banner.module.css";

import PropTypes from "prop-types";

function Banner({ img, color }) {
    return (
        <div
            className={styles.capa}
            style={{ backgroundImage: `url("/img/banner-${img}.png")` }}
        >
            <div className={styles.gradient} style={{ background: `${color}` }}>
                
            </div>
        </div>
    );
}

Banner.propTypes = {
    img: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default Banner;