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
          <div className="w-full sm:w-[80vw] md:w-[95vw] lg:w-[90vw] xl:w-[1108px] mx-auto">
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

        <ContentContainer style="pt-0 md:!w-[80vw] lg:!w-[70vw] max-w-[730px]">
          <div className="sm:grid sm:grid-cols-2 xs:divide-y sm:divide-x sm:divide-y-0 space-y-8 sm:space-y-0 py-8 px-6 sm:px-8 sm:py-6 md:p-10 bg-white gap-6 rounded-lg mb-4 mx-auto">
            <div className="">
              <p className="text-sm">Want to know more now?</p>
              <div className="flex gap-2 mt-2 items-start">
                {/* <img
              src="/icons/icon_phone.svg"
              alt="phone-icon"
              className="h-7 text-accentColor"
            /> */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.625 10.795C8.065 13.625 10.38 15.94 13.215 17.38L15.415 15.175C15.69 14.9 16.085 14.82 16.43 14.93C17.55 15.3 18.755 15.5 20 15.5C20.555 15.5 21 15.945 21 16.5V20C21 20.555 20.555 21 20 21C10.61 21 3 13.39 3 4C3 3.445 3.45 3 4 3H7.5C8.055 3 8.5 3.445 8.5 4C8.5 5.245 8.7 6.45 9.07 7.57C9.18 7.915 9.1 8.31 8.825 8.585L6.625 10.795Z"
                    fill="#FFB432"
                  />
                </svg>

                <div>
                  <p className="text-[12px]">
                    <a
                      href="tel:01800240240"
                      className="font-bold text-[15px] break-all cursor-pointer"
                    >
                      1800 240 240
                    </a>{" "}
                    (Pin 124)
                  </p>
                  <p className="text-[12px]">
                    8:30am - 4:30pm, <span>Mon to Fri</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:pl-6 xs:pt-5 sm:pt-0">
              <p className="text-sm">Email us</p>
              <div className="flex gap-2 mt-2">
                <img
                  src="/icons/icon_email.svg"
                  alt="email-icon"
                  className="h-7"
                />
                <div className="mt-1">
                  <a
                    href="mailto:shift@originenergy.com.au"
                    className="underline font-gorditaLight cursor-pointer break-all text-sm"
                  >
                    shift@originenergy.com.au
                  </a>
                  <p className="sm:mt-1 sm:block"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="my-8 text-center">Or leave your details below</div>

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
