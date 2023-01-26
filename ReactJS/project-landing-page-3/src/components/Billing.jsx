import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] "/>
        <div className="absolute w-[50%] h-[50%] white__gradient z-[3] top-0 -left-1/2 rounded-full "></div>
        <div className="absolute w-[50%] h-[50%] pink__gradient z-[0] bottom-0 -left-1/2 rounded-full "></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] `}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex mt-8">
          <img src={apple} alt="apple" className="mr-4"/>
          <img src={google} alt="google" />
        </div>
      </div>
    </section>
  );
};

export default Billing;
