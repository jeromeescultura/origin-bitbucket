import { useDebugValue, useEffect, useState } from "react";
import { server } from "../../config";
import Image from "next/image";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import ContentContainer from "../../containers/ContentContainer";
import { FormInputText } from "../../form-components/FormInputText";

import FormInputDropdown from "../../form-components/FormInputDropdown";
import LeafRating from "../../components/LeafRating";

import {
  Grid,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import FormInputButton from "../../form-components/FormInputButton";
import ButtonQuestion from "../../components/ButtonQuestion";
import MoreDetailsComponent from "../../components/MoreDetailsComponent";
import ContactForms from "../../components/ContactForms";
import PledgeModal from "../../components/signup/PledgeModal";

function signup() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const recommendData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("RECOMMENDED")
    ) || null;

  const [product, setProduct] = useState("");
  const [greenPowerLevel, setGreenPowerLevel] = useState(0);
  const [extraCost, setExtraCost] = useState(0);
  const [estimatedSavings, setEstimatedSavings] = useState(0);
  const [biggerDiff, setBiggerDiff] = useState([]);
  const [impact, setImpact] = useState("");
  const [pledgeModal, setPledgeModal] = useState(false);

  const openModal = () => setPledgeModal(true);
  const closeModal = () => setPledgeModal(false);

  useEffect(() => {
    if (recommendData !== null) {
      setProduct(recommendData.product);
      setGreenPowerLevel(recommendData.greenPowerLevel);
      setExtraCost(recommendData.extraCost);
      setEstimatedSavings(recommendData.estimatedSavings);
      setBiggerDiff(recommendData.biggerDiff);
      setImpact(recommendData.impact);
    }
  }, []);

  return (
    <div className="bg-primaryBG pb-32">
      <section className="pt-6 lg:pt-8 ">
        <div className="w-full xl:w-[1108px] mx-auto">
          <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
            <Image
              src="/images/origin-logo.svg"
              width={90}
              height={90}
              objectFit="contain"
              alt="origin-logo"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="text-center font-light w-full mt-4 lg:-mt-8">
          <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
            Applying to Origin&#39;s Clean Ambition Program
          </h2>
          <p className="subtitle my-6 leading-loose w-[300px] sm:w-full mx-auto">
            Thank you for choosing to join the program!
          </p>
        </div>
      </section>

      <ContentContainer style="grid gap-6 lg:gap-8 lg:grid-col-5 lg:grid-flow-col lg:grid-flow-col">
        <section className="w-full  lg:order-2 lg:col-span-2 relative z-10">
          <div className="hidden xl:inline absolute w-[150px]  top-[50px] -right-[125px] -z-10">
            <Image
              src="/icons/bg-plant.svg"
              width={180}
              height={180}
              objectFit="contain"
              alt="Plant"
            />
          </div>
          <div className="bg-white py-8 px-4 lg:p-12 rounded-lg">
            <div className="text-center space-y-2">
              <p className="text-sm pb-4">You have chosen to pledge with</p>
              <LeafRating
                count={
                  (product === "carbonOffset" && 2) ||
                  (product === "greenPower" && 3) ||
                  (product === "solar" && 4)
                }
              />
              <p className="font-medium subtitle">
                {product === "carbonOffset" &&
                  "Origin Go Zero 100% carbon offset"}
                {product === "greenPower" && `GreenPower ${greenPowerLevel}%`}
                {product === "solar" && "Solar"}
              </p>
              <Button className="lg:hidden" onClick={openModal}>
                View details
              </Button>
            </div>
            <PledgeModal
              product={product}
              greenPowerLevel={greenPowerLevel}
              estimatedSavings={estimatedSavings}
              extraCost={extraCost}
              impact={impact}
              biggerDiff={biggerDiff}
              pledgeModal={pledgeModal}
              closeModal={closeModal}
            />
            <div className="lg:inline hidden text-center">
              <div className="space-y-1 mt-8">
                <p className="font-medium">How you reduce impact</p>
                <p>
                  {product === "carbonOffset" &&
                    "Through offsetting your energy use"}
                  {product === "greenPower" &&
                    "Through funding renewable generators"}
                  {product === "solar" &&
                    "Through using self generated renewable energy"}
                </p>
              </div>
              <div className="mt-8">
                <MoreDetailsComponent text="More Details">
                  <div className="flex">
                    <div className="space-y-2 mt-8 pr-5 border-r text-left">
                      <p className="font-medium">
                        {product === "solar"
                          ? "Estimated savings"
                          : "Estimated cost"}
                      </p>
                      <h2 className="text-secondaryText">
                        {product === "solar"
                          ? `$${estimatedSavings}`
                          : `$${extraCost}`}
                      </h2>
                      <p className="text-xs text-subTextColor">
                        extra p/month on any <br />
                        Origin Energy plan*
                      </p>
                    </div>
                    <div className="space-y-2 mt-8 pl-5">
                      <p className="font-medium">
                        By pledging you’ll get access to
                      </p>
                      <ul className="space-y-8 text-left py-8">
                        <li className="flex items-start gap-4">
                          <Image
                            src="/icons/check-yellow.svg"
                            width={20}
                            height={20}
                            objectFit="contain"
                            alt="check"
                          />
                          <p>
                            {" "}
                            <u>Progress reporting</u> on your impact
                          </p>
                        </li>
                        <li className="flex items-start gap-4">
                          <Image
                            src="/icons/check-yellow.svg"
                            width={20}
                            height={20}
                            objectFit="contain"
                            alt="check"
                          />
                          <p>
                            {" "}
                            <u>Free Marketing toolkit</u> to communicate your
                            impact to communicate your impact
                          </p>
                        </li>
                        <li className="flex items-start gap-4">
                          <Image
                            src="/icons/check-yellow.svg"
                            width={20}
                            height={20}
                            objectFit="contain"
                            alt="check"
                          />
                          <p>
                            {" "}
                            Dedicated <u>Good Change Club</u> support
                          </p>
                        </li>
                        {(product === "greenPower" || product === "solar") && (
                          <li className="flex items-start gap-4">
                            <Image
                              src="/icons/star.svg"
                              width={50}
                              height={50}
                              objectFit="contain"
                              alt="check"
                            />
                            {product === "greenPower" && (
                              <p>
                                <u>Tariff review</u> to reduce your overall
                                energy costs
                              </p>
                            )}
                            {product === "solar" && (
                              <p>
                                <u>Reduced energy costs</u> through self
                                generated power
                              </p>
                            )}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </MoreDetailsComponent>
              </div>
              <div className="space-y-2 mt-8">
                <p className="font-medium">
                  {product === "solar" ? "Estimated savings" : "Estimated cost"}
                </p>
                <h2>
                  {product === "solar"
                    ? `$${estimatedSavings}`
                    : `$${extraCost}`}
                </h2>
                <p className="text-xs text-subTextColor">
                  extra p/month on any <br />
                  Origin Energy plan*
                </p>
              </div>
              <div className="mt-16">
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
                    `If all businesses like yours did this, we could prevent ${impact[0]} tonnes of carbon from ever being emitted per year, equivalent to immidiately taking ${impact[1]} cars off the road.`}
                </p>
              </div>
              {biggerDiff.length > 0 && (
                <div className="mt-16">
                  <p className="font-medium">You’ve chosen to do more</p>
                  <div className="flex justify-center">
                    <div className="flex flex-col max-w-[227px]">
                      {biggerDiff.includes("interview") && (
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
                        <div className="flex justify-between gap-4 mt-4">
                          <div className="w-[70px] h-[70px]">
                            <Image
                              src="/icons/check-green.svg"
                              width={50}
                              height={50}
                              objectFit="contain"
                              alt="trees"
                            />
                          </div>
                          <p className="text-left">
                            GreenPower
                            <br />
                            One of our Good Change club representatives will get
                            in contact to review your GreenPower options
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <ContactForms
          text="Please give us a few details, and one of our specialists will contact
        you about finalising your application."
        />
      </ContentContainer>
    </div>
  );
}

export default signup;
