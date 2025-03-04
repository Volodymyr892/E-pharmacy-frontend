import css from "./PromoBannersItem.module.css"
export default function PromoBannersItem() {
    return(
        <div className={css.container}>
           <ul className={css.list}>
            <li className={css.item}>
                <div className={css.numberCont}>
                    <p className={css.number}>1</p>
                </div>
                <h3 className={css.titleSale}>Huge Sale</h3>
            </li>
            <li className={css.itemProc}>
                <p className={css.procent}>70%</p>
                <p className={css.show}>Shop now</p>
            </li>
           </ul>
        </div>
    )
}