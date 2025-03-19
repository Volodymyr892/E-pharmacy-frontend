import css from "./CartForm.module.css"
export default function CartForm() {
    return(
        <form className={css.form}>
            <h3 className={css.title}>Enter shipping info </h3>
            <p className={css.description}>Enter your delivery address where you get the product. You can also send any other location where you send the products.</p>

            <div className={css.containerInput}>
                <div>
                    <label className={css.label}>Name</label>
                    <input
                    className={css.input} 
                    type="text" 
                    placeholder="Enter text"
                    />
                </div>
                <div>
                    <label className={css.label}>Email</label>
                    <input
                    className={css.input} 
                    type="email" 
                    placeholder="Enter text"
                    />
                </div>
                <div>
                    <label className={css.label}>Phone</label>
                    <input
                    className={css.input} 
                    type="number" 
                    placeholder="Enter text"
                    />
                </div>
                <div>
                    <label className={css.label}>Address</label>
                    <input
                    className={css.input} 
                    type="text" 
                    placeholder="Enter text"
                    />
                </div>
            </div>

            <hr className={css.line}/>

            <h3 className={css.title}>Payment method</h3>
            <p className={css.description}>You can pay us in a multiple way in our payment gateway system.</p>
            
            <div className={css.containerLabel}>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                    />
                    Cash On Delivery
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                    />
                    Bank
                </label>
            </div>

            <hr className={css.line}/>

            <h3 className={css.title}>Order details </h3>
            <p className={css.description}>Shipping and additionnal costs are calculated based on values you have entered.</p>

            <div className={css.totalContainer}>
                <p  className={css.totalText}>Total:</p>
                <p className={css.totalText}>৳ 122.00</p>
            </div>
            <button className={css.button}>Place order</button>
        </form>
    )
}