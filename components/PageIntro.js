import Image from "next/image";
import { useState, useEffect } from "react";

const PageIntro = ({ assessIntro, stepNo }) => {
  const [pageIntro, setPageIntro] = useState(assessIntro[stepNo - 1]);
  useEffect(() => {
    if (stepNo < 3) {
      setPageIntro(assessIntro[stepNo - 1]);
    }
  }, [stepNo]);

  return (
    <div className="page-intro-container flex justify-between w-full my-16 lg:my-24">
      <div className="md:w-[70%] lg:w-[60%]">
        <h1 className="font-bold text-4xl lg:text-[56px] lg:leading-[64px] text-[#FA4616] mb-6 lg:mb-12">
          {pageIntro.header}
        </h1>
        <p className="text-base lg:text-xl leading-[24px]">{pageIntro.desc}</p>
      </div>
    </div>
  );
};

export default PageIntro;
