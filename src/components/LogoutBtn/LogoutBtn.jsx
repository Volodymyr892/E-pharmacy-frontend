import css from "./LogoutBtn.module.css"
export default function LogoutBtn() {
    return(
        <div className={css.container}>
            <button className={css.button}>Log out</button>
        </div>
    )
}