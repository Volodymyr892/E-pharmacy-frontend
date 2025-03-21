import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import css from "./CartItem.module.css"
export default function CartItem() {
     const [count, setCount] = useState(1);
    
        const increase = () => setCount(count + 1);
      const decrease = () => setCount((prev) => Math.max(prev - 1, 0));
    return(
        <div className={css.container}>
            <div className={css.imgContainer}>

            </div>
            <div>
                 <div >
                    <h3 className={css.title}>Vitamin C Medicine</h3>
                    <p className={css.description}>Antioxidant Aid for Heart Health</p>
                    <p className={css.price}>৳ 90.00</p>


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
                        <button className={css.buttonDelete}>
                        Remove
                        </button>
                   </div>
                </div>
            </div>
        </div>
    )
}