// import image from "../../assets/imageClean.jpg"
import css from "./MedicineItem.module.css"
export default function MedicineItem() {
    return(
        <div>
            <div className={css.imageContainer}>
                <img src="" alt="" />
            </div>
            <div className={css.addContainer}>
                <ul className={css.list}>
                    <li>
                        <h3 className={css.title}>Antimonium</h3>
                        <p className={css.description}>Structural (Fabrication)</p>
                    </li>
                    <li><p className={css.price}>৳24</p></li>
                </ul>
                <div className={css.containerButton}>
                    <button className={css.button}>
                        Add to cart
                    </button>
                    <p className={css.details}>Details</p>
                </div>
            </div>
        </div>
    )
}