import Banner from '../../components/banner/Banner';
import styles from './Favorites.module.css';
import Title from '../../components/title/Title';
import Card from '../../components/card/Card';
import { useFavoritesContext } from '../../context/Favorites';

function Favorites() {
    const { favorite } = useFavoritesContext();

    if (!favorite) return null;
 
    return (
        <>
            <Banner img="favorite" color="#44d97d" />
            <Title>
                <h1>Mis favoritos</h1>
            </Title>
            <section className={styles.container}>
            {favorite.map((fav) => (
                    <Card {...fav} key={fav.id} />
                ))}
            </section>
        </>
    );
}

export default Favorites;