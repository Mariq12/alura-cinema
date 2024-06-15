import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

export const FavoritesContext = createContext();

FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider value={{ favorite, setFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
}

FavoritesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useFavoritesContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const duplicateFavorite = favorite.some(
            (item) => item.id === newFavorite.id
        );
        let newList = [...favorite];
        if (!duplicateFavorite) {
            newList.push(newFavorite);
           setFavorite(newList);
        }
        newList = favorite.filter((item) => item.id !== newFavorite.id);
        setFavorite(newList);
    }
    return { favorite, addFavorite};
}
