import Container from "../components/container/Container.jsx";
import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
import Favorites from "../pages/favorites/Favorites.jsx";
import Home from "../pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="favorites" element={<Favorites />}></Route>
            </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default AppRoutes;
