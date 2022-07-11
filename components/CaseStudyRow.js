import Image from "next/image";
import React from "react";
import ContentContainer from "../containers/ContentContainer";

function CaseStudyRow() {
  return (
    <ContentContainer>
      <div className="md:w-[80vw] lg:w-full mx-auto mt-16 md:mt-28">
        <h2
          className="text-center font-bold text-primaryText w-[300px] lg:w-[500px] xl:w-[600px] mx-auto"
          id="business-club"
        >
          Ian&apos;s Story
        </h2>
      </div>
      <div className="flex flex-col lg:mx-[4rem] md:flex-row md:items-center gap-8 lg:gap-10  mt-16 pb-24 lg:pb-16">
        <div className="flex flex-col gap-2 md:gap-12 md:min-w-[200px] lg:min-w-[300px]  md:self-start">
          <img
            src="/images/customer_wine-glass.jpg"
            alt="Wine Glass"
            className="rounded-md w-full"
          />
          <img
            src="/images/customer_winery-post.jpg"
            alt="customer winery"
            className="rounded-md w-full"
          />
        </div>
        <div className="text-base space-y-6 w-full">
          <p>
            Ian Gray is an Operations Manager for an Australian grape, wine
            &amp; chocolate business and an Origin customer. Ian manages the
            energy portfolio for vineyards spread across the Barossa, Clare
            Valley, McLaren Vale, Langhorne Creek, Padthaway, Heathcote and
            Margaret River regions along with their large chocolate factory
            located in the heart of Barossa Valley.
          </p>
          <p>
            Like most small to medium businesses, Ian wanted to shift towards
            cleaner and more cost-effective energy for his portfolio but wasn’t
            sure how. When Ian took over the portfolio, he was caught between
            engaging with energy brokers who he didn&apos;t have a trusted
            relationship with. His other option was to try to navigate and
            negotiate directly for the right combination of products and for a
            better deal. We thought we could help.
          </p>
          <p>
            Based on his unique needs, the team at Origin stepped in to support
            Ian on his journey towards running a more sustainable and energy
            efficient business. Ian deserved expert guidance and tailored
            support to reduce his carbon footprint and manage his overhead
            costs. And we found a way forward together.
          </p>
          <p>
            Now we have a focused team of dedicated energy specialists equipped
            to talk customers through the process and walk that journey with
            them, along with our online tool to help you understand which Origin
            sustainable energy products will best suit you. Want your business
            to take steps towards supporting cleaner energy? Use our online tool
            to find out how your business can benefit. With Origin, you have the
            power. That’s good for business, and good for our planet too. Origin
            - where all good change starts.
          </p>
        </div>
      </div>
    </ContentContainer>
  );
}

export default CaseStudyRow;
