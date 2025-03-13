import Product from "../../components/Product/Product";
import ProductTabs from "../../components/ProductTabs/ProductTabs";
import css from "./ProductPage.module.css"

export default function ProductPage() {
  return (
    <div className={css.container}>
      <Product/>
      <ProductTabs/>
    </div>
  )
}