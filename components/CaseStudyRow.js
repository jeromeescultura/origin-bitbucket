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
            an Gray is an Operations Manager for an Australian grape, wine &amp;
            chocolate business and an Origin customer. Ian manages the energy
            portfolio for vineyards spread across the Barossa, Clare, McLaren
            Vale, Langhorne Creek, Padthaway, Heathcote and Margaret River
            regions along with their large chocolate factory located in the
            heart of Barossa Valley. Like most small to medium businesses, Ian
            wanted to shift towards cleaner and more cost-effective energy for
            his portfolio but wasn’t sure how. When Ian took over the portfolio,
            he was caught between engaging with energy brokers who he
            didn&apos;t have a trusted relationship with. His other option was
            to try to navigate and negotiate directly for the right combination
            of products and for a better deal. We knew this wasn’t ok. Based on
            his unique needs, the team at Origin stepped in to support Ian on
            his journey towards running a more sustainable and energy efficient
            business. Ian deserved expert guidance and tailored support to
            reduce both his carbon footprint and manage his overhead costs. And
            we found a way forward together. Now we have a focused team of
            dedicated energy specialists equipped to talk customers through the
            process and walk that journey with them, along with our online tool
            that helps you understand which Origin sustainable energy products
            will best suit you. Want your business to shift towards cleaner
            energy? Use our online tool to find out how your business can
            benefit. With Origin, you have the power. That’s good for business,
            and good for our planet too. Origin – Where all GOOD change starts.
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
