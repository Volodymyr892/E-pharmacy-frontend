import CartForm from "../../components/CartForm/CartForm";
import CartList from "../../components/CartList/CartList";
import css from "./CartPage.module.css"

export default function CartPage() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Cart</h1>
      <CartForm/>
      <CartList/>
    </div>
  )
}
