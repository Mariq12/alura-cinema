import Title from "../../components/title/Title.jsx";
import Banner from "../../components/banner/Banner.jsx";
import styles from "./Player.module.css";
import data from "../../data/db.json"; // Importa el objeto completo
import { useParams } from "react-router-dom";

function Player() {
    const parameters = useParams();
    const { videos } = data; // Accede al array de videos
    console.log('Videos:', videos);
    const video = Array.isArray(videos) ? videos.find(video => video.id === Number(parameters.id)) : null;
    console.log('Selected video:', video);

    if (!video) {
        return <div>Video not found</div>;
    }

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe width="100%" height="100%"
                    src={video.link}
                    title={video.title}
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </section>
        </>
    );
}

export default Player;
