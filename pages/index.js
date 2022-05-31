import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { BottomScrollListener } from "react-bottom-scroll-listener";

import ButtonComponent from "../components/ButtonComponent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductContainer from "../containers/ProductContainer";
import FullWidth from "../containers/FullWidth";
import ContentContainer from "../containers/ContentContainer";
import HeroComponent from "../components/HeroComponent";
import ExclusiveCard from "../containers/ExclusiveCard";

export default function Home() {
  const [show, setShow] = useState(false);

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
      icon: "/icons/flame.svg",
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

  const test = () => {
    setShow(true);
  };

  return (
    <div>
      <NavBar />
      <div className="w-full bg-white overflow-auto h-full">
        <HeroComponent />
        <ContentContainer>
          <div className="text-center font-light md:w-[80vw] lg:w-full mx-auto">
            <h2>
              Australia&#39;s 2.4 million small-medium enterprises are
              responsible for over 1 quarter of the nation&#39;s carbon
              emissions annually.
            </h2>
            <p className="my-6 lg:my-8 sm:leading-loose">
              At Origin, we believe you shouldn&#39;t have to choose between
              maintaining funds to keep your business running now, and choosing
              cleaner, low carbon energy solutions to power it for the future.
            </p>
            <p className="text-secondaryBG font-bold">Learn more</p>
          </div>

          <div className="flex flex-col lg:flex-row lg:gap-32 mx-auto pt-12 pb-[88px] sm:pb-16 sm:pt-0">
            <div className="text-center lg:text-left">
              <h2 className="text-primaryText font-bold">
                Three simple steps to cleaner, and cost-effective energy
                solutions
              </h2>
              <p className="mt-6 mb-8 lg:w-[80%]">
                So we&#39;ve taken a new approach to getting energy right for
                communities and the planet - and it&#39;s 100% data driven,
                tailored to you.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex gap-6 ">
                <h2 className="text-primaryText font-bold">1</h2>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#00B9D7] text-white p-1 rounded-md w-[90px] text-xs">
                    in 5 minutes
                  </div>
                  <p className="font-bold">Complete assessment</p>
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
                    Start or accelerate your sustainability journey
                  </p>
                  <p className="font-light">
                    Instantly we&#39;ll recommend the steps your business can
                    take to transition to cleaner energy solutions, at a price
                    point that suits you.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <h2 className="text-primaryText font-bold">3</h2>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Measure your impact</p>
                  <p className="font-light">
                    Understand the impact your business is making, and how you
                    can further reduce it&#39;s carbon footprint with Origin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ContentContainer>
        <div className="bg-primaryBG">
          <div className="bg-landing-bg bg-no-repeat bg-contain h-full w-full">
            <ContentContainer>
              <div>
                <h2 className="text-center font-light text-primaryText ">
                  You can pledge to do a{" "}
                  <span className="font-bold">little</span> or a{" "}
                  <span className="font-bold">lot</span>
                </h2>
                <p className="text-center font-light mt-6">
                  We dont want to add unnecessary pressure on your business to
                  take on a full scale clean energy transition plan. We&#39;ve
                  got energy for every need to help you transition based on how
                  much you&#39;re ready to take on.
                </p>
              </div>
            </ContentContainer>
            <FullWidth>
              <ProductContainer />
            </FullWidth>
            <ContentContainer>
              <div className="md:w-[80vw] lg:w-full mx-auto">
                <h2 className="text-center font-bold text-primaryText w-[300px] lg:w-[500px] xl:w-[600px] mx-auto">
                  Gain exclusive access to the Origin business club
                </h2>
              </div>
            </ContentContainer>
            <FullWidth>
              <div className="flex md:justify-center md:flex-wrap lg:flex overflow-y-hidden overflow-x-scroll scrollbar-hide gap-4 mt-8 lg:mt-16 px-4 sm:px-0">
                {exclusiveAccess.map((item) => (
                  <ExclusiveCard
                    key={item.id}
                    icon={item.icon}
                    text={item.text}
                    desc={item.desc}
                  />
                ))}
              </div>
            </FullWidth>
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
                <div className="bg-white w-[327px] md:w-full rounded-2xl px-5 py-8 flex flex-col gap-6 mx-auto">
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

        {/*  */}
        <div className="bg-primaryBG pb-52 md:pb-20">
          <div className="bg-landing-bg bg-no-repeat bg-contain h-full w-full">
            {/* <FullWidth>
              <ProductContainer />
            </FullWidth> */}

            {/* <div className="w-[90%] lg:w-[95%] xl:w-[80%] mx-auto py-4">
            
            </div>
           
          

            <div className="w-[90%] lg:w-[95%] xl:w-[80%] mx-auto ">
             
            </div> */}
          </div>
        </div>
      </div>
      <BottomScrollListener onBottom={test}>
        <div />
      </BottomScrollListener>
      {/* {show && <Footer />} */}
    </div>
  );
}
