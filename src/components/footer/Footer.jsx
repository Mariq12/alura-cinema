import styles from './Footer.module.css';
import logo from './logo-alura.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <figure>
                <img src={logo} alt="Alura" />
            </figure>
            <div>
                <h2>Desarrollado por Alura</h2>
                <p>Modificado por Flor María Labanda P.</p>
            </div>
        </footer>
    );
}

export default Footer;