import css from "./Description.module.css"
export default function Description() {
    return(
        <div className={css.container}> 
            <p className={css.p}>Although it's typically considered safe, excessive consumption can lead to side effects. Therefore, it's recommended to consult a healthcare professional before using moringa, especially if you're pregnant, nursing, or taking other medications. This balanced approach allows for the benefits of moringa while recognizing the importance of proper usage and caution.</p>
            <p className={css.p}>Medicinal Uses: Antioxidant Properties:<span className={css.span}> Moringa is packed with antioxidants that help fight oxidative stress and inflammation in the body.</span></p>
            <p className={css.p}>Anti-Diabetic Effects:<span className={css.span}> Some studies have shown that moringa leaves might lower blood sugar levels, making it a valuable supplement for managing diabetes.</span></p>
            <p className={css.p}>Heart Health:<span className={css.span}> The plant has been linked to reduced cholesterol levels, which is vital for heart health.</span></p>
            <p className={css.p}>Anti-Cancer Properties: <span className={css.span}>Certain compounds in moringa, such as niazimicin, have been found to suppress the growth of cancer cells in laboratory studies.</span></p>
            <p className={css.p}>Immune Support:<span className={css.span}> With its high vitamin C content, moringa can boost the immune system.</span></p>
            <p className={css.p}>Digestive Aid: <span className={css.span}>Moringa can help in treating digestive disorders due to its anti-inflammatory properties.</span></p>
        </div>
    )
}