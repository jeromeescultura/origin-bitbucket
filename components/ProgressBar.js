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
    <div className="flex flex-col items-start mt-6">
      <div className="w-10 h-10 lg:hidden cursor-pointer">
        <Image
          src="/images/origin-logo.svg"
          alt="logo"
          height={107}
          width={87}
          onClick={handleClick}
        />
      </div>
      <div className="flex w-full gap-16 mt-12 lg:mt-0 mb-4 lg:mb-0">
        <div className="flex items-center grow justify-between md:grow-0 md:w-[50%]">
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
      <div className="w-20 md:w-28  flex flex-row justify-between gap-2 md:gap-2 lg:-mt-3">
        <div
          className={`first-step w-full h-1 ${
            stepNo === 2 ? "bg-[#F1F1F1]" : "bg-accentColor"
          }`}
        ></div>
        <div className="second-step w-full h-1 relative bg-[#F1F1F1]">
          <div
            className={`second-step-inner bg-accentColor h-full transition-all ease-linear duration-200 ${step.secondStep}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
