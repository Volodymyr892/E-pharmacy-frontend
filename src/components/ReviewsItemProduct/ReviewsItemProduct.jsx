import css from "./ReviewsItemProduct.module.css"
import star from "../../../public/star.svg"
export default function ReviewsItemProduct({review}) {
    console.log("🚀 ~ ReviewsItemProduct ~ review:", review)
    return(
        <div className={css.container}>
            <ul className={css.list}>  
                <div className={css.containerName}>
                    <li className={css.itemImg}>
                        <img src="" alt="" />
                    </li>
                    <li className={css.itemName}>
                        <p className={css.name}>{review.user}</p>
                        <p className={css.time}> 2 days ago</p>
                    </li>
                </div>
                <li className={css.item}>
                    <img className={css.star} src={star} alt="star" />
                    <p>4</p>
                </li>
            </ul>
        
        <p className={css.reviews}>I've been using Moringa powder in my smoothies for a few weeks now. My energy levels are up, and I feel great. I followed the recommended dosage, and it seems to be a perfect addition to my daily routine. Highly recommend!</p>
        </div>
    )
}