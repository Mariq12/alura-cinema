import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import logo from "./logo-alura.png"
import HeaderLink from "../headerLink/HeaderLink";

function Header(){
    return(
        <header className={styles.header}>
            <Link to="/">
                <section className={styles.logoContainer}>
                    <img src={logo} alt="Logo Alura"/> <span>Cinema</span>
                </section>
            </Link>
            <nav>
                <HeaderLink url="./">Inicio</HeaderLink>
                <HeaderLink url="./favorites">Favoritos</HeaderLink>
            </nav>
        </header>
    )
}

export default Header;