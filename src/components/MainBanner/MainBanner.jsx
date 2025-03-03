import css from "./MainBanner.module.css"
export default function MainBanner() {
    return(
        <div className={css.container}>
            <div className={css.titleContainer}>
                <h1 className={css.title}>Your medication delivered</h1>
                <p className={css.description}>Say goodbye to all your healthcare worries with us</p>
            </div>
        </div>
    )
}