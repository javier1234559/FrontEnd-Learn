import { feedback } from "../constants";
import styles, { layout } from "../style";
import { quotes } from "../assets";

const FeatbackCard = ({ content, name, title, img }) => (
  <div className="flex flex-col justify-center  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card p-8 self-stretch rounded-[20px] ">
    <img
      src={quotes}
      className="w-[42px] h-[27px] object-contain mb-10"
      alt="double quotes "
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white mb-10">
      {content}
    </p>
    <div className="flex flex-row ">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="ml-4 ">
        <h2 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h2>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className={`${styles.flexCenter} justify-between items-center w-full flex-col md:flex-row`}>
        <h2 className={`${styles.heading2}`}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full">
          <p className={`${styles.paragraph} max-w-[450px] `}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start items-center justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item) => (
          <FeatbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
