import MedicineList from "../../components/MedicineList/MedicineList";
import css from "./MedicinePage.module.css"

export default function MedicinePage() {
  return (
    <main className={css.container}>
      <MedicineList/>
    </main>
  )
}
