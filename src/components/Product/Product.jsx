import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import css from "./Product.module.css"

export default function Product() {
    const [count, setCount] = useState(1);

    const increase = () => setCount(count + 1);
  const decrease = () => setCount((prev) => Math.max(prev - 1, 0));
    return(
        <div>
            <div className={css.containerFoto}>
            </div>
            <div className={css.containerAdd}>
                <ul className={css.list}>
                    <li className={css.item}>
                        <h3 className={css.title}>Moringa</h3>
                        <p className={css.description}>Brand: Roofing (Asphalt)</p>
                    </li>
                    <li className={css.item}>
                        <p className={css.price}>৳470</p>
                    </li>
                </ul>
            <div className={css.containerButton}>
                <div  className={css.containerButtonAdd}>
                    <button className={css.buttonPlus} onClick={increase}>
                      <AiOutlinePlus  className={css.icon}/>
                    </button>
                    <span>{count}</span>
                    <button className={css.buttonPlus} onClick={decrease} disabled={count === 0}>
                      <AiOutlineMinus  className={css.icon}/>
                    </button>
                </div>
                <button className={css.buttonAdd}>
                    Add to cart
                </button>
            </div>
            </div>
        </div>
    )
}