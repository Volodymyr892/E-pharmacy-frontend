import PromoBannersItem from "../PromoBannersItem/PromoBannersItem";
import css from "./PromoBannersList.module.css"

export default function PromoBannersList() {
    return(
        <div className={css.container}>
            <ul className={css.list}>
                <li><PromoBannersItem/></li>
                <li><PromoBannersItem/></li>
                <li><PromoBannersItem/></li>
            </ul>
        </div>
    )
}