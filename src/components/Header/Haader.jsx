import css from "./Header.module.css"
import logo from "../../assets/logo.svg"
import BurgerModal from "../BurgerModal/BurgerModal"
export default function Header(){
    return(
        <div className={css.header}>
            <img src={logo} alt="" />

            <BurgerModal/>
        </div>
    )
}