import { useDebugValue, useEffect, useState } from "react";
import { server } from "../config";
import Image from "next/image";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import ContentContainer from "../containers/ContentContainer";
import { FormInputText } from "../form-components/FormInputText";

import FormInputDropdown from "../form-components/FormInputDropdown";
import LeafRating from "../components/LeafRating";

import {
  Grid,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FormInputButton from "../form-components/FormInputButton";
import ButtonQuestion from "../components/ButtonQuestion";
import MoreDetailsComponent from "../components/MoreDetailsComponent";
import ContactForms from "../components/ContactForms";
import PledgeModal from "../components/signup/PledgeModal";
import Head from "next/head";
import { formatPrice } from "../functions/recofunctions/RecoFunctions";
import { ButtonTrackingEvent } from "../functions/analitycsEvents";

function Signup() {
  const router = useRouter();
  const source = router.query.src;
  const version = router.query.v;
  const handleClick = (e) => {
    ButtonTrackingEvent(e.target.name, "/");
    e.preventDefault();
    router.push(
      `/${
        source !== "" && source !== undefined && source !== null
          ? `?src=${source}&`
          : ""
      }${
        version !== "" && version !== undefined && source !== null
          ? `v=${version}`
          : ""
      }`
    );
  };

  // Redirect
  const userID =
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("USERID")
    ) || null;

  useEffect(() => {
    if (userID === null || undefined || "") {
      router.push("/");
    }
  }, [userID, router]);

  const recommendData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("PRODUCT_SELECTED")
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
    <>
      <Head>
        <title>Origin Shift | Signup</title>
        <meta property="og:title" content="Origin Shift Signup" key="title" />
      </Head>

      <div className="bg-primaryBG pb-32">
        <section className="pt-6 lg:pt-8 ">
          <div className="w-full xl:w-[1108px] mx-auto">
            <img
              src="/images/origin-logo.svg"
              className="w-16 lg:w-20 cursor-pointer pl-4"
              alt="origin-logo"
              name="go-home"
              onClick={(e) => handleClick(e)}
            />
            {/* <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
              <Image
                src="/images/origin-logo.svg"
                width={90}
                height={90}
                objectFit="contain"
                alt="origin-logo"
                name="go-home"
                onClick={(e) => handleClick(e)}
              />
            </div> */}
          </div>
          <div className="text-center font-light w-full mt-4 lg:-mt-8">
            <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
              Applying to Origin&#39;s Business Club
            </h2>
            <p className="subtitle my-6 leading-loose w-[300px] sm:w-full mx-auto">
              Thank you for showing interest in the Business Club!
            </p>
          </div>
        </section>

        <ContentContainer style="gap-6 lg:gap-8 grid grid-cols-1 lg:grid-cols-5">
          <section className="lg:col-span-2 lg:order-2 relative z-10">
            <div className="bg-white py-8 px-4 lg:p-12 rounded-lg">
              <div className="text-center space-y-2">
                <p className="text-sm pb-4">
                  You are interested in participating with
                </p>
                {/* <LeafRating
                count={
                  (product === "carbonOffset" && 2) ||
                  (product === "greenPower" && 3) ||
                  (product === "solar" && 4)
                }
              /> */}
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
                      "Through offsetting your electricity use"}
                    {product === "greenPower" &&
                      "Through funding renewable generators"}
                    {product === "solar" &&
                      "Through using self generated renewable electricity"}
                  </p>
                </div>
                <div className="mt-8">
                  <MoreDetailsComponent text="More Details">
                    <div className="grid grid-rows-3 text-left">
                      <div className="grid grid-cols-2 items-center border-t py-2">
                        <p className="font-medium">Plan</p>
                        <p>
                          Available on any Origin Electricity plan
                          {product === "solar"
                            ? " or as a stand-alone product"
                            : ""}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 items-center border-t py-2">
                        <p>Site changes</p>
                        <p> {product === "solar" ? "Yes" : "None"}</p>
                      </div>
                      <div className="grid grid-cols-2 items-center border-t pt-2">
                        <p>Lock-in contracts</p>
                        <p>None</p>
                      </div>
                    </div>
                  </MoreDetailsComponent>
                </div>
                {/* <div className="space-y-2 mt-8">
                  <p className="font-medium">
                    {product === "solar"
                      ? "Estimated savings"
                      : "Estimated cost"}
                  </p>
                  <h2>
                    {product === "solar"
                      ? formatPrice(estimatedSavings)
                      : formatPrice(extraCost)}
                  </h2>
                  <p className="text-xs text-subTextColor">
                    extra p/{product === "solar" ? "month" : "day"} on any{" "}
                    <br />
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
                      `If offset for one year, the average usage of an Origin small to medium business customer in your industry would be roughly equivalent to avoiding ${impact}kg of carbon emissions.`}
                    {product === "greenPower" &&
                      `If your business matched their electricity use to ${greenPowerLevel}% GreenPower, it would only take ${impact.replace(
                        ",",
                        " and"
                      )} to put the same amount of renewable energy back into the grid.`}
                    {product === "solar" &&
                      `If all businesses like yours did this, we could prevent ${impact[0]} tonnes of carbon from ever being emitted per year, equivalent to immidiately taking ${impact[1]} cars off the road.`}
                  </p>
                </div> */}
                {biggerDiff.length > 0 && (
                  <div className="mt-16">
                    <p className="font-medium">You&apos;ve chosen to do more</p>
                    <div className="flex justify-center">
                      <List className="space-y-5 text-sm max-w-[200px]">
                        {biggerDiff.includes("decarbonisation interview") && (
                          <ListItem className="p-0 items-start">
                            <ListItemIcon className="mt-1 w-[20px] h-[20px]">
                              <Image
                                src="/icons/check-green.svg"
                                width={50}
                                height={50}
                                objectFit="contain"
                                alt="trees"
                              />
                            </ListItemIcon>
                            <ListItemText className="m-0" disableTypography>
                              Participate in our Decarbonisation Interview
                            </ListItemText>
                          </ListItem>
                        )}
                        {biggerDiff.includes("greenPower") && (
                          <ListItem className="p-0 items-start">
                            <ListItemIcon className="mt-1 w-[20px] h-[20px]">
                              <Image
                                src="/icons/check-green.svg"
                                width={50}
                                height={50}
                                objectFit="contain"
                                alt="trees"
                              />
                            </ListItemIcon>
                            <ListItemText className="m-0" disableTypography>
                              GreenPower
                              <br />
                              One of our Business Club representatives will get
                              in contact to review your GreenPower options
                            </ListItemText>
                          </ListItem>
                        )}
                      </List>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
          <div className="lg:col-span-3 lg:order-1 ">
            <ContactForms
              source={source}
              version={version}
              text="Please give us a few details, and one of our Business Club Specialists will contact
        you about finalising your application."
            />
          </div>
        </ContentContainer>
      </div>
    </>
  );
}

export default Signup;

export async function getStaticProps() {
  return {
    props: { page: "Signup Page" },
  };
}
