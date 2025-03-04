import { Outlet } from "react-router-dom";
import css from "./ShearedLayout.module.css"

export default function ShearedLayout() {
  return (
    <div className={css.container}>
      <p>ShearedLayout</p>
      <Outlet />
    </div>
  )
}