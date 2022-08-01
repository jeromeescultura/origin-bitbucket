import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NavBar from "./NavBar";

const ProgressBar = () => {
  const router = useRouter();
  const source = router.query.src;
  const version = router.query.v;
  const location = router.pathname;
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!animate);
    setTimeout(() => setAnimate(false), 500);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.localStorage.clear();
    router.push(
      `/${source !== "" ? `?src=${source}&` : ""}${
        version !== "" ? `v=${version}` : ""
      }`
    );
  };
  return (
    <div className="flex flex-col items-start mt-6">
      <p className="text-sm lg:text-[20px] mb-4">
        Step {location === "/assessment_firststep" ? 1 : 2} of 2
      </p>
      <div className="w-20 md:w-28  flex flex-row justify-between gap-2 md:gap-2">
        <div className="w-full h-[5px] relative bg-[#F1F1F1]">
          <div
            className={`bg-accentColor h-full transition-all ease-linear duration-500 ${
              location === "/assessment_firststep"
                ? animate
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            } `}
          ></div>
        </div>
        <div className="w-full h-[5px] relative bg-[#F1F1F1]">
          <div
            className={`bg-accentColor h-full transition-all ease-linear duration-500 ${
              location === "/assessment_secondstep"
                ? animate
                  ? "opacity-0"
                  : "opacity-100"
                : "opacity-0"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
