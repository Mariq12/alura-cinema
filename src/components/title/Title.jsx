import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title({children}) {
    return(
        <div className={styles.text}>
            {children}
        </div>
    )
}

Title.propTypes = {
    children: PropTypes.node.isRequired
};

export default Title;