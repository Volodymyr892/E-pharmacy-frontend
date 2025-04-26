import { useSelector } from "react-redux";
import MedicineItem from "../MedicineItem/MedicineItem";
import css from "./MedicineList.module.css"
import { products } from "../../redux/products/selectors";
export default function MedicineList() {
    const product = useSelector(products);
    console.log("🚀 ~ MedicineList ~ product:", product)
    return(
        <section>
            <ul className={css.list}>
                <li><MedicineItem/></li>
                <li><MedicineItem/></li>
                <li><MedicineItem/></li>
                <li><MedicineItem/></li>
                <li><MedicineItem/></li>
                <li><MedicineItem/></li>
            </ul>
        </section>
    )
}