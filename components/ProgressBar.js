import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const ProgressBar = ({ step, stepNo }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    router.push("/");
  };
  return (
    <div className="flex flex-col items-start mt-6 lg:mt-14">
      <div className="w-10 h-10 lg:hidden cursor-pointer">
        <Image
          src="/images/origin-logo.svg"
          alt="logo"
          height={107}
          width={87}
          onClick={handleClick}
        />
      </div>
      <div className="flex w-full gap-16 mt-12">
        <div className="flex items-center grow mb-6 justify-between md:grow-0 md:w-[50%]">
          <p className="text-sm lg:text-[20px]">Step {stepNo} of 2</p>
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 hidden lg:inline ml-auto cursor-pointer">
          <Image
            src="/images/origin-logo.svg"
            alt="logo"
            height={107}
            width={87}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[8px] flex flex-row justify-between gap-2 md:gap-2">
        <div className="w-full h-[8px] relative bg-[#F1F1F1]">
          <div
            className={`bg-accentColor h-full transition-all ease-linear duration-200 float-right ${
              stepNo === 1 ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
        <div className="w-full h-[8px] relative bg-[#F1F1F1]">
          <div
            className={`bg-accentColor h-full transition-all ease-linear duration-200 ${
              stepNo === 2 ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
