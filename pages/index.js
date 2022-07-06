import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductContainer from "../containers/ProductContainer";
import FullWidth from "../containers/FullWidth";
import ContentContainer from "../containers/ContentContainer";
import HeroComponent from "../components/HeroComponent";
import PerksTab from "../containers/PerksTab";
import VerticalTabs from "../components/VerticalTabs";
import CaseStudyRow from "../components/CaseStudyRow";
import Head from "next/head";
import ProductModal from "../components/ProductModal";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);
  const showref = useRef();
  const hideref = useRef();

  useEffect(() => {
    window.localStorage.clear();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShowFooter(true);
      }
    });

    if (showref.current) {
      observer.observe(showref.current);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setShowFooter(false);
      }
    });

    if (hideref.current) {
      observer.observe(hideref.current);
    }
  }, []);

  const exclusiveAccess = [
    {
      id: 1,
      icon: "/icons/personalized.svg",
      text: "Personalized support",
      desc: "You can get guidance from one of our accredited sustainability support managers.",
    },
    {
      id: 2,
      icon: "/icons/marketing.svg",
      text: "Marketing toolkit",
      desc: "Communicate the sustainable impact you’re making to your customers and stakeholders.",
    },
    {
      id: 3,
      icon: "/icons/leaf.svg",
      text: "Green accreditation",
      desc: "Get rewarded as a result of the environmental and sustainability initiatives undertaken.",
    },
    {
      id: 4,
      icon: "/icons/discount.svg",
      text: "Discounts",
      desc: "Get rewarded as a result of the environmental and sustainability initiatives undertaken.",
    },
  ];
  return (
    <div>
      <Head>
        <title>Origin Shift</title>
        <meta
          property="og:title"
          content="Origin Shift Assessment tool"
          key="title"
        />
      </Head>
      <NavBar />
      <div className="w-full bg-white overflow-auto h-full">
        <HeroComponent />
        <ContentContainer>
          <div className="text-center font-light md:w-[80vw] lg:w-full mx-auto">
            {/* <h2>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui at
              nisi illum incidunt asperiores pariatur soluta, laudantium, amet
              itaque tenetur earum! Totam natus, itaque a doloribus ea vel
              veritatis corporis
            </h2> */}
            <p className="my-6 lg:my-8 sm:leading-loose">
              At Origin, we want to help businesses to support cleaner energy
              solutions - we will work with you to see if this is possible for
              your business.
            </p>
            {/* <p className="text-secondaryBG font-bold">Learn more</p> */}
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-32 mx-auto pt-12 pb-[88px] sm:pb-16">
            <div className="text-center lg:text-left">
              <h2 className="text-primaryText font-bold">
                Just three simple steps towards supporting cleaner energy
                solutions
              </h2>
              <p className="mt-6 mb-8 lg:w-[80%]">
                We&apos;ve taken a new approach to getting energy right for
                communities and the planet – tailored to your assessment
                responses.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-6 ">
                <h2 className="text-primaryText font-bold">1</h2>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#00B9D7]  text-white p-1 rounded-md w-[90px] text-center text-xs">
                    in 5 minutes
                  </div>
                  <p className="font-bold ">Complete assessment</p>
                  <p className="font-light">
                    First we need to understand your current energy needs,
                    motivations and energy behaviours.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 ">
                <h2 className="text-primaryText font-bold">2</h2>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">
                    Progress or take your first actions to supporting cleaner
                    energy solutions
                  </p>
                  <p className="font-light">
                    Select the actions you&apos;re interested in doing at the
                    end of your assessment, and a Business Club Specialist will
                    reach out to help you find the best way forward for your
                    business. Up to this point - its free. No payment, no
                    commitment.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <h2 className="text-primaryText font-bold">3</h2>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">
                    Understand how your support is making a difference
                  </p>
                  <p className="font-light" ref={hideref}>
                    We&apos;ll provide updates on how your support has made a
                    difference through your Business Club insights. This is so
                    you can understand the good change your business has made
                    and further actions to continue your sustainability journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
        <div className="bg-primaryBG pb-80 sm:pb-56 md:pb-48 ">
          <div className="bg-landing-bg bg-no-repeat bg-contain h-full w-full">
            <ContentContainer>
              <div>
                <h2 className="text-center text-primaryText font-bold">
                  Every little bit counts
                </h2>
                <p className="text-center text-sm font-light mt-6">
                  There&apos;s no pressure on your business to take on a full
                  scale clean energy transition plan. We help you identify the
                  actions for your business to support cleaner electricity
                  solutions, based on our understanding of how much your
                  business has capacity to do.
                </p>
                <div className="flex justify-center mt-6">
                  <div className="flex items-start max-w-[254px] sm:max-w-full cursor-pointer">
                    <div className="mr-1">
                      <Image
                        src="/icons/pdf.svg"
                        width={20}
                        height={20}
                        alt="document-icon"
                      />
                    </div>
                    <p className="text-sm font-medium text-primaryText">
                      Start with our Energy Efficiency Checklist
                    </p>
                  </div>
                </div>
              </div>
            </ContentContainer>
            <FullWidth>
              <ProductContainer />
            </FullWidth>
            <ContentContainer>
              <div className="md:w-[80vw] lg:w-full mx-auto">
                <h2 className="text-center font-bold text-primaryText w-[300px] lg:w-[500px] xl:w-[600px] mx-auto" id='business-club'>
                  Get access to the Business Club
                  <br />
                  <span className="font-Gorditalight">
                    for guidance on supporting cleaner energy solutions for your
                    business
                  </span>
                </h2>
              </div>
            </ContentContainer>
            <ContentContainer>
              <div className="pt-4 pb-4" ref={showref}>
                <VerticalTabs />
              </div>
              {/* <div className="flex md:justify-center md:flex-wrap lg:flex overflow-y-hidden overflow-x-scroll scrollbar-hide gap-4 mt-8 lg:mt-16 px-4 sm:px-0">
                {exclusiveAccess.map((item) => (
                  <PerksTab
                    key={item.id}
                    icon={item.icon}
                    text={item.text}
                  desc={item.desc}
                  />
                ))}
              </div> */}
            </ContentContainer>
            {/* <CaseStudyRow /> */}
          </div>
        </div>
      </div>
      <div />
      {showFooter && <Footer />}
    </div>
  );
}
