import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"

const active = ({ isActive }) => (isActive ? css.active : css.inactive);
const activeQ = ({ isActive }) => (isActive ? css.activeQ : css.inactiveQ);

export default function Navigation() {
    return(
        <div className={css.container}>
            <div className={css.list}>
                <NavLink to="/home" className={active}>Home</NavLink>
                <NavLink to="/medicine-store" className={activeQ}>Medicine Store</NavLink>
                <NavLink to="/medicine" className={active}>Medicine</NavLink>
            </div>
        </div>
    )
}