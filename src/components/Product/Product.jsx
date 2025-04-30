import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import css from "./Product.module.css"
import { useParams } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux";
import { productsId } from "../../redux/products/operation";
import { productSelectors } from "../../redux/products/selectors";

export default function Product() {
    const product = useSelector(productSelectors);
    const { id } = useParams();
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(productsId({ id }));
    }, [dispatch, id]);
    const [count, setCount] = useState(1);

    const increase = () => setCount(count + 1);
    const decrease = () => setCount((prev) => Math.max(prev - 1, 0));
    return(
        <div>
            <img className={css.img} src={product.photo} alt="" />
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