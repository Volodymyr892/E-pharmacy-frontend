import css from "./Login.module.css"
export default function Login() {
    return(
        <div>
            <h2 className={css.title}>Your medication, delivered Say goodbye to all<span className={css.span}> your healthcare worries</span> with us</h2>
            <div>
                <button className={css.buttonLogin}>Log in</button>
                <p className={css.question}>Don't have an account?</p>
            </div>
        </div>
    )
}