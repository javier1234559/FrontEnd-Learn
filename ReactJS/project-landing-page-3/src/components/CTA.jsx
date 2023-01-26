import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
   <section className={`${styles.flexCenter}  ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className="flex-1 ">
        <h2 className={`${styles.heading2}`}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <Button/>
   </section>
  )
}

export default CTA