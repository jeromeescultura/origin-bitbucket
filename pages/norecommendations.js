import { Button } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

const NoRecommendations = () => {
  const router = useRouter();
  const handleClick = (e) => {
    ButtonTrackingEvent(e.target.name, "/");
    e.preventDefault();
    router.push("/");
  };

  const startAssesment =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STARTASSESSMENT")
    ) || null;

  useEffect(() => {
    if (startAssesment === null || undefined || "") router.push("/");
  }, [startAssesment]);

  return (
    <>
      <Head>
        <title>Origin Shift | No Recommendation</title>
        <meta
          property="og:title"
          content="Origin Shift have no recommendation"
          key="title"
        />
      </Head>
      {startAssesment && (
        <div className="p-6">
          <div className="flex justify-end lg:justify">
            <div className="w-16 lg:w-20 cursor-pointer">
              <Image
                src="/images/origin-logo.svg"
                width={500}
                height={500}
                alt="logo"
                onClick={handleClick}
              />
            </div>
          </div>
          <div className="space-y-6 mt-8 lg:mt-0 max-w-[728px] mx-auto">
            <div className="text-xl font-medium text-center">
              Based on our assessment, it looks like our range of products may
              not be suitable for you - but we may be wrong.
            </div>
            <div className="text-center font-light text-lg">
              Submit an expression of interest to speak to one of our Business
              Club Specialists. They will be able to discuss your options and
              help find a cleaner energy solution that suits your business.
              <br />
              <br />
              Or alternatively, call 1800-240-240 (PIN 124) to speak to someone
              now. We&apos;re around 8:30am - 4:30pm, Monday to Friday.
              <br />
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button
              variant="outlined"
              style={{
                borderRadius: 200,
                boxShadow: "none",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.75rem",
                paddingBottom: "0.75rem",
              }}
              onClick={(e) => {
                e.preventDefault();
                window.localStorage.clear();
                router.push("/contact");
              }}
            >
              Submit expression of interest
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoRecommendations;
