import { Button, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import IconsQuestion from "../components/IconsQuestion";
import FormInputDropdown from "../form-components/FormInputDropdown";
import FormInputRadio from "../form-components/FormInputRadio";
import QuestionContainer from "../containers/QuestionContainer";
import { useRouter } from "next/router";
import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import Head from "next/head";

const AssessmentSecondStep = () => {
  const [displayContents, setDisplayContents] = useState();

  const startAssesment =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STARTASSESSMENT")
    ) || null;

  useEffect(() => {
    if (startAssesment === null || undefined || "") {
      router.push("/");
    } else {
      setDisplayContents(startAssesment);
    }
  }, [startAssesment]);

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(!animate);
    setTimeout(() => setAnimate(false), 500);
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

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
          subText: "Roughly between 1am – 9am",
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

  const [stepTwoAns, setStepTwoAns] = useState({
    typeOfIndustry: "",
    businessSites: null,
    energySources: [],
    energyUsage: "",
    spaceForInstallation: "",
  });
  const [typeOfIndustry, setTypeOfIndustry] = useState("");
  const [businessSites, setBusinessSites] = useState("");
  const [energySources, setEnergySources] = useState([]);
  const [energyUsage, setEnergyUsage] = useState("");
  const [spaceForInstallation, setSpaceForInstallation] = useState("");

  const [assessmentAnswers, setAssessmentAnswers] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  useEffect(() => {
    window.localStorage.setItem("STEP_TWO_ANS", JSON.stringify(stepTwoAns));
  }, [stepTwoAns]);

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

  const gatherAnswers = (stepOne, stepTwo) => {
    let tempStore = [
      [
        {
          id: "implementSustainability",
          answer: stepOne.implementSustainability,
          extra: stepOne.goalsConsidered,
        },
        [
          {
            id: "energySourceChanges",
            answer: stepOne.energySourceChanges,
            extra: stepOne.energySourceOtherInfo,
          },
          {
            id: "generalOperationsChanges",
            answer: stepOne.generalOperationsChanges,
            extra: stepOne.generalOpsOtherInfo,
          },
        ],
        { id: "timeAndEnergy", answer: stepOne.timeAndEnergy },
        { id: "howMuchPriority", answer: stepOne.howMuchPriority },
      ],
      [
        {
          id: "typeOfIndustry",
          answer: stepTwo.typeOfIndustry,
          businessSites: stepTwo.businessSites,
        },
        { id: "energySources", answer: stepTwo.energySources },
        { id: "energyUsage", answer: stepTwo.energyUsage },
        { id: "spaceForInstallation", answer: stepTwo.spaceForInstallation },
      ],
    ];
    setAssessmentAnswers(tempStore);
  };

  useEffect(() => {
    if (assessmentAnswers?.length > 0) {
      submitAssessment();
    }
  }, [assessmentAnswers]);

  const submitAssessment = () => {
    const json = fetch(
      "https://y22dnwyvbl.execute-api.ap-southeast-2.amazonaws.com/NonProd/answers",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers: assessmentAnswers }),
      }
    )
      .then((response) => response.json(), setIsSubmitting(true))
      .then(
        (data) =>
          router.push({
            pathname: "/recommend",
            query: { src:source, v:version, uuid: data.UUID },
          },`/recommend&uuid=${data.UUID}`),
        window.localStorage.removeItem("PAGE")
      );
  };

  const router = useRouter();
  const source = router.query.src;
  const version = router.query.v;
  console.log("source: ", source);
  console.log("version: ", version);
  return (
    <>
      <Head>
        <title>Origin Shift | Step Two</title>
        <meta
          property="og:title"
          content="Origin Shift Assessment tool"
          key="title"
        />
      </Head>

      <div className="bg-primaryBG h-full pb-16">
        <div className="bg-assessment-small-bg bg-top sm:bg-assessment-bg bg-no-repeat bg-contain h-full">
          <div
            className={`w-[90%] md:w-[80%] mx-auto h-full  ${
              displayContents === true ? "visible" : "invisible"
            }  `}
          >
            <ProgressBar />
            <PageIntro />

            {isSubmitting ? (
              <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-opacity-50 backdrop-blur-lg">
                <CircularProgress size="5rem" color="secondary" />
              </div>
            ) : (
              <div
                className={`space-y-8 ${
                  animate
                    ? "opacity-0 translate-x-3"
                    : "opacity-100 translate-x-0"
                } transition duration-500 ease-in-out`}
              >
                {/* STEP TWO - QUESTION 1 */}
                <div id="qone">
                  <QuestionContainer
                    id={dropDwnQsts?.id}
                    text={dropDwnQsts?.text}
                  >
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
                    onClick={() => router.push("/assessment_firststep")}
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
                      View options
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentSecondStep;
