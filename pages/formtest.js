import { Button, ButtonGroup } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FormComponentTest from "../components/FormComponentTest";
import PageIntro from "../components/PageIntro";
import ProgressBar from "../components/ProgressBar";
import { server } from "../config";
import StepOneAssessmentContainer from "../containers/StepOneAssessmentContainer";
import StepTwoAssessmentContainer from "../containers/StepTwoAssessmentContainer";

const FormTest = ({ questions }) => {
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

  const [assessmentAnswers, setAssessmentAnswers] = useState([]);
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

  const [stepNo, setStepNo] = useState(1);

  const gatherAnswers = (param) => {
    console.log(param);
  };

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
    window.localStorage.setItem(
      "ASSESSMENT_ANSWERS",
      JSON.stringify(assessmentAnswers)
    );
  }, [assessmentAnswers]);

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

          <div className="space-y-8">
            {/* STEP ONE */}
            {stepNo === 1 && (
              <StepOneAssessmentContainer
                btnQsts={buttonQuestion}
                chkBoxQsts={checkboxQuestion}
                sldrQsts={sliderQuestion}
                glsQsts={goalsQuestion}
                radioQsts={timeAndEnergy}
                buttonHandler={buttonHandler}
                setAssessmentAnswers={setAssessmentAnswers}
                assessmentAnswers={assessmentAnswers}
                gatherAnswers={gatherAnswers}
              />
            )}

            {/* STEP TWO */}
            {stepNo === 2 && (
              <StepTwoAssessmentContainer buttonHandler={buttonHandler} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormTest;

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
