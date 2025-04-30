import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Description from "./Description/Description";
import Reviews from "./Reviews/Reviews";

import RestrictedRoute from "./RectrictedRoute";
import PrivateRoute from "./PrivateRoute";

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
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<ShearedLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/medicine-store" element={<MedicineStorePage/>}/>
        <Route path="/medicine" element={<MedicinePage/>}/>

        <Route path="/register" element={<RestrictedRoute component={<RegisterPage/>} redirectTo={"/login"}/>}/>
        <Route path="/login" element={<RestrictedRoute component={<LoginPage/>} redirectTo={"/product"}/>}/>

        
        <Route path="/product/:id" element={<ProductPage/>}>
        {/* <Route path="/product" element={<PrivateRoute component={<ProductPage/>} redirectTo={"/login"}/>}> */}
          <Route index element={<Description/>}/>
          <Route path="description" element={<Description/>}/>
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="/cart" element={<PrivateRoute component={<CartPage/>} redirectTo={"/login"}/>}/>
      </Route>
    </Routes>
    </Suspense>
  )
}
