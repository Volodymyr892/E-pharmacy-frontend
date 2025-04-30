import { useSelector } from "react-redux";
import MedicineItem from "../MedicineItem/MedicineItem";
import css from "./MedicineList.module.css"
import { products } from "../../redux/products/selectors";

export default function MedicineList() {
    const product = useSelector(products)|| [];
    return(
        <section>
            <ul className={css.list}>
                {product.map((prod)=>(
                    <li key={prod._id}>
                        <MedicineItem prod={prod}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}