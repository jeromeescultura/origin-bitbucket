import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";
import * as fbq from "../lib/fpixel";

const Disclaimer = () => {
  const router = useRouter();
  const source = router.query.src || "";
  const version = router.query.v || "";

  const handleClick = (e, url) => {
    ButtonTrackingEvent(e.target.name, url);
    e.preventDefault();
    localStorage.setItem("STARTASSESSMENT", true);
    router.push(
      `${url}/${source !== "" ? `?src=${source}&` : ""}${
        version !== "" ? `v=${version}` : ""
      }`
    );
  };

  return (
    <>
      <Head>
        <title>Origin Shift | Disclaimer</title>
        <meta
          property="og:title"
          content="Origin Shift Disclaimer"
          key="title"
        />
      </Head>

      <div className="w-[90vw] sm:w-[80vw] md:w-[90vw] max-w-[1140px] mx-auto">
        <div className="w-16 lg:w-20 cursor-pointer pt-4 lg:pt-8">
          <Image
            src="/images/origin-logo.svg"
            width={90}
            height={90}
            objectFit="contain"
            alt="origin-logo"
            name="go-home"
            onClick={(e) =>
              handleClick(
                e,
                `/`
              )
            }
            priority
          />
        </div>
        <div className="inline-grid md:grid-cols-3 gap-8 xl:gap-32 mt-8 lg:mt-24">
          <div className="space-y-8 lg:space-y-12 col-span-2">
            <h2 className="text-primaryText font-bold">
              Get started - assess how your business can support cleaner energy
            </h2>
            <div>
              <p className="font-medium subtitle">Location eligibility</p>
              <p className="my-4 lg:my-6">
                The products offered from our online assessment are available
                for small &amp; medium businesses with operations in{" "}
                <span className="font-bold">
                  South Australia, Victoria, New South Wales
                </span>{" "}
                and <span className="font-bold">Queensland.</span>
              </p>
              <p>
                If your business does not have operations in these states, but
                you would like to find out how your business can support cleaner
                energy, please let us know by completing your expression of
                interest below.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:w-2/3 lg:flex-row lg:w-full xl:pr-12">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="lg:w-full"
                onClick={(e) => handleClick(e, "/assessment_firststep")}
                name="Disclaimer Accepted"
                id="disclaimer-accepted"
                style={{
                  backgroundColor: "#EC0000",
                  borderRadius: 200,
                  boxShadow: "none",
                }}
              >
                Continue
              </Button>
              <Button
                variant="outlined"
                size="large"
                color="error"
                className="lg:w-full"
                onClick={(e) => handleClick(e, "/contact")}
                name="Submit expression of interest"
                id="submit-expression-of-interest"
                style={{
                  borderRadius: 200,
                  boxShadow: "none",
                }}
              >
                Submit expression of interest
              </Button>
            </div>
          </div>

          <img
            src="images/eligibility.png"
            alt="icon"
            className="relative hidden md:inline md:h-[250px] lg:h-[350px] xl:w-[350px] xl:h-full"
          />
          {/* <div className="relative hidden md:inline md:h-[250px] lg:h-[350px] xl:w-[350px] xl:h-full">
            <Image
              src="/images/eligibility.png"
              layout="fill"
              objectFit="cover"
              alt="trees"
              className="rounded-2xl"
            />
          </div> */}

          {/* <Image
            src="/images/disclaimer-tree.png"
            width={800}
            height={800}
            objectFit="cover"
            alt="trees"
            className="rounded-2xl"
          /> */}
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
