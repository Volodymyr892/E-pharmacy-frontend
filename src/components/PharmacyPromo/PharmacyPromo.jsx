import css from "./PharmacyPromo.module.css"
import sectionAdd from "../../assets/Image.svg"
import{ useEffect, useRef } from "react";
import { BsLightningCharge } from "react-icons/bs";

const features = [
  { icon: <BsLightningCharge />, text: "Take user orders online" },
  { icon: <BsLightningCharge />, text: "Create your shop profile" },
  { icon: <BsLightningCharge />, text: "Manage your store" },
  { icon: <BsLightningCharge />, text: "Get more orders" },
  { icon: <BsLightningCharge />, text: "Storage shed" },
];

export default function PharmacyPromo() {
    const scrollRef = useRef(null);

    useEffect(() => {
      const scrollContainer = scrollRef.current;
      let scrollAmount = 0;
      let isScrolling = true;
  
      const scrollStep = () => {
        if (!isScrolling) return;
        if (scrollContainer) {
          scrollAmount += 1; // швидкість прокрутки
          scrollContainer.scrollLeft = scrollAmount;
  
          if (scrollAmount >= scrollContainer.scrollWidth / 2) {
            scrollAmount = 0; // Повертаємось на початок для безперервного ефекту
            scrollContainer.scrollLeft = 0;
          }
        }
      };
  
      const interval = setInterval(scrollStep, 30); // Чим менше число, тим швидше скрол
  
      return () => clearInterval(interval);
    }, []);
    return(
    <section className={css.container}>
        <div className={css.containerAdd}>
            <h2 className={css.title}>Add the medicines you need online now</h2>
            <p className={css.description}>Enjoy the convenience of having your prescriptions filled from home by connecting with your community pharmacy through our online platform.</p>
            <button className={css.button}>Buy medicine</button>
            <img className={css.img} src={sectionAdd} alt="" />
        </div>
        <div className={css.featuresWrapper} ref={scrollRef}>
      <div className={css.featuresContainer}>
        {/* Дублюємо список для безперервного скролу */}
        {[...features, ...features].map((feature, index) => (
          <div key={index} className={css.featureItem}>
            {feature.icon}
            <p className={css.text}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
    )
}