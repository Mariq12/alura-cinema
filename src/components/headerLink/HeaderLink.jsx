import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import styles from "./HeaderLink.module.css"

function HeaderLink({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

HeaderLink.propTypes = {
    url: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default HeaderLink