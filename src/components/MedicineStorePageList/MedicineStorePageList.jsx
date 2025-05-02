// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MedicineStoresItem from "../MedicineStoresItem/MedicineStoresItem";
import css from "./MedicineStorePageList.module.css"
import { storesSelectors } from "../../redux/pharmacies/selectors";
// import { useEffect } from "react";
// import { store } from "../../redux/pharmacies/operation";

export default function MedicineStorePageList() {
    const stores = useSelector(storesSelectors);
    console.log("🚀 ~ MedicineStorePageList ~ store:", stores)
    
    return(
        <section className={css.container}>
            <h1 className={css.title}>Medicine store</h1>
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