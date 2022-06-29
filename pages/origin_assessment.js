import { Button, ButtonGroup, CircularProgress } from "@mui/material";
import { data } from "autoprefixer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FormComponentTest from "../components/FormComponentTest";
import PageIntro from "../components/PageIntro";
import ProgressBar from "../components/ProgressBar";
import { server } from "../config";
import StepOneAssessmentContainer from "../containers/StepOneAssessmentContainer";
import StepTwoAssessmentContainer from "../containers/StepTwoAssessmentContainer";

const OriginAssessment = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  const router = useRouter();

  const [assessmentAnswers, setAssessmentAnswers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const assessIntro = [
    {
      header: "Sustainability & your business",
      desc: "This initial set of questions is designed to understand what sort of actions your business has taken so far - or are looking to explore further.",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
    },
  ];

  const storedPage =
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("PAGE")
    ) || null;
  const startAssesment =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STARTASSESSMENT")
    ) || null;

  useEffect(() => {
    if (startAssesment === null || undefined || "") router.push("/");
  }, [startAssesment]);

  const [stepNo, setStepNo] = useState(1);

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

  const submitAssessment = () => {
    console.log("STORED ASSESMENT NO SETTIMEOUT", assessmentAnswers);

    const json = fetch("https://dev.peek.net.au/origin/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers: assessmentAnswers }),
    })
      .then((response) => response.json(), setIsSubmitting(true))
      .then(
        (data) =>
          router.push({
            pathname: "/recommend",
            query: { uuid: data.uuid },
          }),
        window.localStorage.removeItem("PAGE")
      );
  };

  useEffect(() => {
    if (assessmentAnswers?.length > 0) {
      submitAssessment();
    }
  }, [assessmentAnswers]);

  const buttonHandler = (value) => {
    switch (value) {
      case "back":
        setStepNo(1);
        break;
      case "next":
        setStepNo(2);
        break;
      default:
        break;
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.localStorage.setItem("PAGE", JSON.stringify(stepNo));
  }, [stepNo]);

  useEffect(() => {
    if (storedPage !== null) {
      setStepNo(storedPage);
    }
  }, []);

  return (
    <div className="bg-primaryBG h-full pb-16">
      <div className="bg-assessment-small-bg bg-top sm:bg-assessment-bg bg-no-repeat bg-contain h-full">
        <div className="w-[90%] md:w-[80%] mx-auto h-full">
          <ProgressBar stepNo={stepNo} />
          <PageIntro assessIntro={assessIntro} stepNo={stepNo} />

          {isSubmitting ? (
            <div className="absolute inset-0 flex items-center justify-center w-full h-full bg-opacity-50 backdrop-blur-lg">
              <CircularProgress size="5rem" color="secondary" />
            </div>
          ) : (
            <div className="space-y-8 mt-12">
              {/* STEP ONE */}
              {stepNo === 1 && (
                <StepOneAssessmentContainer buttonHandler={buttonHandler} />
              )}

              {/* STEP TWO */}
              {stepNo === 2 && (
                <StepTwoAssessmentContainer
                  buttonHandler={buttonHandler}
                  gatherAnswers={gatherAnswers}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OriginAssessment;
