import { useDispatch } from "react-redux";
import MedicineStorePageList from "../../components/MedicineStorePageList/MedicineStorePageList";
import { useEffect } from "react";
import { medicineStore } from "../../redux/pharmacies/operation";

export default function MedicineStorePage() {
  const dispatch = useDispatch();
  
      useEffect(()=>{
          dispatch(medicineStore());
      }, [dispatch])
  return (
    <div>
      <MedicineStorePageList/>
    </div>
  )
}
