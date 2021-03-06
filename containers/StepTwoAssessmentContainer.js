import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IconsQuestion from "../components/IconsQuestion";
import FormInputDropdown from "../form-components/FormInputDropdown";
import FormInputRadio from "../form-components/FormInputRadio";
import QuestionContainer from "./QuestionContainer";

const StepTwoAssessmentContainer = ({ buttonHandler, gatherAnswers }) => {
  const questions = {
    iconQsts: {
      id: "02",
      text: "What sort of energy sources do you rely on?",
      subText: "Select all that apply.",
      options: [
        {
          id: 1,
          value: "electricity",
          text: "Electricity",
          icon: "/icons/electricity.svg",
        },
        {
          id: 2,
          value: "natural_gas",
          text: "Natural gas",
          icon: "/icons/gas.svg",
        },
        {
          id: 3,
          value: "lpg",
          text: "LPG",
          icon: "/icons/lpg.svg",
        },
      ],
    },

    radioQsts: {
      id: "01",
      text: "How many business sites are you responsible for the energy management of?",
      options: [
        {
          id: 1,
          label: "1-2 sites",
          value: "1-2 sites",
        },
        {
          id: 2,
          label: "2-5 sites",
          value: "2-5 sites",
        },
        {
          id: 3,
          label: "5-10 sites",
          value: "5-10 sites",
        },
        {
          id: 4,
          label: "10+ sites",
          value: "10+ sites",
        },
        {
          id: 5,
          label: "No business sites - I operate out of my home",
          value: "none",
        },
      ],
    },

    dropDwnQsts: {
      id: "01",
      text: "What type of industry do your work in?",
      options: [
        {
          id: 1,
          label: "Accommodation and Food Services",
          value: "Accommodation and Food Services",
        },
        {
          id: 2,
          label: "Administrative and Support Services",
          value: "Administrative and Support Services",
        },
        {
          id: 3,
          label: "Agriculture, Forestry and Fishing",
          value: "Agriculture, Forestry and Fishing",
        },
        {
          id: 4,
          label: "Arts and Recreation Services",
          value: "Arts and Recreation Services",
        },
        {
          id: 5,
          label: "Construction",
          value: "Construction",
        },
        {
          id: 6,
          label: "Education and Training",
          value: "Education and Training",
        },
        {
          id: 7,
          label: "Electricity, Gas, Water and Waste Services",
          value: "Electricity, Gas, Water and Waste Services",
        },
        {
          id: 8,
          label: "Financial and Insurance Services",
          value: "Financial and Insurance Services",
        },
        {
          id: 9,
          label: "Health Care and Social Assistance",
          value: "Health Care and Social Assistance",
        },
        {
          id: 10,
          label: "Information Media and Telecommunications",
          value: "Information Media and Telecommunications",
        },
        {
          id: 11,
          label: "Manufacturing",
          value: "Manufacturing",
        },
        {
          id: 12,
          label: "Mining",
          value: "Mining",
        },
        {
          id: 13,
          label: "Professional, Scientific and Technical Services",
          value: "Professional, Scientific and Technical Services",
        },
        {
          id: 14,
          label: "Public Administration and Safety",
          value: "Public Administration and Safety",
        },
        {
          id: 15,
          label: "Rental, Hiring and Real Estate Services",
          value: "Rental, Hiring and Real Estate Services",
        },
        {
          id: 16,
          label: "Retail Trade",
          value: "Retail Trade",
        },
        {
          id: 17,
          label: "Transport, Postal and Warehousing",
          value: "Transport, Postal and Warehousing",
        },
        {
          id: 18,
          label: "Wholesale Trade",
          value: "Wholesale Trade",
        },
        {
          id: 19,
          label: "Other Services",
          value: "Other Services",
        },
      ],
    },

    enUsage: {
      id: "03",
      text: "Roughly when does your business use the most energy?",
      questionsList: [
        {
          id: 1,
          value: "constant",
          label: "Constant",
          subText:
            "It requires 24 hour supply (eg. to run refrigeration units or warehouse temperature)",
        },
        {
          id: 2,
          value: "mornings",
          label: "Mornings",
          subText: "Roughly between 1am ??? 9am",
        },
        {
          id: 3,
          value: "evenings",
          label: "Evenings",
          subText: "Roughly between 5pm - 1am",
        },
        {
          id: 4,
          value: "standard",
          label: "Standard times",
          subText: "Roughly between 9am - 5pm",
        },
        {
          id: 5,
          value: "unconstrained",
          label: "Unconstrained by specific operating hours",
          subText: "Energy use varies greatly depending on business priorities",
        },
      ],
    },

    btnQsts: {
      id: "04",
      text: "Do you have land or roof space where you are allowed to renovate, upgrade or install equipment?",
      options: [
        { id: 1, label: "Yes", value: "yes" },
        { id: 2, label: "At some of my sites", value: "some" },
        { id: 3, label: "No", value: "no" },
        { id: 4, label: "I'm not sure", value: "not_sure" },
      ],
    },
  };

  const { dropDwnQsts, radioQsts, iconQsts, enUsage, btnQsts } = questions;

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ) || null;

  const storedPrevData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || null;

  const [stepTwoAns, setStepTwoAns] = useState(storedData);
  const [typeOfIndustry, setTypeOfIndustry] = useState("");
  const [businessSites, setBusinessSites] = useState("");
  const [energySources, setEnergySources] = useState([]);
  const [energyUsage, setEnergyUsage] = useState("");
  const [spaceForInstallation, setSpaceForInstallation] = useState("");

  const methods = useForm({ defaultValues: stepTwoAns });
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      if (
        Object.keys(errors).includes("typeOfIndustry") ||
        Object.keys(errors).includes("businessSites")
      ) {
        document.getElementById("qone").scrollIntoView();
      } else if (Object.keys(errors).includes("energyUsage")) {
        document.getElementById("qthree").scrollIntoView();
      } else if (Object.keys(errors).includes("spaceForInstallation")) {
        document.getElementById("qfour").scrollIntoView();
      }
    }
  }, [errors]);

  useEffect(() => {
    if (storedData !== null) {
      setStepTwoAns(storedData);
      setTypeOfIndustry(storedData.typeOfIndustry);
      setBusinessSites(storedData.businessSites);
      setEnergySources(storedData.energySources);
      setEnergyUsage(storedData.energyUsage);
      setSpaceForInstallation(storedData.spaceForInstallation);
    }
  }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("STEP_TWO_ANS", JSON.stringify(stepTwoAns));
  // }, [stepTwoAns]);

  const handleChange = (data) =>
    setStepTwoAns({
      typeOfIndustry: data.typeOfIndustry,
      businessSites: data.businessSites,
      energySources: data.energySources,
      energyUsage: data.energyUsage,
      spaceForInstallation: data.spaceForInstallation,
    });

  const handleAnswers = () => {
    gatherAnswers(storedPrevData, stepTwoAns);
  };

  return (
    <>
      {/* STEP TWO - QUESTION 1 */}
      <div id="qone">
        <QuestionContainer id={dropDwnQsts?.id} text={dropDwnQsts?.text}>
          <div className="mt-8">
            <FormInputDropdown
              onChange={watch(handleChange)}
              name={"typeOfIndustry"}
              control={control}
              options={dropDwnQsts?.options}
              setValue={setValue}
              dropdownValue={typeOfIndustry}
              validation={{ required: "Please select an Industry" }}
              label={"Please select"}
              // id={dropdown?.id}
            />
          </div>

          <QuestionContainer style={"px-0"} text={radioQsts?.text}>
            <div className="mt-5">
              <FormInputRadio
                name={"businessSites"}
                control={control}
                options={radioQsts?.options}
                setValue={setValue}
                radioValue={businessSites}
                validation={{ required: "Please choose an option" }}
              />
            </div>
          </QuestionContainer>
        </QuestionContainer>
      </div>

      {/* STEP TWO - QUESTION 2 */}
      <QuestionContainer
        id={iconQsts?.id}
        text={iconQsts?.text}
        subText={iconQsts?.subText}
      >
        <div className="space-y-8 mt-12">
          <div className="">
            <IconsQuestion
              answer={setEnergySources}
              answers={energySources}
              setValue={setValue}
              name={"energySources"}
              options={iconQsts?.options}
            />
          </div>
        </div>
      </QuestionContainer>

      {/* STEP TWO - QUESTION 3 */}
      <div id="qthree">
        <QuestionContainer id={enUsage?.id} text={enUsage?.text}>
          <div className="mt-5">
            <FormInputRadio
              name={"energyUsage"}
              control={control}
              options={enUsage?.questionsList}
              setValue={setValue}
              radioValue={energyUsage}
              validation={{ required: "Please choose one" }}
            />
          </div>
        </QuestionContainer>
      </div>

      {/* STEP TWO - QUESTION 4 */}
      <div id="qfour">
        <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
          <div className="mt-8 w-full">
            <FormInputRadio
              name={"spaceForInstallation"}
              control={control}
              options={btnQsts?.options}
              setValue={setValue}
              radioValue={spaceForInstallation}
              validation={{ required: "Please choose an option" }}
            />
          </div>
        </QuestionContainer>
      </div>

      <div className="flex gap-2 xs:gap-12 mt-16 justify-between sm:justify-start">
        <Button
          size="large"
          style={{
            fontWeight: 600,
          }}
          onClick={() => buttonHandler("back")}
        >
          Back
        </Button>

        <div className="">
          <Button
            size="large"
            variant="contained"
            className="px-4 xs:px-4 sm:px-[2rem] text-xs xs:text-base"
            style={{
              borderRadius: 200,
              boxShadow: "none",
              backgroundColor: "#EC0000",
            }}
            onClick={handleSubmit(handleAnswers)}
          >
            View recommendations
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepTwoAssessmentContainer;
