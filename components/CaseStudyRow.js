import Image from "next/image";
import React from "react";
import ContentContainer from "../containers/ContentContainer";

function CaseStudyRow() {
  return (
    <ContentContainer>
      <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-32 mx-auto mt-16">
        <div className="text-center lg:text-left">
          <h2 className="text-primaryText font-bold lg:w-[380px] xl:w-[330px]">
            Together we are driving the Australia&#39;s transition to net-zero.
          </h2>
          <p className="mt-6 mb-8 lg:w-[415px] xl:w-[380px]">
            Over 1,200 businesses of all shapes and sizes, have used the Origin
            assessment tool to transition to cleaner energy solutions, at a
            price point that suits them.
          </p>
          <p className="text-secondaryBG font-bold">Read the success stories</p>
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
            At no extra cost to me and without making any changes to my cafe, my
            carbon emissions were offset by Origin.
          </p>
          <div>
            <p>Betty</p>
            <p>Black Kettle Cafe</p>
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

export default CaseStudyRow;
