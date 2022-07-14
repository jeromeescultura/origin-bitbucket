import { Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import ButtonComponent from "./ButtonComponent";
import * as fbq from "../lib/fpixel";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

function Footer() {
  const router = useRouter();

  const handleClick = (e, url) => {
    ButtonTrackingEvent(e.target.name, url);
    e.preventDefault();

    router.push(url);
  };

  return (
    <div className="bg-white p-8 shadow-t-md fixed bottom-0 w-full ">
      <div className=" w-full mx-auto grid sm:grid-cols-2 gap-4 sm:gap-10 max-w-[1400px]">
        <div className="text-center sm:text-left px-8">
          <p className="text-primaryText text-lg font-bold">
            Start saving more than money
          </p>
          <p className="my-4 lg:max-w-[80%]">
            In just 5 minutes, you can take a step towards making a difference
            in Australia&apos;s net-zero plan
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center lg:flex-row mx-auto w-full xl:w-[90%]">
          <Button
            variant="contained"
            color="primary"
            size="large"
            name="Start assessment"
            id="start-assessment"
            onClick={(e) => handleClick(e, "/disclaimer")}
            style={{
              backgroundColor: "#EC0000",
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            Start assessment
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="error"
            name="Get in touch"
            id="get-in-touch"
            onClick={(e) => handleClick(e, "/contact")}
            style={{
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
            }}
          >
            Let&#39;s have a chat
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
