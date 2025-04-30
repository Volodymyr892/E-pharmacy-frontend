import { NavLink } from "react-router-dom"
import css from "./MedicineItem.module.css"

export default function MedicineItem({prod}) {
    return(
        <div>
                <img className={css.img} src={prod.photo} alt="" />
            <div className={css.addContainer}>
                <ul className={css.list}>
                    <li>
                        <h3 className={css.title}>{prod.name}</h3>
                        <p className={css.description}>{prod.suppliers}</p>
                    </li>
                    <li><p className={css.price}>{prod.price}</p></li>
                </ul>
                <div className={css.containerButton}>
                    <button className={css.button}>
                        Add to cart
                    </button>
                    <NavLink className={css.details} to={`/product/${prod._id}`}>Details</NavLink>
                </div>
            </div>
        </div>
    )
}