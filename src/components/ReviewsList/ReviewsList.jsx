import ReviewsItem from "../ReviewsItem/ReviewsItem";
import css from "./ReviewsList.module.css"

export default function ReviewsList() {
    return(
        <section className={css.container}>
            <div>
                <h2 className={css.title}>Reviews</h2>
                <p className={css.description}>Search for Medicine, Filter by your location</p>
            </div>
            <ReviewsItem/>
        </section>
    )
}