import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import css from "./BurgerModal.module.css";
import { IoCloseOutline } from "react-icons/io5";
import LogoutBtn from "../LogoutBtn/LogoutBtn";
import AuthNav from "../AuthNav/AuthNav";

export default function BurgerModal({ isOpen, onClose }) {
      const  [isLoggedIn] = useState(true);
    if (!isOpen) return null;
    return(
        <div className={css.container}>
            <div className={css.modal} onClick={(e) => e.stopPropagation()}>
                <button className={css.closeButton} onClick={onClose}><IoCloseOutline className={css.icon}/></button>
                <Navigation/>
                {isLoggedIn ? <LogoutBtn/> : <AuthNav/>}
            </div>
        </div>
    )
}

