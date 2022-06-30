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
import Head from "next/head";

export default function Home() {
  const [showFooter, setShowFooter] = useState(false);
  const myref = useRef();

  useEffect(() => {
    window.localStorage.clear();
  },[]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setShowFooter(entry.isIntersecting);
    });
    observer.observe(myref.current);
  },[]);

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
            <h2>
              Australia&#39;s 2.4 million small & medium businesses are
              responsible for over 1 quarter of the nation&#39;s carbon
              emissions annually. We want to work together to change that -
              without impacting your operational cost.
            </h2>
            <p className="my-6 lg:my-8 sm:leading-loose">
              At Origin, we believe you shouldn&#39;t have to choose between
              maintaining funds to keep your business running now, and choosing
              cleaner, low carbon energy solutions to power it for the future.
            </p>
            <p className="text-secondaryBG font-bold">Learn more</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-32 mx-auto pt-12 pb-[88px] sm:pb-16">
            <div className="text-center lg:text-left">
              <h2 className="text-primaryText font-bold">
                Just three simple steps towards supporting cleaner energy
                solutions
              </h2>
              <p className="mt-6 mb-8 lg:w-[80%]">
                We’ve taken a new approach to getting energy right for
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
                    First we need to understand your current needs, motivations
                    and energy behaviours.
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
                    Select the actions you’re interested in doing at the end of
                    your assessment, and an energy specialist will reach out to
                    help you find the best way forward for your business. Up to
                    this point - its free. No payment, no commitment.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <h2 className="text-primaryText font-bold">3</h2>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">
                    Understand how your support is making a difference
                  </p>
                  <p className="font-light">
                    We’ll provide insights about how your support has made a
                    difference through your Towards-Cleaner newsletter, so you
                    can share what has been done with team members & clients.
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
                  There’s no pressure on your business to take on a full scale
                  clean energy transition plan. We help you identify the best
                  actions for your business to support cleaner energy solutions,
                  based on our understanding of how much your business has
                  capacity to do.
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
                      Start with our Energy efficiency checklist
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
                <h2 className="text-center font-bold text-primaryText w-[300px] lg:w-[500px] xl:w-[600px] mx-auto">
                  Get access to the Good Change club,
                  <br />
                  <span className="font-Gorditalight">
                    which supports your shift towards cleaner energy in 3 ways
                  </span>
                </h2>
              </div>
            </ContentContainer>
            <ContentContainer>
              <div className="pt-4 pb-4">
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
            <ContentContainer>
              <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-32 mx-auto mt-16">
                <div className="text-center lg:text-left">
                  <h2 className="text-primaryText font-bold lg:w-[380px] xl:w-[330px]">
                    Together we are driving the Australia&#39;s transition to
                    net-zero.
                  </h2>
                  <p className="mt-6 mb-8 lg:w-[415px] xl:w-[380px]">
                    Over 1,200 businesses of all shapes and sizes, have used the
                    Origin assessment tool to transition to cleaner energy
                    solutions, at a price point that suits them.
                  </p>
                  <p className="text-secondaryBG font-bold">
                    Read the success stories
                  </p>
                </div>
                <div
                  className="bg-white w-[327px] md:w-full rounded-2xl px-5 py-8 flex flex-col gap-6 mx-auto"
                  ref={myref}
                >
                  <div className="w-full h-[200px] md:h-[160px] lg:h-[230px]">
                    <Image
                      src="/images/betty.png"
                      width={800}
                      height={400}
                      objectFit="cover"
                      alt="betty"
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-[112px] text-[#E3E3E3]">“</p>
                  <p className="text-base">
                    At no extra cost to me and without making any changes to my
                    cafe, my carbon emissions were offset by Origin.
                  </p>
                  <div>
                    <p>Betty</p>
                    <p>Black Kettle Cafe</p>
                  </div>
                </div>
              </div>
            </ContentContainer>
          </div>
        </div>
      </div>
      <div />
      {showFooter && <Footer />}
    </div>
  );
}
