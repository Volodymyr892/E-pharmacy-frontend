import { NavLink } from "react-router-dom";

export default function AuthNav() {
    return(
        <nav>
            <NavLink to="/login">Register</NavLink>
            <NavLink to="/register">Login</NavLink>
        </nav>
    )
}