import Favorites from "../pages/favorites/FavoritesPage.jsx";
import Home from "../pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "../pages/player/Player.jsx";
import NotFound from "../components/notFound/NotFound.jsx";
import BasePage from "../pages/basePage/BasePage.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favorites" element={<Favorites />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
