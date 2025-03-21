import css from "./Header.module.css"
import logo from "../../assets/logo.svg"
export default function Header(){
    return(
        <div className={css.header}>
            <img src={logo} alt="" />
        </div>
    )
}