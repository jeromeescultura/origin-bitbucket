import Image from "next/image";
import { useState, useEffect } from "react";

const PageIntro = ({ assessIntro, stepNo }) => {
  const [pageIntro, setPageIntro] = useState(assessIntro[stepNo - 1]);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setPageIntro(assessIntro[stepNo - 1]);
    setAnimate(!animate);
    setTimeout(() => setAnimate(false), 200);
  }, [stepNo]);

  return (
    <div className="relative w-full h-[400px] flex items-center mt-0 lg:mt-24">
      <div className="page-intro-container flex justify-between w-full  absolute">
        <div
          className={`lg:w-[45%] ${
            animate ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
          } transition ease-in-out `}
        >
          <h1 className="font-bold text-4xl lg:text-[56px] lg:leading-[64px] text-[#FA4616] mb-[32px] w-[231px] sm:w-[242px] md:w-full">
            {pageIntro.header}
          </h1>
          <p className="text-base lg:text-xl leading-[24px]">
            {pageIntro.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageIntro;
