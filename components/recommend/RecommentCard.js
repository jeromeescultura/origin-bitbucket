import {
  Button,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  MenuItem,
  Select,
} from "@mui/material";
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
  topRecommend,
}) => {
  return (
    <div className="bg-white py-8 px-4 lg:p-12 rounded-xl space-y-8 max-w-[530px] mx-auto">
      <div className="text-center space-y-2">
        <p className="text-[18px] lg:text-[20px] font-medium mb-8 text-primaryText">
          {recommend === topRecommend ? "We suggest" : "Alternative option"}
        </p>
        {/* <LeafRating
          count={
            (recommend === "carbonOffset" && 2) ||
            (recommend === "solar" && 4) ||
            (recommend === "greenPower" && 3)
          }
        /> */}

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
        <p>
          {recommend === "carbonOffset" && "Through offsetting your energy use"}
          {recommend === "solar" &&
            "Through using self generated renewable energy"}
          {recommend === "greenPower" &&
            "Through supporting Australian renewables"}
        </p>
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
        <div className="space-y-2  lg:pr-5  lg:border-r text-center lg:text-left ">
          {recommend === "solar" ? (
            <div className="">
              <p className="font-medium whitespace-nowrap">Estimated Savings</p>
              <h2 className="text-secondaryText my-4 lg:my-3">
                {formatPrice(solarSavings)}
              </h2>
              <p className="text-xs text-subTextColor">
                extra p/month on any <br />
                Origin Energy plan*
              </p>
            </div>
          ) : (
            <div className="">
              <p className="font-medium whitespace-nowrap">Estimated cost</p>
              <h2 className="text-secondaryText">{formatPrice(extraCost)}</h2>
              <p className="text-xs text-subTextColor">
                extra p/day on any <br />
                Origin Energy plan*
              </p>
            </div>
          )}
        </div>
        <div className="space-y-2  pl-5">
          <p className="font-medium  text-center lg:text-left">
            In addition, we will also support you with
          </p>
          <List dense={true} className="space-y-4 text-left py-3">
            <ListItem className="flex items-center lg:items-start pl-0">
              <ListItemIcon>
                <Image
                  src="/icons/check-yellow.svg"
                  width={30}
                  height={30}
                  objectFit="contain"
                  alt="check"
                />
              </ListItemIcon>
              <p>
                {" "}
                <u>Progress reporting</u> on your impact
              </p>
            </ListItem>
            <ListItem className="flex items-center lg:items-start pl-0">
              <ListItemIcon>
                <Image
                  src="/icons/check-yellow.svg"
                  width={30}
                  height={30}
                  objectFit="contain"
                  alt="check"
                />
              </ListItemIcon>
              <p>
                {" "}
                <u>Free Marketing toolkit</u> to communicate your impact to
                communicate your impact
              </p>
            </ListItem>
            <ListItem className="flex items-center lg:items-start pl-0">
              <ListItemIcon>
                <Image
                  src="/icons/check-yellow.svg"
                  width={30}
                  height={30}
                  objectFit="contain"
                  alt="check"
                />
              </ListItemIcon>
              <p>
                {" "}
                Dedicated <u>Business club</u> support
              </p>
            </ListItem>
            {(recommend === "greenPower" || recommend === "solar") && (
              <ListItem className="flex items-center lg:items-start pl-0">
                <ListItemIcon>
                  <Image
                    src="/icons/star.svg"
                    width={30}
                    height={30}
                    objectFit="contain"
                    alt="star"
                  />
                </ListItemIcon>
                {recommend === "greenPower" && (
                  <p>
                    <u>Tariff review</u> to reduce your overall energy costs
                  </p>
                )}
                {recommend === "solar" && (
                  <p>
                    <u>Reduced energy costs</u> through self generated power
                  </p>
                )}
              </ListItem>
            )}
          </List>
        </div>
      </div>
      <p className="text-xs text-subTextColor text-center leading-6">
        *Once you submit your application, one of our Business club
        representatives will get in contact to review your energy plan options.
      </p>
    </div>
  );
};

export default RecommentCard;
