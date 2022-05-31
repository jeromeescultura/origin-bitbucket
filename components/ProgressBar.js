import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { useRouter } from "next/router";

const ProgressBar = ({
  step,
  stepNo,
  stepOneAns,
  stepTwoAns,
  stepThreeAns,
}) => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div className="flex flex-col items-start mt-6 lg:mt-14">
      <div className="w-10 h-10 lg:hidden cursor-pointer">
        <Image
          src={logo}
          alt="logo"
          height={107}
          width={87}
          onClick={handleClick}
        />
      </div>
      <div className="flex w-full gap-16 mt-12">
        <div className="flex items-center grow mb-6 justify-between md:grow-0 md:w-[50%]">
          <p className="text-sm lg:text-[20px]">Step {stepNo} of 3</p>
          <button
            onClick={() => {
              alert(
                `Step One Answers:\nQuestion 1: choice: ${stepOneAns.QOne.choice}, goals: ${stepOneAns.QOne.goals}\nQuestion 2: enSource: ${stepOneAns.QTwo.enSource}, genOp: ${stepOneAns.QTwo.genOp}\nQuestion 3: ${stepOneAns.QThree}`
              );
              alert(
                `Step Two Answers:\nQuestion 1: industry: ${stepTwoAns.QOne.industry}, sites: ${stepTwoAns.QOne.sites}\nQuestion 2: n/a\nQuestion 3: ${stepTwoAns.QThree}\nQuestion 4: ${stepTwoAns.QFour}`
              );
              alert(
                `Step Three Answers:\nQuestion 1: ${stepThreeAns.QOne}\nQuestion 2: ${stepThreeAns.QTwo}\nQuestion 3: ${stepThreeAns.QThree}`
              );
            }}
            className="lg:border lg:border-[#505050] text-sm text-primaryText active:scale-95 lg:text-black lg:text-base rounded-full py-2 lg:px-8 lg:focus:bg-black lg:focus:text-white transition-all ease-linear duration-100 flex"
          >
            <span className="flex items-center lg:hidden mr-2">
              <Image
                src="/icons/save_icon.svg"
                width={15}
                height={15}
                alt="save_icon"
              />
            </span>
            <p>Save my progress</p>
          </button>
        </div>
        <div className="w-10 h-10 md:w-20 md:h-20 hidden lg:inline ml-auto cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            height={107}
            width={87}
            onClick={handleClick}
          />
        </div>
      </div>
      <div className="w-full md:w-[50%] h-[8px] flex flex-row justify-between gap-2 md:gap-2">
        <div className="first-step w-full h-[8px] bg-accentColor"></div>
        <div className="second-step w-full h-[8px] relative bg-[#F1F1F1]">
          <div
            className={`second-step-inner bg-accentColor h-full transition-all ease-linear duration-200 ${step.secondStep}`}
          ></div>
        </div>
        <div className="third-step w-full h-[8px] bg-[#F1F1F1]">
          <div
            className={`third-step-inner bg-accentColor h-full transition-all ease-linear duration-200 ${step.thirdStep}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
