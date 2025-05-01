import { useSelector } from "react-redux";
import ReviewsItemProduct from "../ReviewsItemProduct/ReviewsItemProduct";
import css from "./Reviews.module.css"
import { productSelectors } from "../../redux/products/selectors";

export default function Reviews() {
    const rewievs = useSelector(productSelectors);
    return(
            <ul className={css.container}>
                {rewievs.reviews.map((review)=>(
                    <li key={review._id}> 
                        <ReviewsItemProduct review={review}/>
                    </li>
                ))}
            </ul>
    )
}