import Image from "next/image";
import { useEffect, useState } from "react";
import MoreDetailsComponent from "../MoreDetailsComponent";

const ImpactCard = ({
  recommend,
  impact,
  level,
  industry,
  openModal,
  dailyUsage,
}) => {
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
        Your estimated impact
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
              {recommend === "carbonOffset" && impact[0]}
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
            `As an example, if the average business in your industry offsets its electricity usage for one year, it would be roughly equivalent to the carbon absorbed by ${impact[0]} - ${impact[1]} 2 metre tall trees in one year.
            `}
          {recommend === "greenPower" &&
            `As an example, if the average business in your industry buys (${
              level * 100
            }%) GreenPower, it would fund ${dailyUsage}Kw/h of renewable electricity to be put back into the grid by (for example) approximately ${
              typeof impact === "string" && impact?.replace(",", " and")
            } of a wind turbine.`}
          {recommend === "solar" &&
            `As an example, if the average business in your industry uses Solar energy for its electricity needs, the avoided carbon emissions could equal to the removal of up to ${
              impact[1] > 1 ? `${impact[1]} cars` : `${impact[1]} car`
            } from Australia’s roads.`}
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
              to help reduce electricity emissions.
            </p>

            <p>
              Add Origin Go Zero to your electricity plan and we’ll offset the
              amount of greenhouse emissions created by the amount of
              electricity you use.
            </p>

            <p>
              Origin will support a number of credible offset options sourced
              locally and internationally.
            </p>

            <p>By adding Origin Go Zero you’ll be:</p>

            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>Offsetting your carbon emissions</li>
              <li>Helping contribute to a healthier environment</li>
            </ul>
          </div>
        ) : recommend === "greenPower" ? (
          <div className="space-y-4 text-secondaryText">
            <p>
              GreenPower is a government-accredited program. When you add
              GreenPower to your electricity plan, the equivalent electricity
              consumed will be added to the energy grid using renewable sources.
            </p>

            <p>
              The best part is, you can feel confident knowing your money is
              supporting government-accredited renewable projects in Australia.
            </p>

            <p>By adding GreenPower you’ll be:</p>

            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>
                Supporting Australian renewables to reduce carbon emissions
              </li>
              <li>Helping contribute to a healthier environment</li>
            </ul>
          </div>
        ) : (
          <div className="space-y-4 text-secondaryText">
            <p>
              Solar uses clean, renewable energy from the sun, making you less
              reliant on traditional sources of electricity such as fossil
              fuels.
            </p>{" "}
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
            <ul className="text-sm list-disc pl-5 space-y-2">
              <li>Using self generated renewable energy</li>
              <li>Reducing carbon emissions</li>
              <li>Helping contribute to a healthier environment</li>
            </ul>
          </div>
        )}
      </MoreDetailsComponent>
      <div className="font-light text-xs text-center text-subTextColor leading-5">
        These impact estimates are based on electricity usage averages compiled
        from Origin&apos;s small and medium business customer base in the{" "}
        <span className="font-medium">{industry}</span>. This will change based
        on your business&apos; specific usage.{" "}
        <span className="underline cursor-pointer" onClick={openModal}>
          See the range of possible outcomes.
        </span>
      </div>
    </div>
  );
};

export default ImpactCard;
