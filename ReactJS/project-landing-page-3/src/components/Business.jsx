import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ index, icon, content, title }) => (
    <div className="flex-1 flex flex-row justify-center items-center p-6 rounded-[20px] feature-card cursor-pointer  ">
      <div className="w-[64px] h-[64px] flex justify-center items-center bg-dimBlue rounded-full shrink-0">
        <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain "/>
      </div>
      <div className="ml-4 ">
        <h4 className="text-white font-poppins font-semibold" >{title}</h4>
        <p className="text-dimWhite font-poppins " >{content}</p>
      </div>
    </div>
);

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex flex-start items-left flex-col ">
        <h1 className="text-white font-poppins font-semibold w-full text-[40px] xs:text-[48px] leading-[66px] xs:leading-[76px] ">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-dimWhite font-poppins font-normal mt-5 max-w-[470px] leading-[30.8px] text-[18px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={`mt-10 self-start`}/>
      </div>
      <div className="flex-1 flex justify-center items-center flex-col md:ml-10 mt-10 md:mt-0">
        {features.map((item, index) => (
          <FeatureCard key={item.id} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
