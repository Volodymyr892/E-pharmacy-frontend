import MedicineItem from "../MedicineItem/MedicineItem";
import css from "./MedicineList.module.css"
export default function MedicineList() {
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