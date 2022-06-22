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

const Assessment = ({ questions }) => {
  const router = useRouter();

  const [buttonQuestions, setButtonQuestions] = useState({});
  const [checkboxQuestions, setCheckboxQuestions] = useState([]);
  const [radioQuestions, setRadioQuestions] = useState({});
  const [iconsQuestions, setIconsQuestions] = useState({});
  const [sliderQuestion, setSliderQuestion] = useState({});
  const [dropdownQuestions, setDropdownQuestions] = useState({});
  const [energyUsageQuestions, setEnergyUsage] = useState({});
  const [goalsQuestion, setGoals] = useState({});
  const [landQuestion, setLand] = useState({});
  const [iconsRadioQuestion, setIconsRadioQuestion] = useState({});
  const [investmentQuestion, setInvestment] = useState({});
  const [largerInvestmentQuestion, setLargerInvestment] = useState({});
  const [timeAndEnergyQuestion, setTimeAndEnergy] = useState({});
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
  useEffect(() => {
    questions.map((item) => {
      if (item.buttonQuestion !== undefined) {
        setButtonQuestions(item.buttonQuestion);
      } else if (item.checkboxQuestion !== undefined) {
        setCheckboxQuestions(item.checkboxQuestion);
      } else if (item.radioQuestion !== undefined) {
        setRadioQuestions(item.radioQuestion);
      } else if (item.iconsQuestion !== undefined) {
        setIconsQuestions(item.iconsQuestion);
      } else if (item.sliderQuestion !== undefined) {
        setSliderQuestion(item.sliderQuestion);
      } else if (item.dropdownQuestion !== undefined) {
        setDropdownQuestions(item.dropdownQuestion);
      } else if (item.energyUsageQuestion !== undefined) {
        setEnergyUsage(item.energyUsageQuestion);
      } else if (item.goalsQuestion !== undefined) {
        setGoals(item.goalsQuestion);
      } else if (item.landQuestion !== undefined) {
        setLand(item.landQuestion);
      } else if (item.iconsRadioQuestion !== undefined) {
        setIconsRadioQuestion(item.iconsRadioQuestion);
      } else if (item.investmentQuestion !== undefined) {
        setInvestment(item.investmentQuestion);
      } else if (item.largerInvestmentQuestion !== undefined) {
        setLargerInvestment(item.largerInvestmentQuestion);
      } else if (item.timeAndEnergy !== undefined) {
        setTimeAndEnergy(item.timeAndEnergy);
      }
    });
  }, [questions]);

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
          })
        // Clear StepNo
      );
  };

  return (
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
              />
            )}
          </div>
          <div className="flex gap-16 mt-16 justify-between sm:justify-start">
            {stepNo !== 1 && (
              <Button
                size="large"
                style={{
                  fontWeight: 600,
                }}
                onClick={stepBackwardHandler}
              >
                Back
              </Button>
            )}

            <div className="">
              {stepNo !== 2 ? (
                <Button
                  size="large"
                  variant="contained"
                  style={{
                    borderRadius: 200,
                    boxShadow: "none",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                  }}
                  onClick={stepForwardHandler}
                >
                  Next
                </Button>
              ) : (
                <Button
                  size="large"
                  variant="contained"
                  style={{
                    borderRadius: 200,
                    boxShadow: "none",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                  }}
                  onClick={submitAssessment}
                >
                  View recommendations
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
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
