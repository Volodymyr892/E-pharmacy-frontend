import css from "./MedicineStoresItem.module.css"
import map from "../../../public/map.svg"
import phone from "../../../public/phone.svg"
import star from "../../../public/star.svg"
export default function MedicineStoresItem({store}) {
    if (!store) return null;
    // console.log("🚀 ~ MedicineStoresItem ~ store:", store)
    return(
        <div className={css.container}>
            <div>
                <ul className={css.list}>
                    <li>
                        <h3 className={css.title}>{store.name}</h3>
                    </li>
                    <li className={css.item}>
                        <img src={map} alt="map" />
                        <p className={css.mapPhone}>{store.address}</p>
                    </li>
                    <li className={css.item}>
                        <img src={phone} alt="phone" />
                        <p className={css.mapPhone}>{store.phone}</p>
                    </li>
                </ul>
            </div>
            <div className={css.ratingContainer}>
                <div className={css.rating}>
                    <img className={css.img} src={star} alt="star" />
                    <p className={css.number}>{store.rating}</p>
                </div>
                <button className={css.open}>open</button>
            </div>
        </div>
    )
}