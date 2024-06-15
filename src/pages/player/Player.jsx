import Title from "../../components/title/Title.jsx";
import Banner from "../../components/banner/Banner.jsx";
import styles from "./Player.module.css";
import { useParams } from "react-router-dom";
import NotFound from "../../components/notFound/NotFound.jsx";
import { useState, useEffect } from "react";

function Player() {
    const [video, setVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const parameters = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`https://my-json-server.typicode.com/Mariq12/alura-cinema-api/videos?id=${parameters.id}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setVideo(data[0]);
                } else {
                    setVideo(null);
                }
                setLoading(false); 
            })
            .catch(() => {
                setVideo(null);
                setLoading(false); 
            });
    }, [parameters.id]);

    if (loading) return <div>Loading...</div>; 

    if (video === null) return <NotFound />;

    return (
        <>
            <Banner img="player" color="#58B9AE" />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={video.link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </section>
        </>
    );
}

export default Player;
