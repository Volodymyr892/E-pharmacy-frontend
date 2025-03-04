import MedicineStoresItem from "../MedicineStoresItem/MedicineStoresItem";
import css from "./MedicineStoresList.module.css"

export default function MedicineStoresList() {
    return(
        <section className={css.container}>
            <div className={css.containerTitle}>
                <h2 className={css.title}>Your Nearest Medicine Store</h2>
                <p className={css.description}>Search for Medicine, Filter by your location</p>
            </div>
            <ul className={css.list}>
                <li>
                    <MedicineStoresItem/>
                </li>
                <li>
                    <MedicineStoresItem/>
                </li>
                <li>
                    <MedicineStoresItem/>
                </li>
                <li>
                    <MedicineStoresItem/>
                </li>
                <li>
                    <MedicineStoresItem/>
                </li>
                <li>
                    <MedicineStoresItem/>
                </li>
            </ul>
        </section>
    )
}