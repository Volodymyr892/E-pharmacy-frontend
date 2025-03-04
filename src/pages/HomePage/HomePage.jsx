import MainBanner from "../../components/MainBanner/MainBanner";
import MedicineStoresList from "../../components/MedicineStoresList/MedicineStoresList";
import PharmacyPromo from "../../components/PharmacyPromo/PharmacyPromo";
import PromoBannersList from "../../components/PromoBannersList/PromoBannersList";
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className={css.container}>
      <MainBanner/>
      <PromoBannersList/>
      <MedicineStoresList/>
      <PharmacyPromo/>
    </div>
  )
}
