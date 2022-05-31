import { useRouter } from "next/router";
import React from "react";
import ButtonComponent from "./ButtonComponent";

function Footer() {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/assessment");
  };

  return (
    <div className="bg-white p-8 shadow-xl fixed  bottom-0 w-full">
      <div className="lg:w-[95%] xl:w-[80%] mx-auto grid sm:grid-cols-2 gap-4 sm:gap-10">
        <div className="text-center sm:text-left">
          <p className="text-primaryText text-lg font-bold">
            Start saving more than money
          </p>
          <p className="my-4 lg:max-w-[80%]">
            In just 5 minutes, you can make a huge impact on Australia&#39;s
            transition to 100% renewables.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row mx-auto w-[60%] sm:w-full xl:w-[90%]">
          <ButtonComponent text="Start assessment" action={handleClick} />
          <ButtonComponent type="border" text="Start assessment" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
