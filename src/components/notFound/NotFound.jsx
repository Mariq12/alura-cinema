import styles from "./NotFound.module.css"
import error404 from "./error404.jpg"

function NotFound(){
    return(
        <section  className={styles.container}>
            <h2 className={styles.error}>404</h2>
            <p className={styles.text_error}>Página no encontrada</p>
            <img className={styles.img_error} src={error404} alt="Error 404"/>
        </section>

    )
}

export default NotFound