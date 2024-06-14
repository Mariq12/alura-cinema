import Banner from '../../components/banner/Banner';
import styles from './Favorites.module.css';
import Title from '../../components/title/Title';

function Favorites() {
    return (
        <>
            <Banner img="favorite" color="#44d97d" />
            <Title>
                <h1>Mis favoritos</h1>
            </Title>
            <section className={styles.container}>

            </section>
        </>
    );
}

export default Favorites;