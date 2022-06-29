import { useEffect, useState } from "react";
import { server } from "../config";
import { Button } from "@mui/material";

import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import ButtonComponent from "../components/ButtonComponent";
import StepOneContainer from "../containers/StepOneContainer";
import StepTwoContainer from "../containers/StepTwoContainer";
import StepThreeContainer from "../containers/StepThreeContainer";
import { useRouter } from "next/router";
import Head from "next/head";

const Assessment = ({ questions }) => {
  const {
    buttonQuestion,
    checkboxQuestion,
    dropdownQuestion,
    energyUsageQuestion,
    goalsQuestion,
    iconsQuestion,
    iconsRadioQuestion,
    investmentQuestion,
    landQuestion,
    largerInvestmentQuestion,
    radioQuestion,
    sliderQuestion,
    timeAndEnergy,
  } = questions;
  const router = useRouter();

  const [uuid, setUuid] = useState("");

  const assessIntro = [
    {
      header: "Sustainability & your business",
      desc: "This initial set of questions is designed to understand what sort of actions your business has taken so far - or are looking to explore further.",
      plant: "/icons/plant.svg",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
      plant: "/icons/plant2.svg",
    },
    // {
    //   header: "Your program preferences",
    //   desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let's understand these further.",
    //   plant: "/icons/plant3.svg",
    // },
  ];

  // GETTING LOCAL STORAGE STORED ANSWERS
  const storedData = {
    storedPage: JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("PAGE")
    ),
    storedStep: JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("STEP")
    ),
  };

  // STORED STATES //
  const [assessmentAnswers, setAssessmentAnswers] = useState({
    stepOneAns: {},
    stepTwoAns: {},
  });

  const [stepNo, setStepNo] = useState(1);

  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  // STORING ASSESSMENT ANSWERS TO LOCAL STORAGE
  useEffect(() => {
    window.localStorage.setItem(
      "ASSESSMENT_ANSWERS",
      JSON.stringify(assessmentAnswers)
    );
  }, [assessmentAnswers]);

  // SCROLL TO TOP WHEN PAGE IS LOADED
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

  // GETTING QUESTIONS DATA FROM API

  // STORE CURRENT PAGE TO LOCAL STORAGE
  useEffect(() => {
    window.localStorage.setItem("PAGE", JSON.stringify(stepNo));
    window.localStorage.setItem("STEP", JSON.stringify(step));
  }, [stepNo, step]);

  // GETTING STORED PAGE DATA FROM LOCAL STORAGE
  useEffect(() => {
    if (storedData.storedPage !== null && storedData.storedStep !== null) {
      setStepNo(storedData.storedPage);
      setStep(storedData.storedStep);
    }
  }, []);

  const [activeState, changeState] = useState(0);

  // FUNCTION TO HANDLE NEXT BUTTON
  const stepForwardHandler = () => {
    if (step.secondStep === "w-0 opacity-0") {
      setStep({ ...step, secondStep: "w-full opacity-100" });
    }

    if (stepNo < 2) {
      setStepNo((prevState) => prevState + 1);
    } else {
      router.push("/recommend");
    }

    changeState((prevState) => {
      if (activeState >= 2) {
        return 2;
      } else {
        return prevState + 1;
      }
    });

    window.scrollTo({ top: 580, left: 0 });
  };

  // FUNCTION TO HANDLE BACK BUTTON
  const stepBackwardHandler = () => {
    // if (step.thirdStep === "w-full opacity-100") {
    //   setStep({ ...step, thirdStep: "w-0 opacity-0" });
    // } else

    if (step.secondStep === "w-full opacity-100") {
      setStep({ ...step, secondStep: "w-0 opacity-0" });
    }

    setStepNo((prevState) => prevState - 1);
    changeState((prevState) => {
      if (activeState <= 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
    if (stepNo <= 1) {
      setStepNo(1);
    }
  };

  const submitAssessment = () => {
    const data = 234234234;
    const json = fetch("https://dev.peek.net.au/origin/answers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answers: [assessmentAnswers] }),
    })
      .then((response) => response.json())
      .then(
        (data) =>
          router.push({
            pathname: "/recommend",
            query: { uuid: data.uuid },
          }),
        window.localStorage.removeItem("PAGE"),
        window.localStorage.removeItem("STEP")
      );
  };

  return (

    <>
      <Head>
        <title>Origin Shift | Assessment</title>
        <meta
          property="og:title"
          content="Origin Shift Assessment tool"
          key="title"
        />
      </Head>

      <div className="bg-primaryBG h-full pb-16">
        <div className="bg-assessment-small-bg bg-top sm:bg-assessment-bg bg-no-repeat bg-contain h-full">
          <div className="w-[90%] md:w-[80%] mx-auto h-full">
            <ProgressBar step={step} stepNo={stepNo} />
            <PageIntro
              assessIntro={assessIntro}
              activeState={activeState}
              stepNo={stepNo}
            />
            <div className="space-y-8">
              {/* Step 1 */}
              {stepNo === 1 && (
                <StepOneContainer
                  btnQsts={buttonQuestions}
                  chkBoxQsts={checkboxQuestions}
                  sldrQsts={sliderQuestion}
                  glsQsts={goalsQuestion}
                  radioQsts={timeAndEnergyQuestion}
                  setAssessmentAnswers={setAssessmentAnswers}
                  stepForwardHandler={stepForwardHandler}
                />
              )}

              {/* Step 2 */}
              {stepNo === 2 && (
                <StepTwoContainer
                  dropDwnQsts={dropdownQuestions}
                  radioQsts={radioQuestions}
                  iconQsts={iconsQuestions}
                  chkBoxQsts={energyUsageQuestions}
                  btnQsts={landQuestion}
                  setAssessmentAnswers={setAssessmentAnswers}
                  stepBackwardHandler={stepBackwardHandler}
                  submitAssessment={submitAssessment}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;

export async function getServerSideProps() {
  const questions = await fetch(`${server}/api/questions`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      questions,
    },
  };
}
