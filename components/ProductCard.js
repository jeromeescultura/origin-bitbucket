import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";
import LeafRating from "../components/LeafRating";

function ProductCard({
  title,
  leaf,
  icon,
  impact,
  plan,
  siteChanges,
  contracts,
  benefits,
}) {
  return (
    <>
      {/* <div className="text-center -mb-4 z-50">
        <LeafRating count={leaf} />
      </div> */}
      <div className="bg-white  z-20 px-8  rounded-xl flex flex-col gap-2 items-center text-center justify-evenly  h-[920px] ">
        <div className="pt-4">
          <p>Pledge with</p>
          <p className="font-bold text-[16px] mt-2 mb-4">{title}</p>
          <div className="w-24 mx-auto">
            <Image
              src={icon}
              width={100}
              height={100}
              objectFit="contain"
              alt="icon"
            />
          </div>
        </div>

        <div>
          <p className="font-medium mb-1">How you reduce impact</p>
          <p>{impact}</p>
        </div>

        <div>
          <p className="font-medium mb-1">Plan</p>
          <p>{plan}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Site changes</p>
          <p>{siteChanges}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Lock-in contracts</p>
          <p>{contracts}</p>
        </div>
        <div>
          <p className="font-medium mb-1">Benefits</p>
          {benefits.map((item, index) => (
            <p key={index} className="mb-4">
              {item}
            </p>
          ))}
        </div>

        <Button
          variant="outlined"
          size="large"
          color="error"
          style={{
            borderRadius: 200,
            boxShadow: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
        >
          Find out more
        </Button>
      </div>
    </>
  );
}

export default ProductCard;
