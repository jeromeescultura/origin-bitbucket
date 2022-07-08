import { cardClasses, Modal } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import { useState } from "react";
import {
  formatPrice,
  separator,
} from "../../functions/recofunctions/RecoFunctions";

const ImpactRanges = ({
  impactRanges,
  closeModal,
  showContent,
  level,
  low,
  medium,
  high,
  carbonEmissions,
  dayjs,
  industry,
  offSet,
}) => {
  const cars = (dailyUsage) => {
    let tempCars = Math.round((dailyUsage * 365) / 2401);
    if (tempCars > 1) {
      return Math.round(tempCars);
    } else {
      return Math.ceil(tempCars);
    }
  };

  const windTurbine = (dailyUsage) => {
    let impactCalc = dayjs.duration(
      dailyUsage * 365 * 0.001305873 * level,
      "h"
    );

    return impactCalc;
  };

  return (
    <Modal open={impactRanges} onClose={closeModal}>
      <Box className="bg-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[600px] min-w-[311px] p-6 rounded-lg">
        <div className={`flex items-start justify-between`}>
          <h1 className="font-GorditaMedium text-lg lg:text-xl ">
            Understanding your impact estimates with{" "}
            {showContent === "carbonOffset" && "Carbon Offsets"}
            {showContent === "greenPower" && "GreenPower"}
            {showContent === "solar" && "Solar"}
          </h1>
          <button
            className="w-[30px] h-[30px] lg:w-[20px] lg:h-[20px] ml-5"
            onClick={closeModal}
          >
            <Image
              src="/icons/close-icon.svg"
              width={500}
              height={500}
              alt="close-icon"
            />
          </button>
        </div>
        <div className="font-GorditaRegular text-sm mt-6 overflow-y-scroll sm:overflow-visible max-h-[450px] sm:max-h-full">
          <p>
            These estimates are subject to change based on your business&apos;
            individual usage.{" "}
          </p>
          <br />
          <p>
            To estimate the potential impact of purchasing this product we
            looked at Origin business customers within your industry (
            {industry?.name}) and found:{" "}
          </p>
          <br />
          {showContent === "carbonOffset" && (
            <div>
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>
                  <p className="font-medium mb-2">
                    Smaller customers (between 0 and 40kwh daily usage) on
                    average used {separator(Math.round(low * 365))} kwh per
                    year.
                  </p>
                  <ul className="text-sm pl-5 space-y-2 list-[circle]">
                    <li>
                      If offset would roughly be equivalent to the carbon{" "}
                      {separator(Math.round((carbonEmissions?.low * 365) / 10))}{" "}
                      -{" "}
                      {separator(Math.round((carbonEmissions?.low * 365) / 5))}{" "}
                      2 metre trees absorb per year{" "}
                    </li>
                    <li>
                      This would add approximately{" "}
                      {formatPrice(
                        Math.round(
                          (((low * 365) / 12) * offSet * level +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}{" "}
                      to your monthly bills.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium mb-2">
                    Medium customers (between 40 and 440kwh daily usage) on
                    average used {separator(Math.round(medium * 365))} kwh per
                    year.
                  </p>
                  <ul className="text-sm pl-5 space-y-2 list-[circle]">
                    <li>
                      If offset would roughly be equivalent to the carbon{" "}
                      {separator(
                        Math.round((carbonEmissions?.medium * 365) / 10)
                      )}{" "}
                      -{" "}
                      {separator(
                        Math.round((carbonEmissions?.medium * 365) / 5)
                      )}{" "}
                      2 metre trees absorb per year{" "}
                    </li>
                    <li>
                      This would add approximately{" "}
                      {formatPrice(
                        Math.round(
                          (((medium * 365) / 12) * offSet * level +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}{" "}
                      to your monthly bills.
                    </li>
                  </ul>
                </li>
                {high && (
                  <li>
                    <p className="font-medium mb-2">
                      Larger customers (over 440kwh daily usage) on average used{" "}
                      {separator(Math.round(high * 365))} kwh per year.
                    </p>
                    <ul className="text-sm pl-5 space-y-2 list-[circle]">
                      <li>
                        If offset would roughly be equivalent to the carbon{" "}
                        {separator(
                          Math.round((carbonEmissions?.high * 365) / 10)
                        )}{" "}
                        -{" "}
                        {separator(
                          Math.round((carbonEmissions?.high * 365) / 5)
                        )}{" "}
                        2 metre trees absorb per year{" "}
                      </li>
                      <li>
                        This would add approximately{" "}
                        {formatPrice(
                          Math.round(
                            (((high * 365) / 12) * offSet * level +
                              Number.EPSILON) *
                              100
                          ) / 100
                        )}{" "}
                        to your monthly bills.
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          )}
          {showContent === "greenPower" && (
            <div>
              <br />
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>
                  <p className="font-medium mb-2">
                    Smaller customers (between 0 and 40kwh daily usage) on
                    average used {separator(Math.round(low * 365))} kwh per
                    year.
                  </p>
                  <ul className="text-sm pl-5 space-y-2 list-[circle]">
                    <li>
                      ({level * 100}%) GreenPower would thus enable the
                      injection of electricity into the grid such as that
                      generated by{" "}
                      {`${
                        windTurbine(low).$d.days > 1
                          ? windTurbine(low).$d.days + " days "
                          : ""
                      } ${
                        windTurbine(low).$d.days === 1
                          ? windTurbine(low).$d.days + " day "
                          : ""
                      }
                  ${
                    windTurbine(low).$d.days > 0 &&
                    windTurbine(low).$d.hours > 0
                      ? "and "
                      : ""
                  } ${
                        windTurbine(low).$d.hours > 1
                          ? windTurbine(low).$d.hours + " hours"
                          : ""
                      }
                  ${
                    windTurbine(low).$d.hours === 1
                      ? windTurbine(low).$d.hours + " hour"
                      : ""
                  }`}{" "}
                      of a wind turbine.
                    </li>
                    <li>
                      This would add approximately{" "}
                      {formatPrice(
                        Math.round(
                          (((low * 365) / 12) * offSet * level +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}{" "}
                      to your monthly bills.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium mb-2">
                    Medium customers (between 40 and 440kwh daily usage) on
                    average used {separator(Math.round(low * 365))} kwh per
                    year.
                  </p>
                  <ul className="text-sm pl-5 space-y-2 list-[circle]">
                    <li>
                      ({level * 100}%) GreenPower would thus enable the
                      injection of electricity into the grid such as that
                      generated by{" "}
                      {`${
                        windTurbine(medium).$d.days > 1
                          ? windTurbine(medium).$d.days + " days "
                          : ""
                      } ${
                        windTurbine(medium).$d.days === 1
                          ? windTurbine(medium).$d.days + " day "
                          : ""
                      }
                  ${
                    windTurbine(medium).$d.days > 0 &&
                    windTurbine(medium).$d.hours > 0
                      ? "and "
                      : ""
                  } ${
                        windTurbine(medium).$d.hours > 1
                          ? windTurbine(medium).$d.hours + " hours"
                          : ""
                      }
                  ${
                    windTurbine(medium).$d.hours === 1
                      ? windTurbine(medium).$d.hours + " hour"
                      : ""
                  }`}{" "}
                      of a wind turbine.
                    </li>
                    <li>
                      This would add approximately{" "}
                      {formatPrice(
                        Math.round(
                          (((medium * 365) / 12) * offSet * level +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}{" "}
                      to your monthly bills.
                    </li>
                  </ul>
                </li>
                {high && (
                  <li>
                    <p className="font-medium mb-2">
                      Larger customers (over 440kwh daily usage) on average used{" "}
                      {separator(Math.round(high * 365))} kwh per year.
                    </p>
                    <ul className="text-sm pl-5 space-y-2 list-[circle]">
                      <li>
                        ({level * 100}%) GreenPower would thus enable the
                        injection of electricity into the grid such as that
                        generated by{" "}
                        {`${
                          windTurbine(high).$d.days > 1
                            ? windTurbine(high).$d.days + " days "
                            : ""
                        } ${
                          windTurbine(high).$d.days === 1
                            ? windTurbine(high).$d.days + " day "
                            : ""
                        }
                  ${
                    windTurbine(high).$d.days > 0 &&
                    windTurbine(high).$d.hours > 0
                      ? "and "
                      : ""
                  } ${
                          windTurbine(high).$d.hours > 1
                            ? windTurbine(high).$d.hours + " hours"
                            : ""
                        }
                  ${
                    windTurbine(high).$d.hours === 1
                      ? windTurbine(high).$d.hours + " hour"
                      : ""
                  }`}{" "}
                        of a wind turbine.
                      </li>
                      <li>
                        This would add approximately{" "}
                        {formatPrice(
                          Math.round(
                            (((high * 365) / 12) * offSet * level +
                              Number.EPSILON) *
                              100
                          ) / 100
                        )}{" "}
                        to your monthly bills.
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          )}
          {showContent === "solar" && (
            <div>
              <br />
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li>
                  <p className="font-medium mb-2">
                    Smaller customers (between 0 and 40kwh daily usage) on
                    average used {separator(Math.round(low * 365))} kwh per
                    year.
                  </p>
                  <ul className="text-sm pl-5 space-y-2 list-[circle]">
                    <li>
                      If replaced with Solar energy equals to emission reduction
                      of removing approximately{" "}
                      {cars(carbonEmissions?.low) > 1
                        ? `${separator(cars(carbonEmissions?.low))} cars`
                        : `${cars(carbonEmissions?.low)} car`}{" "}
                      cars from the road.
                    </li>
                    <li>
                      And would save you up to an estimated{" "}
                      {formatPrice(
                        Math.round(
                          (Math.round(
                            ((low * offSet * 365) / 12 + Number.EPSILON) * 100
                          ) /
                            100 -
                            industry?.withSolarCost?.low +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}{" "}
                      per month.
                    </li>
                  </ul>
                </li>
                <li>
                  <p className="font-medium mb-2">
                    Medium customers (between 40 and 440kwh daily usage) on
                    average used {separator(Math.round(medium * 365))} kwh per
                    year.
                  </p>
                  <ul className="text-sm pl-5 space-y-2 list-[circle]">
                    <li>
                      If replaced with Solar energy equals to emission reduction
                      of removing approximately{" "}
                      {cars(carbonEmissions?.medium) > 1
                        ? `${separator(cars(carbonEmissions?.medium))} cars`
                        : `${cars(carbonEmissions?.medium)} car`}{" "}
                      cars from the road.
                    </li>
                    <li>
                      And would save you up to an estimated{" "}
                      {formatPrice(
                        Math.round(
                          (Math.round(
                            ((medium * offSet * 365) / 12 + Number.EPSILON) *
                              100
                          ) /
                            100 -
                            industry?.withSolarCost?.medium +
                            Number.EPSILON) *
                            100
                        ) / 100
                      )}{" "}
                      per month.
                    </li>
                  </ul>
                </li>
                {high && (
                  <li>
                    <p className="font-medium mb-2">
                      Larger customers (over 440kwh daily usage) on average used{" "}
                      {separator(Math.round(high * 365))} kwh per year.
                    </p>
                    <ul className="text-sm pl-5 space-y-2 list-[circle]">
                      <li>
                        If replaced with Solar energy equals to emission
                        reduction of removing approximately{" "}
                        {cars(carbonEmissions?.high) > 1
                          ? `${separator(cars(carbonEmissions?.high))} cars`
                          : `${cars(carbonEmissions?.high)} car`}{" "}
                        cars from the road.
                      </li>
                      <li>
                        And would save you up to an estimated{" "}
                        {formatPrice(
                          Math.round(
                            (Math.round(
                              ((high * offSet * 365) / 12 + Number.EPSILON) *
                                100
                            ) /
                              100 -
                              industry?.withSolarCost?.high +
                              Number.EPSILON) *
                              100
                          ) / 100
                        )}{" "}
                        per month.
                      </li>
                    </ul>
                  </li>
                )}
              </ul>
            </div>
          )}
          <div className="text-xs mt-6">
            <p>
              To understand which approximation may best reflect your
              business&apos; circumstances, please call 1300-674-446 (PIN 124)
              or email{" "}
              <span className="font-medium">shift@originenergy.com.au</span> and
              speak with one of our Business Club Specialists.{" "}
            </p>
            <br />
            <p className="italic">
              For our estimates we leveraged the following data:
            </p>
            <br />
            {showContent === "carbonOffset" && (
              <div className="p-2">
                <p className="underline mb-1">
                  Australian Department of Agriculture, Fisheries and Forestry
                </p>
                <a
                  className="hover:underline"
                  href="https://www.awe.gov.au/agriculture-land/land/publications/20-million-trees-program-review"
                >
                  https://www.awe.gov.au/agriculture-land/land/publications/20-million-trees-program-review
                </a>
                <br />
                <br />
                <p className="underline mb-1">
                  Australian Department of Industry, Science and Resources
                </p>
                <a
                  className="hover:underline"
                  href="https://www.industry.gov.au/regulations-and-standards/methods-for-the-emissions-reduction-fund "
                >
                  https://www.industry.gov.au/regulations-and-standards/methods-for-the-emissions-reduction-fund
                </a>
              </div>
            )}
            {showContent === "greenPower" && (
              <div className="p-2">
                <p className="underline mb-1">
                  Australian Energy Market Operator
                </p>
                <a
                  className="hover:underline"
                  href="https://aemo.com.au/newsroom/news-updates/aemo-welcomes-new-connections-lead-as-the-grid-prepares-for-influx-of-renewables"
                >
                  https://aemo.com.au/newsroom/news-updates/aemo-welcomes-new-connections-lead-as-the-grid-prepares-for-influx-of-renewables
                </a>
                <br />
                <br />
                <p className="underline mb-1">
                  Australian Energy Market Operator
                </p>
                <a
                  className="hover:underline"
                  href="https://aemo.com.au/en/energy-systems/electricity/national-electricity-market-nem/data-nem/data-dashboard-nem"
                >
                  https://aemo.com.au/en/energy-systems/electricity/national-electricity-market-nem/data-nem/data-dashboard-nem
                </a>
              </div>
            )}
            {showContent === "solar" && (
              <div className="p-2">
                <p className="underline mb-1">
                  Australian National Transport Commission
                </p>
                <a
                  className="hover:underline"
                  href="https://www.ntc.gov.au/sites/default/files/assets/files/Carbon-dioxide-emissions-intensity-for-new-Australian-light-vehicles-2019.pdf"
                >
                  https://www.ntc.gov.au/sites/default/files/assets/files/Carbon-dioxide-emissions-intensity-for-new-Australian-light-vehicles-2019.pdf
                </a>
                <br />
                <br />
                <p className="underline mb-1">Budget Direct</p>
                <a
                  className="hover:underline"
                  href="https://www.budgetdirect.com.au/car-insurance/research/average-kilometers-driven.html#:~:text=This%20means%20that%20Victorian%20drivers,or%2037.9%20kilometres%20a%20day."
                >
                  https://www.budgetdirect.com.au/car-insurance/research/average-kilometers-driven.html#:~:text=This%20means%20that%20Victorian%20drivers,or%2037.9%20
                  <br />
                  kilometres%20a%20day.
                </a>
              </div>
            )}
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ImpactRanges;
