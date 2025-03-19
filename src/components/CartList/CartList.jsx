import CartItem from "../CartItem/CartItem";
import css from "./CartList.module.css"

export default function CartList() {
    return(
        <ul className={css.list}>
            <li><CartItem/></li>
            <hr className={css.line}/>
            <li><CartItem/></li>
            <hr className={css.line}/>
            <li><CartItem/></li>
            <hr className={css.line}/>
            <li><CartItem/></li>
        </ul>
    )
}