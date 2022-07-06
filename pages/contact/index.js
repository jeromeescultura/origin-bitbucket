import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ContactForms from "../../components/ContactForms";
import ContentContainer from "../../containers/ContentContainer";
import { ButtonTrackingEvent } from "../../functions/analitycsEvents";

function Interested() {
  const router = useRouter();

  const handleClick = (e) => {
    ButtonTrackingEvent(e.target.name, "/");
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Origin Shift | Express Interest</title>
        <meta
          property="og:title"
          content="Origin Shift Express Interest"
          key="title"
        />
      </Head>

      <div className="bg-primaryBG pb-32">
        <section className="pt-6 lg:pt-8 ">
          <div className="w-full xl:w-[1108px] mx-auto">
            <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
              <Image
                src="/images/origin-logo.svg"
                width={90}
                height={90}
                objectFit="contain"
                alt="origin-logo"
                name="go-home"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="text-center font-light w-full mt-4 lg:-mt-8">
            <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
              Expression of interest
            </h2>
            <p className="subtitle my-6 leading-loose w-[80vw] sm:w-[60vw] md:w-[65vw] lg:w-[40vw] xl:w-[40vw] mx-auto">
              Interested in speaking to one of our Business Club Specialists
              about your options? Leave your details below.
            </p>
          </div>
        </section>

        <ContentContainer style="grid gap-6 lg:gap-8 lg:grid-col-5 lg:grid-flow-col lg:grid-flow-col relative max-w-[610px] mx-auto z-10">
          <ContactForms text="Please give us a few details, and one of our Business Club Specialists will contact you about other options that might be available to you." />
        </ContentContainer>
      </div>
    </>
  );
}

export default Interested;
