import photo from "../../../public/Ellipse.svg"
import css from "./ReviewsItem.module.css"
export default function ReviewsItem() {
    return(
        <div className={css.container}>
            <img className={css.photo} src={photo} alt="photo" />
            <h3 className={css.name}>Maria Tkachuk</h3>
            <p className={css.reviews}>I recently used this medical platform to book an appointment with a specialist, and I was impressed by how easy and user-friendly the process was. Highly recommended!</p>
        </div>
    )
}