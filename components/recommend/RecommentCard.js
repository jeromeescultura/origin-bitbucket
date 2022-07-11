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
        <p className="text-[18px] lg:text-[20px] font-medium  text-primaryText">
          {recommend === topRecommend ? "We suggest" : "Alternative option"}
        </p>
        {/* <LeafRating
          count={
            (recommend === "carbonOffset" && 2) ||
            (recommend === "solar" && 4) ||
            (recommend === "greenPower" && 3)
          }
        /> */}

        <div className="flex justify-center items-center pt-8">
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
          {recommend === "carbonOffset" &&
            "Through offsetting your electricity use"}
          {recommend === "solar" &&
            "Through using self generated renewable electricity"}
          {recommend === "greenPower" &&
            "Through supporting Australian renewables"}
        </p>
      </div>
      <MoreDetailsComponent text="More Details">
        <div className="grid grid-rows-3">
          <div className="grid grid-cols-2 items-center border-t py-2">
            <p className="font-medium">Plan</p>
            {recommend === "solar" ? (
              <p>
                Available on any Origin Electricity plan or as a stand-alone
                product
              </p>
            ) : (
              <p>Available on any Origin Electricity plan</p>
            )}
          </div>
          <div className="grid grid-cols-2 items-center border-t py-2">
            <p>Site changes</p>
            <p> {recommend === "solar" ? "Yes" : "None"}</p>
          </div>
          <div className="grid grid-cols-2 items-center border-t pt-2">
            <p>Lock-in contracts</p>
            <p>None</p>
          </div>
        </div>
      </MoreDetailsComponent>
      <div className="flex flex-col  gap-4 lg:gap-0">
        <div className="space-y-2  lg:pr-5  lg:border-r text-left ">
          {recommend === "solar" ? (
            <div className="">
              <p className="font-medium whitespace-nowrap">Estimated Savings</p>
              <h2 className="text-secondaryText my-4 lg:my-3">
                {formatPrice(solarSavings)}
              </h2>
              <p className="text-xs text-subTextColor">
                extra p/month on any Origin Electricity plan or as a
                stand-alone*
              </p>
            </div>
          ) : recommend === "greenPower" ? (
            <div className="">
              <p className="font-medium whitespace-nowrap">
                Cost of {level * 100}% GreenPower
              </p>
              <h2 className="text-secondaryText mt-2">{2.8 * level}c/kWh</h2>
              <p className="text-xs text-subTextColor">
                extra p/day on any Origin Electricity plan*
              </p>
            </div>
          ) : (
            <div className="">
              <p className="font-medium whitespace-nowrap">
                Cost of Origin Zero
              </p>
              <h2 className="text-secondaryText mt-2">1.5c/kWh</h2>
              <p className="text-xs text-subTextColor">
                extra p/day on any Origin Electricity plan*
              </p>
            </div>
          )}
        </div>
        <div className="my-3 lg:my-8">
          {recommend === "solar" ? (
            <p className="text-xs text-subTextColor leading-6">
              This estimated savings is based on industry averages. The actual
              savings will depend on your business’ specific usage, system size,
              feed-in tariff and location. Once you submit your application, one
              of our Business Club Specialists will get in contact to discuss
              your energy plan options and any potential costs specific to your
              business site.
            </p>
          ) : (
            <p className="text-xs text-subTextColor leading-6">
              This usage charge would roughly equate to an estimated cost of{" "}
              {formatPrice(extraCost)} per day (GST inclusive). This estimated
              cost is based on industry averages using Origin SME customer data.
              The actual cost will depend on your business’ specific usage. Once
              you submit your application, one of our Business Club Specialists
              will get in contact to discuss your energy plan options and any
              potential costs specific to your business site.
            </p>
          )}
        </div>
        <div className="space-y-2">
          <p className="font-medium  text-center lg:text-left">
            In addition, we will support you with
          </p>
          <List dense={true} className="space-y-1 text-left py-3">
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
                <u>Insights</u> on your impact
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
                <u>Free marketing toolkit</u> to communicate your impact
                externally
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
                Dedicated <u>Business Club support</u>
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
                    <u>Tariff review</u> to help reduce your electricity costs
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
    </div>
  );
};

export default RecommentCard;
