import MedicineStoresItem from "../MedicineStoresItem/MedicineStoresItem";
import css from "./MedicineStorePageList.module.css"

export default function MedicineStorePageList() {
    return(
        <section className={css.container}>
            <h1 className={css.title}>Medicine store</h1>
            <ul className={css.list}>
                <li><MedicineStoresItem/></li>
                <li><MedicineStoresItem/></li>
                <li><MedicineStoresItem/></li>
                <li><MedicineStoresItem/></li>
                <li><MedicineStoresItem/></li>
                <li><MedicineStoresItem/></li>
                <li><MedicineStoresItem/></li>
            </ul>
        </section>
    )
}