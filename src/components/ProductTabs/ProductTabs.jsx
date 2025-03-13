import { NavLink, Outlet } from "react-router-dom";
import css from "./ProductTabs.module.css"

export default function ProductTabs() {
    return(
        <div className={css.container}>
            <div>
                <NavLink to="/product/description">
                    Description
                </NavLink>
                <NavLink to="/product/reviews">
                    Rewievs
                </NavLink>
            </div>
            <Outlet/>
        </div>
    )
}