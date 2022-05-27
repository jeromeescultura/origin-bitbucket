import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { BottomScrollListener } from "react-bottom-scroll-listener";

import ButtonComponent from "../components/ButtonComponent";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardScroll from "../components/CardScroll";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/assessment");
  };

  const test = () => {
    setShow(true);
  };

  return (
    <div>
      <NavBar />

      <div className="w-full bg-white overflow-auto h-full">
        <div className="w-[90%] relative lg:w-[95%] xl:w-[80%] mx-auto pb-24 space-y-16 lg:space-y-32">
          {/* Cover Photo */}
          <div className="flex justify-center flex-grow rounded-lg w-full ">
            <div className="w-full sm:w-[90%] md:w-full relative h-[550px] sm:h-[400px] md:h-[350px] lg:h-[680px]">
              <Image
                src="/images/hero.png"
                layout="fill"
                objectFit="cover"
                alt="bg-image"
                className="rounded-2xl"
                objectPosition="left"
              />
            </div>
            <div className="absolute pt-16 lg:pt-28 text-center lg:text-left sm:w-[80%] md:w-[90%] lg:w-[75%] xl:w-[65%]">
              <h2 className="text-4xl lg:text-[56px] lg:leading-snug  text-primaryText font-bold px-10 sm:px-10 lg:px-0 lg:w-[500px]">
                Business energy that&#39;s affordable <br />
                &amp; future proof
              </h2>
              <p className="text-secondaryText mt-8 font-light px-4 sm:px-4 lg:px-0 lg:w-[70%]">
                By taking our sustainability assessment, we will connect your
                business to the right products and services that drive value for
                you and the environment.
              </p>
              <div className="flex flex-col w-[60%] md:flex-row sm:w-[80%] md:w-[80%] lg:w-[60%] mx-auto lg:mx-0 gap-4 mt-10 lg:mt-16 items-center sm:flex-row justify-center lg:justify-start">
                <ButtonComponent text="Start assessment" action={handleClick} />
                <ButtonComponent type="border" text="Let's have a chat" />
              </div>
            </div>
          </div>
          <div className="text-center font-light sm:w-[80%] lg:w-[80%] xl:w-[75%] mx-auto">
            <h2 className="">
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

          <div className="flex flex-col lg:flex-row lg:gap-32 sm:w-[80%] md:w-full lg:w-[95%] xl:w-[75%] mx-auto">
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
            <div className="flex flex-col gap-12 mt-8 lg:mt-0">
              <div className="flex gap-6 ">
                <h2 className="text-primaryText font-bold">1</h2>
                <div className="flex flex-col gap-2">
                  <div className="bg-[#00B9D7] text-white p-1 rounded-md w-[80px] text-xs">
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
        </div>

        {/*  */}
        <div className="bg-primaryBG pb-52 md:pb-20">
          <div className="bg-landing-bg bg-no-repeat bg-contain h-full w-full">
            <div className="w-[90%] lg:w-[95%] xl:w-[80%] mx-auto pb-24 space-y-16 lg:space-y-32">
              <div className="w-[80%] sm:w-[80%] md:w-full lg:w-[80%] mx-auto">
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
              <CardScroll />

              <div className="sm:w-[80%] md:w-full lg:w-[80%] mx-auto ">
                <h2 className="text-center font-bold text-primaryText mb-8 lg:mb-16 md:w-[50%] mx-auto">
                  Gain exclusive access to the Origin business club
                </h2>
                <div className="flex md:justify-center md:flex-wrap lg:flex overflow-y-hidden overflow-x-scroll scrollbar-hide gap-4 ">
                  <div className="bg-white min-w-[300px] sm:w-[270px] lg:w-[49%] p-6 rounded-xl flex flex-col gap-2">
                    <div className="w-12 h-12">
                      <Image
                        src="/icons/personalized.svg"
                        width={50}
                        height={50}
                        objectFit="contain"
                        alt="icon"
                      />
                    </div>

                    <p className="font-bold">Personalised support</p>
                    <p>
                      You can get guidance from one of our accredited
                      sustainability support managers.
                    </p>
                  </div>
                  <div className="bg-white min-w-[300px] sm:w-[270px] lg:w-[49%] p-6 rounded-xl flex flex-col gap-2">
                    <div className="w-12 h-12">
                      <Image
                        src="/icons/marketing.svg"
                        width={50}
                        height={50}
                        objectFit="contain"
                        alt="icon"
                      />
                    </div>

                    <p className="font-bold">Marketing toolkit</p>
                    <p>
                      Communicate the sustainable impact you’re making to your
                      customers and stakeholders.
                    </p>
                  </div>
                  <div className="bg-white min-w-[300px] sm:w-[270px] lg:w-[49%] p-6 rounded-xl flex flex-col gap-2">
                    <div className="w-12 h-12">
                      <Image
                        src="/icons/flame.svg"
                        width={50}
                        height={50}
                        objectFit="contain"
                        alt="icon"
                      />
                    </div>

                    <p className="font-bold">Green accreditation</p>
                    <p>
                      Get rewarded as a result of the environmental and
                      sustainability initiatives undertaken.
                    </p>
                  </div>
                  <div className="bg-white min-w-[300px] sm:w-[270px] lg:w-[49%] p-6 rounded-xl flex flex-col gap-2">
                    <div className="w-12 h-12">
                      <Image
                        src="/icons/discount.svg"
                        width={50}
                        height={50}
                        objectFit="contain"
                        alt="icon"
                      />
                    </div>

                    <p className="font-bold">Discounts</p>
                    <p>
                      Get rewarded as a result of the environmental and
                      sustainability initiatives undertaken.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-32 sm:w-[80%] md:w-full lg:w-[95%] xl:w-[75%] mx-auto">
                <div className="text-center lg:text-left">
                  <h2 className="text-primaryText font-bold">
                    Together we are driving the Australia&#39;s transition to
                    net-zero.
                  </h2>
                  <p className="mt-6 mb-8">
                    Over 1,200 businesses of all shapes and sizes, have used the
                    Origin assessment tool to transition to cleaner energy
                    solutions, at a price point that suits them.
                  </p>
                  <p className="text-secondaryBG font-bold">
                    Read the success stories
                  </p>
                </div>
                <div className="bg-white w-[327px] md:w-full rounded-2xl px-5 py-8 flex flex-col  gap-6 mx-auto">
                  <div className="w-full h-[200px]">
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
            </div>
          </div>
        </div>
      </div>
      <BottomScrollListener onBottom={test}>
        <div />
      </BottomScrollListener>
      {show && <Footer />}
    </div>
  );
}
