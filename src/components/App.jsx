import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MedicinePage from "../pages/MedicinePage/MedicinePage"
import MedicineStorePage from "../pages/MedicineStorePage/MedicineStorePage"
import ProductPage from "../pages/ProductPage/ProductPage"
import RegisterPage from "../pages/RegisterPage/RegisterPage"
import ShearedLayout from "../pages/ShearedLayout/ShearedLayout"

export default function App() {
  return (
    <div>
      <CartPage/>
      <HomePage/>
      <LoginPage/>
      <MedicinePage/>
      <MedicineStorePage/>
      <ProductPage/>
      <RegisterPage/>
      <ShearedLayout/>
    </div>
  )
}
