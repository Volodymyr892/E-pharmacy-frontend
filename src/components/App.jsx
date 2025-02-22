import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

const CartPage = lazy(() =>import('../pages/CartPage/CartPage'));
const HomePage = lazy(()=> import('../pages/HomePage/HomePage'));
const LoginPage = lazy(()=>import('../pages/LoginPage/LoginPage'));
const MedicinePage = lazy(()=>import('../pages/MedicinePage/MedicinePage'));
const MedicineStorePage = lazy(()=>import('../pages/MedicineStorePage/MedicineStorePage'));
const ProductPage = lazy(()=>import('../pages/ProductPage/ProductPage'));
const RegisterPage = lazy(()=>import('../pages/RegisterPage/RegisterPage'));
const ShearedLayout = lazy(()=>import('../pages/ShearedLayout/ShearedLayout'));

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ShearedLayout/>}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/medicine-store" element={<MedicineStorePage/>}/>
        <Route path="/medicine" element={<MedicinePage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Route>
    </Routes>
  )
}
