import { NavLink, Outlet, useLocation } from "react-router-dom";
import css from "./ProductTabs.module.css"

export default function ProductTabs() {
    const location = useLocation();
    const isFavoritesActive = location.pathname === "/product" || location.pathname === "/product/description";
    const isFavorites = location.pathname === "/product/reviews";
    return(
        <div className={css.container}>
            <div>
                <NavLink
                 to="/product/description"
                 className={({isActive})=>
                    isActive || isFavoritesActive ?  css.active : css.tabF
                 }
                 >
                    Description
                </NavLink>
                <NavLink to="/product/reviews"
                className={({isActive})=>
                    isActive || isFavorites ?  css.active : css.tabF
                 }
                >
                    Rewievs
                </NavLink>
            </div>
            <Outlet/>
        </div>
    )
}