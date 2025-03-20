import { Outlet } from "react-router-dom";
import css from "./ShearedLayout.module.css"
import Header from "../../components/Header/Haader";
import Footer from "../../components/Footer/Footer";

export default function ShearedLayout() {
  return (
    <div className={css.container}>
      <Header/>
      <main >
        <Outlet />
      </main>
      <Footer/>
    </div>
  )
}