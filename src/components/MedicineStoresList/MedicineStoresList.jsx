import { useDispatch, useSelector } from "react-redux";
import MedicineStoresItem from "../MedicineStoresItem/MedicineStoresItem";
import css from "./MedicineStoresList.module.css"
import { useEffect } from "react";
import { storesNearest } from "../../redux/pharmacies/operation";
import { storesNearestSelectors } from "../../redux/pharmacies/selectors";

export default function MedicineStoresList() {
    const stores = useSelector(storesNearestSelectors);
    console.log("🚀 ~ MedicineStoresList ~ stores:", stores)
    // console.log("🚀 ~ MedicineStoresList ~ stores:", stores)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(storesNearest());
    },[dispatch])
    return(
        <section className={css.container}>
            <div className={css.containerTitle}>
                <h2 className={css.title}>Your Nearest Medicine Store</h2>
                <p className={css.description}>Search for Medicine, Filter by your location</p>
            </div>
            <ul className={css.list}>
                {stores.map((store)=>(
                    <li key={store._id}>
                        <MedicineStoresItem store={store}/>
                    </li>
                ))}
            </ul>
        </section>
    )
}