import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const active = ({ isActive }) => (isActive ? css.active : css.inactive);

export default function AuthNav() {
    return(
        <div className={css.container}>
            <nav className={css.nav}>
                <NavLink className={active} to="/login">Register</NavLink>
                <NavLink className={active} to="/register">Login</NavLink>
            </nav>
        </div>
    )
}