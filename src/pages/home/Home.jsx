import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Title from "../../components/title/Title";


function Home(){
    return (
        <>
        <Header />
        <Banner img="home" color="#154580" />
        <Title> 
            <h1>Un lugar para guardar sus videos favoritos</h1>
        </Title>
        <Footer />
        </>
    )
}

export default Home;