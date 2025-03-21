import Login from "../../components/Login/Login";
import css from "./LoginPage.module.css"
import decor from "../../assets/elements.svg";
import decorQ from "../../assets/roundPill.svg"
export default function LoginPage() {
  return (
    <div className={css.container}>
      <img className={css.imgQ} src={decorQ} alt="decor" />
      <img className={css.img} src={decor} alt="decor" />
      <Login/>
    </div>
  )
}