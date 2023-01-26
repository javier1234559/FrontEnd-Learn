import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => (
  <div className="flex flex-col justify-center items-center bg-primary w-[100%] h-[100%] rounded-full cursor-pointer">
    <div className="text-gradient font-poppins font-medium text-[18px] leading-[23.4px]">
      <p className="inline-block " >Get</p>
      <img src={arrowUp} alt="arrow-up" className="inline-block "/>
    </div>
    <div className="text-gradient font-poppins font-medium text-[18px] leading-[23.4px]">
      <p>Started</p>
    </div>
  </div>
);

export default GetStarted;
