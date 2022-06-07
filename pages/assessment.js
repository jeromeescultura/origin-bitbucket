import { useEffect, useState } from "react";
import { server } from "../config";
import { Button } from "@mui/material";

import ProgressBar from "../components/ProgressBar";
import PageIntro from "../components/PageIntro";
import ButtonComponent from "../components/ButtonComponent";
import StepOneContainer from "../containers/StepOneContainer";
import StepTwoContainer from "../containers/StepTwoContainer";
import StepThreeContainer from "../containers/StepThreeContainer";

const Assessment = ({ questions }) => {
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

  const assessIntro = [
    {
      header: "Climate action & your business",
      desc: "This initial set of questions are designed to understand what climate action means for you and your business.",
      plant: "/icons/plant.svg",
    },
    {
      header: "Your site & energy needs",
      desc: "To understand what options may be applicable to reduce your business impact from an energy perspective, tell us a little bit about what happens on-site to keep your business running.",
      plant: "/icons/plant2.svg",
    },
    {
      header: "Your program preferences",
      desc: "There are a number of different clean energy projects and services out there that are more suitable than others for you, which depend on certain preferences you may have. Let's understand these further.",
      plant: "/icons/plant3.svg",
    },
  ];

  // GETTING LOCAL STORAGE STORED ANSWERS
  const storedData = {
    storedStepOneAns: JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ),
    storedStepTwoAns: JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ),
    storedStepThreeAns: JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_THREE_ANS")
    ),
    storedPage: JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("PAGE")
    ),
    storedStep: JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("STEP")
    ),
  };

  // STORED STATE ANSWERS //
  // STEP ONE
  const [stepOneAns, setStepOneAns] = useState({
    QOne: { goals: "", choice: null },
    QTwo: { enSource: [], genOp: [] },
    QThree: "priority",
  });
  // STEP TWO
  const [stepTwoAns, setStepTwoAns] = useState({
    QOne: { industry: "", sites: 0 },
    QTwo: [],
    QThree: [],
    QFour: null,
  });
  // STEP THREE
  const [stepThreeAns, setStepThreeAns] = useState({
    QOne: 1,
    QTwo: 0,
    QThree: null,
  });

  const [stepNo, setStepNo] = useState(1);

  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);

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
      }
    });
  }, [questions]);

  // useEffect(() => {
  //   window.localStorage.setItem("PAGE", JSON.stringify(stepNo));
  //   window.localStorage.setItem("STEP", JSON.stringify(step));
  //   window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
  //   window.localStorage.setItem("STEP_TWO_ANS", JSON.stringify(stepTwoAns));
  //   window.localStorage.setItem("STEP_THREE_ANS", JSON.stringify(stepThreeAns));
  // }, [stepOneAns, stepTwoAns, stepThreeAns, stepNo, step]);

  // useEffect(() => {
  //   if (
  //     storedData.storedStepOneAns !== null &&
  //     storedData.storedStepTwoAns !== null &&
  //     storedData.storedStepThreeAns !== null &&
  //     storedData.storedPage !== null &&
  //     storedData.storedStep !== null
  //   ) {
  //     setStepOneAns(storedData.storedStepOneAns);
  //     setStepTwoAns(storedData.storedStepTwoAns);
  //     setStepThreeAns(storedData.storedStepThreeAns);
  //     setStepNo(storedData.storedPage);
  //     setStep(storedData.storedStep);
  //   }
  // }, []);

  const [activeState, changeState] = useState(0);

  const stepForwardHandler = () => {
    if (step.secondStep === "w-0 opacity-0") {
      setStep({ ...step, secondStep: "w-full opacity-100" });
    } else if (step.thirdStep === "w-0 opacity-0") {
      setStep({ ...step, thirdStep: "w-full opacity-100" });
    }

    setStepNo((prevState) => prevState + 1);

    changeState((prevState) => {
      if (activeState >= 2) {
        return 2;
      } else {
        return prevState + 1;
      }
    });
    if (stepNo >= 3) {
      setStepNo(3);

      if (stepNo === 3) {
        window.localStorage.clear();
        location.reload();
        window.scrollTo(0, 0);
      }
    }
    window.scrollTo({ top: 580, left: 0 });
  };

  const stepBackwardHandler = () => {
    if (step.thirdStep === "w-full opacity-100") {
      setStep({ ...step, thirdStep: "w-0 opacity-0" });
    } else if (step.secondStep === "w-full opacity-100") {
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

  return (
    <div className="bg-primaryBG h-full pb-16">
      <div className="bg-assessment-small-bg bg-top sm:bg-assessment-bg bg-no-repeat bg-contain h-full">
        <div className="w-[90%] md:w-[80%] mx-auto h-full">
          <ProgressBar
            stepOneAns={stepOneAns}
            stepTwoAns={stepTwoAns}
            stepThreeAns={stepThreeAns}
            step={step}
            stepNo={stepNo}
          />
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
                stepOneAns={stepOneAns}
                setStepOneAns={setStepOneAns}
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
                stepTwoAns={stepTwoAns}
                setStepTwoAns={setStepTwoAns}
              />
            )}

            {/* Step 3 */}
            {stepNo === 3 && (
              <StepThreeContainer
                iconsRadioQsts={iconsRadioQuestion}
                investmentQsts={investmentQuestion}
                largerInvQsts={largerInvestmentQuestion}
                stepThreeAns={stepThreeAns}
                setStepThreeAns={setStepThreeAns}
              />
            )}
          </div>
          <div className="flex gap-16 mt-16 justify-between sm:justify-start">
            {stepNo !== 1 && (
              <Button size="large" onClick={stepBackwardHandler}>
                Back
              </Button>
            )}

            <div className="">
              {stepNo !== 3 ? (
                <Button
                  size="large"
                  variant="contained"
                  style={{ borderRadius: 200 }}
                  onClick={stepForwardHandler}
                >
                  Next
                </Button>
              ) : (
                <Button
                  size="large"
                  variant="contained"
                  style={{ borderRadius: 200 }}
                  onClick={stepForwardHandler}
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

export async function getServerSideProps(context) {
  const questions = await fetch(`${server}/api/questions`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      questions,
    },
  };
}