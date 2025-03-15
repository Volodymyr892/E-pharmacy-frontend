import ReviewsItemProduct from "../ReviewsItemProduct/ReviewsItemProduct";
import css from "./Reviews.module.css"

export default function Reviews() {
    return(
            <ul className={css.container}>
                <li> <ReviewsItemProduct/></li>
                <li> <ReviewsItemProduct/></li>
                <li> <ReviewsItemProduct/></li>
                <li> <ReviewsItemProduct/></li>
            </ul>
    )
}