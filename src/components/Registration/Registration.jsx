import css from "./Registration.module.css"
export default function Registration() {
    return (
        <div>
            <h2 className={css.title}>Your medication, delivered Say goodbye to all<span className={css.span}> your healthcare</span> worries with us</h2>
            <div>
                <button className={css.button}>Register</button>
                <p className={css.question}>Already have an account?</p>
            </div>
        </div>
    )
}