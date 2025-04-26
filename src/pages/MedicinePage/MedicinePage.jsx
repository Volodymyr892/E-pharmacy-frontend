
import { useDispatch } from "react-redux";
import Filter from "../../components/Filter/Filter";
import MedicineList from "../../components/MedicineList/MedicineList";
import css from "./MedicinePage.module.css"
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/operation";

export default function MedicinePage() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchProducts());
  })
  return (
    <main className={css.container}>
      <Filter/>
      <MedicineList/>
    </main>
  )
}
