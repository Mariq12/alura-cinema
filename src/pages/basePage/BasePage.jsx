import Footer from "../../components/footer/Footer";
import Container from "../../components/container/Container";
import Header from "../../components/header/Header";
import FavoritesProvider from "../../context/Favorites";
import { Outlet } from "react-router-dom";


function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
} 

export default BasePage;