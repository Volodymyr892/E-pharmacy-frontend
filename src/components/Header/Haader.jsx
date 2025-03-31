import css from "./Header.module.css"
import logo from "../../assets/logo.svg"
import BurgerModal from "../BurgerModal/BurgerModal"
import { useState } from "react"
import { IoIosMenu } from "react-icons/io";
export default function Header(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className={css.header}>
            <img src={logo} alt="" />
            <>
                <button className={css.buttonBurger}  onClick={() => setIsOpen(true)}><IoIosMenu  className={css.icon}/></button>
                <BurgerModal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            </>
        </div>
    )
}