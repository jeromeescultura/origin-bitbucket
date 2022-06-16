import Image from "next/image";
import { useEffect, useState } from "react";
import MoreDetailsComponent from "../MoreDetailsComponent";

const ImpactCard = ({ recommend, impact, level }) => {
  const [icon, setIcon] = useState("trees.svg");

  useEffect(() => {
    switch (recommend) {
      case "carbonOffset":
        setIcon("trees.svg");
        break;
      case "greenPower":
        setIcon("wind.svg");
        break;
      case "solar":
        setIcon("car.svg");
        break;
      default:
        break;
    }
  }, [recommend]);

  return (
    <div className="bg-white py-8 px-4 lg:p-8 rounded-xl space-y-8 max-w-[510px] mx-auto">
      <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center">
        Your impact
      </p>
      <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto">
            <Image
              src={`/icons/recommend/${icon}`}
              width={100}
              height={100}
              objectFit="contain"
              alt="trees"
            />
          </div>
          <div className="mt-2">
            <h2 className="text-greenText font-bold">
              {typeof impact === "object" && recommend === "solar" && impact[1]}
              {recommend === "greenPower" &&
                `${impact > 1 ? `${impact} hrs` : `${impact} hr`} `}
              {recommend === "carbonOffset" && impact}
            </h2>
            <p className="text-sm text-greenText">
              {recommend === "carbonOffset" && "tree seedlings"}{" "}
              {recommend === "solar" && "fuel powered cars off the road"}
              {recommend === "greenPower" && "until fully matched"}
            </p>
          </div>
        </div>

        <p className="text-subTextColor mt-6 text-center lg:text-left col-span-2">
          {recommend === "carbonOffset" &&
            `If your business offset its electricity use for a year, it would be equivalent to planting and growing ${impact} tree seedlings for 10 years.`}
          {recommend === "greenPower" &&
            `If your business matched their electricity use to ${
              level * 100
            }% GreenPower, it would only take ${
              impact > 1 ? `${impact} hours` : `${impact} hour`
            }  to put the same amount of renewable energy back into the grid.`}
          {recommend === "solar" &&
            `If all businesses like yours did this, we could prevent ${impact[0]} tonnes of carbon from ever being emitted per year, equivalent to immidiately taking ${impact[1]} cars off the road.`}
        </p>
      </div>
      <MoreDetailsComponent
        text={`How ${
          recommend === "carbonOffset"
            ? "carbon offsets work"
            : recommend === "greenPower"
            ? "GreenPower works"
            : "solar benefits all"
        }`}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          molestiae possimus, mollitia distinctio, unde non modi quas asperiores
          ratione dolore corrupti fugit culpa reiciendis error omnis in ea
          voluptates ipsa?
        </p>
      </MoreDetailsComponent>
    </div>
  );
};

export default ImpactCard;
