import css from "./Registration.module.css"
export default function Registration() {
    return (
        <div>
            <h2 className={css.title}>Your medication, delivered Say goodbye to all<span className={css.span}> your healthcare</span> worries with us</h2>
            <div>
                <form className={css.form}>
                    <div>
                        
                            <input 
                            type="text" 
                            placeholder="User Name"
                            className={css.input}
                            />
                            <input 
                            type="email"
                            placeholder="Email address"
                            className={css.input}
                            />
                            <input 
                            type="number"
                            placeholder="Phone number"
                            className={css.input}
                            />
                            <input 
                            type="password"
                            placeholder="Password"
                            className={css.input}
                            />
                        
                    </div>
                    <button className={css.button}>Register</button>
                    <p className={css.question}>Already have an account?</p>
                </form>
            </div>
        </div>
    )
}