import style from "../style";
import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className={`${style.paddingY} flex text-center justify-between flex-col md:flex-row`}>
      <div className="flex flex-col px-6 sm:px-16 flex-1 ">
        <div
          className={` flex self-start flex-row text-dimWhite text-[20px] bg-discount-gradient py-[6px] px-4 rounded-[10px]`}
        >
          <img
            src={discount}
            alt="discount"
            className="w-[30px] h-[30px] object-contain mr-2"
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] ml-2">
            <span className="text-white">20% </span>Discount For {""}
            <span className="text-white">1 Month </span>Account
          </p>
        </div>
        <div className="flex text-left w-full items-center ">
          <h1 className="flex-1 font-poppins ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className=" w-[140px] h-[140px] flex justify-center items-center bg-blue-gradient p-[2px] rounded-full ">
            <GetStarted/>
          </div>
        </div>
        <h1 className="text-left w-full font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">Payment Method</h1>
        <p className=" font-poppins self-start mt-5 max-w-[470px] text-left  text-white text-[18px] leading-[30.8px] ">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
      </div>
      <div className="flex justify-center items-center flex-1 relative " >
        <img src={robot} alt="robot arm" className="w-[100%] h-[100%]  relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[1] w-[80%] h-[80%] top-0 white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[35%] right-0 bottom-20 blue__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
