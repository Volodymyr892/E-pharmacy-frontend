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
            <hr className={css.line}/>
            <ul className={css.listTwo}>
                <li className={css.p}>© E-Pharmacy 2023. All Rights Reserved</li>
                <hr className={css.lineTwo}/>
                <li className={css.p}>Privacy Policy</li>
                <hr className={css.lineTwo}/>
                <li className={css.p}>Terms & Conditions</li>
            </ul>
            {/* <p className={css.p}>© E-Pharmacy 2023. All Rights Reserved</p>
            <p className={css.p}>Privacy Policy </p>
            <p className={css.p}>Terms & Conditions</p> */}
        </div>
    )
}