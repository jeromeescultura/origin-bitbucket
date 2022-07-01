import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PageIntro = () => {
  const router = useRouter();
  const location = router.pathname;
  const assessIntro = [
    {
      header: "Sustainability & your business",
      desc: "This initial set of questions is designed to understand what sort of actions your business has taken so far - or are looking to explore further.",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
    },
  ];
  const [pageIntro, setPageIntro] = useState(
    assessIntro[location === "/assessment_firststep" ? 0 : 1]
  );
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setPageIntro(assessIntro[location === "/assessment_firststep" ? 0 : 1]);
    setAnimate(!animate);
    setTimeout(() => setAnimate(false), 200);
  }, []);

  return (
    <div className="page-intro-container flex justify-between w-full my-16 lg:my-24">
      <div
        className={`md:w-[70%] lg:w-[60%] ${
          animate ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
        } transition ease-in-out`}
      >
        <h1 className="font-bold text-4xl lg:text-[56px] lg:leading-[64px] text-[#FA4616] mb-6 lg:mb-12">
          {pageIntro.header}
        </h1>
        <p className="text-base lg:text-xl leading-[24px]">{pageIntro.desc}</p>
      </div>
    </div>
  );
};

export default PageIntro;
