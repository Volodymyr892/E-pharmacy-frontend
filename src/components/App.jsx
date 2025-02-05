import { Route, Routes } from "react-router-dom";
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
    <Routes>
      {/* <Route path="/" element={<ShearedLayout/>}> */}
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/medicine-store" element={<MedicineStorePage/>}/>
        <Route path="/medicine" element={<MedicinePage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      {/* </Route> */}
    </Routes>
  )
}
