import styles from './Pie.module.css';
import logo from './logo.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>Desarrollado por <img src={logo} alt="Alura" /></h2>
        </footer>
    );
}

export default Footer;