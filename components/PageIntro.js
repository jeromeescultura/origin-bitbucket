import Image from "next/image";

const PageIntro = ({ assessIntro, activeState }) => {
  return (
    <div className="relative w-full h-[400px] flex items-center mt-0 lg:mt-24">
      {assessIntro.map((val, index) => (
        <div
          className={`page-intro-container flex justify-between w-full absolute ${
            activeState === index ? "opacity-100" : "opacity-0"
          }`}
          key={index}
        >
          <div className="lg:w-[45%]">
            <h1 className="font-bold text-4xl lg:text-[56px] lg:leading-[64px] text-[#FA4616] mb-[32px] w-[231px] sm:w-[242px] md:w-full">
              {val.header}
            </h1>
            <p className="text-[16px] leading-[24px]">{val.desc}</p>
          </div>
          <div className="plant-container h-24 w-[60%] lg:w-auto lg:h-auto flex justify-end">
            <div className="w-24 h-24 lg:hidden -mt-10">
              <Image
                src="/icons/plant.svg"
                width={500}
                height={500}
                alt="plant"
                objectFit="contain"
              />
            </div>
            <div className={`hidden lg:block w-64 h-64 lg:-mt-20`}>
              <Image
                src={val.plant}
                width={500}
                height={500}
                alt="plant"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageIntro;
