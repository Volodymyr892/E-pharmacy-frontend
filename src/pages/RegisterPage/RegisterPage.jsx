import Registration from "../../components/Registration/Registration";
import css from "./RegisterPage.module.css"
import decor from "../../assets/elements.svg"
import decorQ from "../../assets/roundPill.svg"

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <img className={css.imgQ} src={decorQ} alt="decor" />
      <img className={css.img} src={decor} alt="decor" />
      <Registration/>
    </div>
  )
}