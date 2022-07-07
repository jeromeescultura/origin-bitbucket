import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  Modal,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import { formatPrice } from "../../functions/recofunctions/RecoFunctions";
import LeafRating from "../LeafRating";
import MoreDetailsComponent from "../MoreDetailsComponent";

const PledgeModal = ({
  product,
  greenPowerLevel,
  estimatedSavings,
  extraCost,
  impact,
  biggerDiff,
  pledgeModal,
  closeModal,
}) => {
  const orient = useMediaQuery("(min-width:1024px)");

  useEffect(() => {
    if (orient) {
      closeModal();
    }
  }, [orient]);
  return (
    <Modal open={pledgeModal} onClose={closeModal}>
      <Box className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full max-w-[600px] p-5 rounded-lg ">
        <div className="flex justify-end" onClick={closeModal}>
          <button className="w-5 h-5">
            <Image
              src="/icons/close-icon.svg"
              width={500}
              height={500}
              alt="close-icon"
            />
          </button>
        </div>
        <div className="text-center space-y-2 mt-4">
          <p className="text-sm pb-4">You have chosen to participate with</p>
          {/* <LeafRating
            count={
              (product === "carbonOffset" && 2) ||
              (product === "greenPower" && 3) ||
              (product === "solar" && 4)
            }
          /> */}
          <p className="font-medium subtitle">
            {product === "carbonOffset" && "Origin Go Zero 100% carbon offset"}
            {product === "greenPower" && `GreenPower ${greenPowerLevel}%`}
            {product === "solar" && "Solar"}
          </p>
        </div>
        <div className="text-center overflow-y-scroll  max-h-[450px] lg:max-h-full">
          <div className="space-y-1 mt-6">
            <p className="font-medium">How you reduce impact</p>
            <p>
              {product === "carbonOffset" &&
                "Through offsetting your electricity use"}
              {product === "greenPower" &&
                "Through funding renewable generators"}
              {product === "solar" &&
                "Through using self generated renewable electricity"}
            </p>
          </div>
          <div className="mt-6">
            <MoreDetailsComponent text="More Details">
              <div className="grid grid-rows-3 text-left">
                <div className="grid grid-cols-2 items-center border-t py-2">
                  <p className="font-medium">Plan</p>
                  {product === "solar" ? (
                    <p>
                      Available on any Origin Electricity plan 
                      {/* or as a
                      stand-alone product */}
                    </p>
                  ) : (
                    <p>Available on any Origin Electricity plan</p>
                  )}
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
          </div>
          <div className="space-y-2 mt-6">
            <p className="font-medium">
              {product === "solar" ? "Estimated savings" : "Estimated cost"}
            </p>
            <h2>
              {product === "solar"
                ? formatPrice(estimatedSavings)
                : formatPrice(extraCost)}
            </h2>
            <p className="text-xs text-subTextColor">
              extra {product === "solar" ? "p/month" : "p/day"} on any <br />
              Origin Electricity plan
              {/* {product === "solar" ? " or as a stand-alone" : ""} */}
              *
            </p>
          </div>
          <div className="mt-8">
            <div className="w-24 h-24 mx-auto">
              {product === "carbonOffset" && (
                <Image
                  src="/icons/recommend/trees.svg"
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="trees"
                />
              )}
              {product === "greenPower" && (
                <Image
                  src="/icons/recommend/wind.svg"
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="wind"
                />
              )}
              {product === "solar" && (
                <Image
                  src="/icons/recommend/car.svg"
                  width={100}
                  height={100}
                  objectFit="contain"
                  alt="car"
                />
              )}
            </div>
            <p className="text-xs mt-6">
              {product === "carbonOffset" &&
                `If your business offset its electricity use for a year, it would be equivalent to planting and growing ${impact} tree seedlings for 10 years.`}
              {product === "greenPower" &&
                `If your business matched their electricity use to ${greenPowerLevel}% GreenPower, it would only take ${impact} to put the same amount of renewable energy back into the grid.`}
              {product === "solar" &&
                `If all businesses like yours did this, we could prevent ${impact[0]} tonnes of carbon from ever being emitted per year, equivalent to immediately taking ${impact[1]} cars off the road.`}
            </p>
          </div>
          {biggerDiff.length > 0 && (
            <div className="mt-8">
              <p className="font-medium">You&apos;ve chosen to do more</p>
              <div className="flex justify-center">
                <div className="flex flex-col">
                  {biggerDiff.includes("decarbonisation interview") && (
                    <div className="flex gap-4 mt-4">
                      <div className="w-[20px] h-[20px]">
                        <Image
                          src="/icons/check-green.svg"
                          width={50}
                          height={50}
                          objectFit="contain"
                          alt="trees"
                        />
                      </div>
                      <p className="text-left">
                        Participate in our net zero <br />
                        strategy review
                      </p>
                    </div>
                  )}
                  {biggerDiff.includes("greenPower") && (
                    <div className="flex gap-4 mt-4">
                      <div className="w-[20px] h-[20px]">
                        <Image
                          src="/icons/check-green.svg"
                          width={50}
                          height={50}
                          objectFit="contain"
                          alt="trees"
                        />
                      </div>
                      <p className="text-left">GreenPower</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </Box>
    </Modal>
  );
};

export default PledgeModal;
