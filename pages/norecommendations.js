import { Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NoRecommendations = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
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
          It looks like our ready to go product range may not fit your
          sustainability requirements, but that’s not a problem.
        </div>
        <div className="text-center font-light text-lg">
          Sign up to speak to one of our friendly staff members. They will be
          able to walk you through all your options, and help find a way forward
          that suits your business.
          <br />
          <br />
          So we can work together towards a cleaner future.
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          variant="contained"
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
  );
};

export default NoRecommendations;
