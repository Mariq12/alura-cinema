import Banner from "../../components/banner/Banner";
import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/Mariq12/alura-cinema-api/videos")
            .then((response) => response.json())
            .then((data) => {
                setVideos(data);
            });
    }, []);

    return (
        <>
            <Banner img="home" color="#154580" />
            <Title>
                <h1>Un lugar para guardar sus videos favoritos </h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    );
}

export default Home;
