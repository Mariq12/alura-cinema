import styles from './Footer.module.css';
import logo from './logo-alura.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <h2>Desarrollado por <img src={logo} alt="Alura" /></h2>
        </footer>
    );
}

export default Footer;