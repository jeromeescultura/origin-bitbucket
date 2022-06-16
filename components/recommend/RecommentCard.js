import { Button, FormControl, MenuItem, Select } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { formatPrice } from "../../functions/recofunctions/RecoFunctions";
import LeafRating from "../LeafRating";
import MoreDetailsComponent from "../MoreDetailsComponent";

const RecommentCard = ({
  recommend,
  solarSavings,
  extraCost,
  level,
  handleLevel,
}) => {
  return (
    <div className="bg-white py-8 px-4 lg:p-12 rounded-xl space-y-8 max-w-[510px] mx-auto">
      <div className="text-center space-y-2">
        <p className="text-[18px] lg:text-[20px] font-medium mb-8 text-primaryText">
          We recommend
        </p>
        <LeafRating
          count={
            (recommend === "carbonOffset" && 2) ||
            (recommend === "solar" && 4) ||
            (recommend === "greenPower" && 3)
          }
        />

        <div className="flex justify-center items-center">
          <p className="font-medium subtitle">
            {recommend === "carbonOffset" && "Origin Go Zero"}{" "}
            {recommend === "solar" && "Solar"}
            {recommend === "greenPower" && "GreenPower"}
          </p>
          {recommend === "greenPower" && (
            <FormControl sx={{ ml: "16px", minWidth: 120 }}>
              <Select
                value={level}
                color="secondary"
                onChange={handleLevel}
                sx={{
                  borderRadius: "10px",
                  height: "40px",
                  width: "100px",
                }}
              >
                <MenuItem value={1}>100%</MenuItem>
                <MenuItem value={0.5}>50%</MenuItem>
                <MenuItem value={0.25}>25%</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>
      </div>
      <div className="space-y-1 mt-8 text-center">
        <p className="font-medium">How you reduce impact</p>
        <p>Through offsetting your energy use</p>
      </div>
      <MoreDetailsComponent text="More Details">
        <div className="grid grid-rows-3">
          <div className="grid grid-cols-2 items-center border-t py-2">
            <p className="font-medium">Plan</p>
            <p>Available on any Origin Energy plan</p>
          </div>
          <div className="grid grid-cols-2 items-center border-t py-2">
            <p>Site changes</p>
            <p>None</p>
          </div>
          <div className="grid grid-cols-2 items-center border-t pt-2">
            <p>Lock-in contracts</p>
            <p>None</p>
          </div>
        </div>
      </MoreDetailsComponent>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
        <div className="space-y-2  pr-5 lg:border-r text-center lg:text-left ">
          {recommend === "solar" ? (
            <div className="min-w-[160px]">
              <p className="font-medium">Estimated Savings</p>
              <h2 className="text-secondaryText my-4 lg:my-3">
                {formatPrice(solarSavings)}
              </h2>
              <p className="text-xs text-subTextColor">
                extra p/month on any <br />
                Origin Energy plan*
              </p>
            </div>
          ) : (
            <div className="min-w-[160px]">
              <p className="font-medium">Estimated cost</p>
              <h2 className="text-secondaryText">{formatPrice(extraCost)}</h2>
              <p className="text-xs text-subTextColor">
                extra p/month on any <br />
                Origin Energy plan*
              </p>
            </div>
          )}
        </div>
        <div className="space-y-2  pl-5">
          <p className="font-medium  text-center lg:text-left">
            By pledging you’ll get access to
          </p>
          <ul className="space-y-4 text-left py-3">
            <li className="flex items-start gap-4">
              <Image
                src="/icons/check-yellow.svg"
                width={20}
                height={20}
                objectFit="contain"
                alt="check"
              />
              <p> Progress reporting on your impact</p>
            </li>
            <li className="flex items-start gap-4">
              <Image
                src="/icons/check-yellow.svg"
                width={20}
                height={20}
                objectFit="contain"
                alt="check"
              />
              <p> Amplify toolkit to communicate your impact</p>
            </li>
            <li className="flex items-start gap-4">
              <Image
                src="/icons/check-yellow.svg"
                width={20}
                height={20}
                objectFit="contain"
                alt="check"
              />
              <p> Dedicated Clean Ambition club support</p>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-xs text-subTextColor text-center leading-6">
        *Once you submit your application, one of our Clean Ambition club
        representatives will get in contact to review your energy plan options.
      </p>
    </div>
  );
};

export default RecommentCard;
