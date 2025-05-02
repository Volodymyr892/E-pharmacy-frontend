import photo from "../../../public/Ellipse.svg"
import css from "./ReviewsItem.module.css"
export default function ReviewsItem({review}) {
    return(
        <div className={css.container}>
            <img className={css.photo} src={photo} alt="photo" />
            <h3 className={css.name}>{review.name}</h3>
            <p className={css.reviews}>{review.testimonial}</p>
        </div>
    )
}