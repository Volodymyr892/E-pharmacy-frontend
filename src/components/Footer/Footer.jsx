import css from "./Footer.module.css"
import logo from "../../assets/logo.svg"

export default function Footer() {
    return(
        <div className={css.container}>
            <img src={logo} alt="logo" />
            <p className={css.descriptionText}>Get the medicine to help you feel better, get back to your active life, and enjoy every moment.</p>
            <ul className={css.list}>
                <li>Home</li>
                <li>Medicine store</li>
                <li>Medicine</li>
            </ul>
            <hr />
            <p>© E-Pharmacy 2023. All Rights Reserved Privacy Policy Terms & Conditions</p>
        </div>
    )
}