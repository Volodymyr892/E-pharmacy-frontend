import css from "./Login.module.css"
export default function Login() {
    return(
        <div>
            <h2 className={css.title}>Your medication, delivered Say goodbye to all<span className={css.span}> your healthcare worries</span> with us</h2>
            <div>
                <from>
                    <div>
                        <input 
                        type="email"
                        className={css.input}
                        placeholder="Email address"
                        />
                        <input 
                        type="password"
                        className={css.input} 
                        placeholder="Password"
                        />
                    </div>
                    <button className={css.buttonLogin}>Log in</button>
                    <p className={css.question}>Don't have an account?</p>
                </from>
            </div>
        </div>
    )
}