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
    <div className="bg-white py-8 px-4 lg:p-8 rounded-xl space-y-8 max-w-[530px] mx-auto">
      <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center">
        Your impact
      </p>
      <div className="flex flex-col gap-4 lg:gap-6 lg:flex-row">
        <div className="text-center min-w-[150px]">
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
              {recommend === "greenPower" && impact}
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
            `By way of example, if your business offset its electricity use for a year, it would be roughly equivalent to planting and growing ${impact} tree seedlings for 10 years.`}
          {recommend === "greenPower" &&
            `By way of example, if your business matched their electricity use to ${
              level * 100
            }% GreenPower, it would only take ${impact}  to put the same amount of renewable energy back into the grid.`}
          {recommend === "solar" &&
            `By way of example, if all businesses like yours did this, we could prevent ${
              impact[0]
            } tonnes of carbon from ever being emitted per year, roughly equivalent to immidiately taking ${
              impact[1] > 1 ? `${impact[1]} cars` : `${impact[1]} car`
            } off the road.`}
        </p>
      </div>
      <MoreDetailsComponent
        text={`How ${
          recommend === "carbonOffset"
            ? "carbon offsets work"
            : recommend === "greenPower"
            ? "GreenPower works"
            : "How solar benefits all"
        }`}
      >
        {recommend === "carbonOffset" ? (
          <div className="space-y-4 text-secondaryText">
            <p>
              Our Origin Go Zero add-on is 100% carbon neutral and certified by
              Climate Active – an initiative backed by the Australian Government
              to help reduce gas emissions.
            </p>
            <p>
              Add Origin Go Zero to your energy plan (for a bit extra on your
              bill each month) and we’ll offset the amount of greenhouse
              emissions created by the amount of electricity you use.
            </p>
            <p>
              Origin will support a number of credible offset options sourced
              locally and internationally.
            </p>
            <p>By adding Origin Go Zero you’ll be:</p>
            <ul className="font-GorditaRegular text-sm font-light list-inside list-disc space-y-1 ml-2">
              <li>Reducing your carbon emissions</li>
              <li>Helping contribute to a healthier environment </li>
            </ul>
          </div>
        ) : recommend === "greenPower" ? (
          <div className="space-y-4 text-secondaryText">
            <p>
              GreenPower is a government-accredited program. When you add
              GreenPower to your electricity plan (for a bit extra on your bill
              each month), we’ll match your electricity use by sending the same
              amount of renewable energy back into the energy grid.
            </p>
            <p>
              The best part is, you can feel confident knowing your money is
              supporting government-accredited renewable projects in Australia.
            </p>

            <p>By adding GreenPower you’ll be:</p>
            <ul className="font-GorditaRegular text-sm font-light list-inside list-disc space-y-1 ml-2">
              <li>Supporting Australian renewables</li>
              <li>Reducing carbon emissions</li>
              <li>Helping contribute to a healthier environment </li>
            </ul>
          </div>
        ) : (
          <div className="space-y-4 text-secondaryText">
            <p>
              Solar uses clean, renewable energy from the sun, making you less
              reliant on traditional sources of electricity such as fossil
              fuels.
            </p>
            <p>
              Going solar can help your business reduce daytime electricity
              costs and your bottom line.
            </p>
            <p>
              Promoting your solar energy credentials may also assist your
              appeal to customers and suppliers – those looking to support
              businesses committed to sustainable energy practices.
            </p>
            <p>By adding solar you’ll be:</p>
            <ul className="font-GorditaRegular text-sm font-light list-inside list-disc space-y-1 ml-2">
              <li>Using self generated renewable energy</li>
              <li>Reducing carbon emissions </li>
              <li>Helping contribute to a healthier environment</li>
            </ul>
          </div>
        )}
      </MoreDetailsComponent>
    </div>
  );
};

export default ImpactCard;
