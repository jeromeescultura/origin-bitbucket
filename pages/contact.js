import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ContactForms from "../components/ContactForms";
import ContentContainer from "../containers/ContentContainer";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

function Interested() {
  const router = useRouter();
  const source = router.query.src;
  const version = router.query.v;

  const handleClick = (e) => {
    ButtonTrackingEvent(e.target.name, "/");
    e.preventDefault();
    router.push(
      `/${source !== "" && source !== undefined ? `?src=${source}&` : ""}${
        version !== "" && version !== undefined ? `v=${version}` : ""
      }`
    );
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
            <img
              src="/images/origin-logo.svg"
              className="w-16 lg:w-20 cursor-pointer pl-4"
              alt="origin-logo"
              name="go-home"
              onClick={(e) => handleClick(e)}
            />

            {/*             
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
            </div> */}
          </div>
          <div className="text-center font-light w-full mt-4 lg:-mt-8">
            <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
              Expression of interest
            </h2>
            <p className="subtitle my-6 leading-loose w-[80vw] sm:w-[60vw] md:w-[65vw] lg:w-[40vw] xl:w-[40vw] mx-auto">
              Interested in speaking to one of our Business Club Specialists
              about your options?
            </p>
          </div>
        </section>

        <ContentContainer style="pt-0">
          <ContactForms
            path={router.query.path}
            source={source}
            version={version}
            text="Please give us a few details, and one of our Business Club Specialists will contact you about options that might be available to you."
          />
        </ContentContainer>
      </div>
    </>
  );
}

export default Interested;

export async function getStaticProps() {
  return {
    props: { page: "Contact Page" },
  };
}
