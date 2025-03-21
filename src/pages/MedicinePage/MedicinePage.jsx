
import Filter from "../../components/Filter/Filter";
import MedicineList from "../../components/MedicineList/MedicineList";
import css from "./MedicinePage.module.css"

export default function MedicinePage() {
  return (
    <main className={css.container}>
      <Filter/>
      <MedicineList/>
    </main>
  )
}
