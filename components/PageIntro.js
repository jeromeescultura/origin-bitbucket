import Image from "next/image";
import { useState, useEffect } from "react";

const PageIntro = ({ assessIntro, activeState, stepNo }) => {
  const [pageIntro, setPageIntro] = useState(assessIntro[stepNo - 1]);
  useEffect(() => {
    setPageIntro(assessIntro[stepNo - 1]);
  }, [stepNo]);

  return (
    <div className="relative w-full h-[400px] flex items-center mt-0 lg:mt-24">
      <div className="page-intro-container flex justify-between w-full  absolute">
        <div className="lg:w-[45%]">
          <h1 className="font-bold text-4xl lg:text-[56px] lg:leading-[64px] text-[#FA4616] mb-[32px] w-[231px] sm:w-[242px] md:w-full">
            {pageIntro.header}
          </h1>
          <p className="text-base lg:text-xl leading-[24px]">
            {pageIntro.desc}
          </p>
        </div>
        <div className="plant-container h-24 w-[60%] lg:w-auto lg:h-auto flex justify-end">
          <div className="w-24 h-24 lg:hidden ">
            <Image
              src="/icons/plant.svg"
              width={500}
              height={500}
              alt="plant"
              objectFit="contain"
            />
          </div>
          <div
            className={`hidden lg:block pointer-events-none ${
              stepNo === 1 && "w-64 h-64 lg:-mt-36"
            }  ${stepNo > 1 && "lg:-mt-44"}`}
          >
            <Image
              src={pageIntro.plant}
              width={500}
              height={500}
              alt="plant"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageIntro;

