import { useDispatch, useSelector } from "react-redux";
import ReviewsItem from "../ReviewsItem/ReviewsItem";
import css from "./ReviewsList.module.css"
import { useEffect } from "react";
import { customerReviews } from "../../redux/pharmacies/operation";
import { reviewsSelectors } from "../../redux/pharmacies/selectors";

export default function ReviewsList() {
    const reviews = useSelector(reviewsSelectors);
    console.log("🚀 ~ ReviewsList ~ reviews:", reviews)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(customerReviews());
    },[dispatch])
    return(
        <section className={css.container}>
            <div>
                <h2 className={css.title}>Reviews</h2>
                <p className={css.description}>Search for Medicine, Filter by your location</p>
            </div>
            <ul>
                {reviews.map((review)=>(
                <li key={review._id}>
                    <ReviewsItem review={review}/>
                </li>
                ))}
            </ul>
        </section>
    )
}