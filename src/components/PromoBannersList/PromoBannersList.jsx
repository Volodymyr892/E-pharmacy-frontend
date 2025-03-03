import PromoBannersItem from "../PromoBannersItem/PromoBannersItem";
import css from "./PromoBannersList.module.css"

export default function PromoBannersList() {
    return(
        <div>
            <ul>
                <li><PromoBannersItem/></li>
            </ul>
        </div>
    )
}