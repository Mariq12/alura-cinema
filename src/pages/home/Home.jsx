import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import styles from "./Home.module.css";
import data from "../../data/db.json";

function Home() {
    const videos = data.videos;

    return (
        <>
            <Header />
            <Banner img="home" color="#154580" />
            <Title>
                <h1>A place to store your favorite videos</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
            <Footer />
        </>
    );
}

export default Home;
