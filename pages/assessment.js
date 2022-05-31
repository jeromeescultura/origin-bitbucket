import { useEffect, useState } from "react";
import { server } from "../config";

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

  // STORED ANSWERS //
  // STEP ONE
  const [stepOneAns, setStepOneAns] = useState({
    QOne: { goals: "", choice: null },
    QTwo: { enSource: [], genOp: [] },
    QThree: 3,
  });
  // STEP TWO
  const [stepTwoAns, setStepTwoAns] = useState({
    QOne: { industry: "", sites: 0 },
    QTwo: [],
    QThree: [],
    QFour: 0,
  });
  // STEP THREE
  const [stepThreeAns, setStepThreeAns] = useState({
    QOne: 1,
    QTwo: 0,
    QThree: null,
  });

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

  const [step, setStep] = useState({
    secondStep: "w-0 opacity-0",
    thirdStep: "w-0 opacity-0",
  });

  const [stepNo, setStepNo] = useState(1);

  const [stepPage, setPage] = useState(questions[stepNo - 1]);

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

  const [activeState, changeState] = useState(0);

  const stepForwardHandler = () => {
    window.scrollTo({ top: 580, left: 0, behavior: "smooth" });
    if (step.secondStep === "w-0 opacity-0") {
      setStep({ ...step, secondStep: "w-full opacity-100" });
    } else if (step.thirdStep === "w-0 opacity-0") {
      setStep({ ...step, thirdStep: "w-full opacity-100" });
    }
    setStepNo((prevState) => prevState + 1);
    setPage(questions[stepNo - 1]);
    changeState((prevState) => {
      if (activeState >= 2) {
        return 2;
      } else {
        return prevState + 1;
      }
    });
    if (stepNo >= 3) {
      setStepNo(3);
      setPage(questions[stepNo - 1]);
    }
  };

  const stepBackwardHandler = () => {
    if (step.thirdStep === "w-full opacity-100") {
      setStep({ ...step, thirdStep: "w-0 opacity-0" });
    } else if (step.secondStep === "w-full opacity-100") {
      setStep({ ...step, secondStep: "w-0 opacity-0" });
    }
    setStepNo((prevState) => prevState - 1);
    setPage(questions[stepNo - 1]);
    changeState((prevState) => {
      if (activeState <= 0) {
        return 0;
      } else {
        return prevState - 1;
      }
    });
    if (stepNo <= 1) {
      setStepNo(1);
      setPage(questions[stepNo - 1]);
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
          <PageIntro assessIntro={assessIntro} activeState={activeState} />
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
              <button
                className="text-primaryText"
                onClick={stepBackwardHandler}
              >
                Back
              </button>
            )}

            <div className="">
              {stepNo !== 3 ? (
                <ButtonComponent text="Next" action={stepForwardHandler} />
              ) : (
                <ButtonComponent
                  text="View recommendations"
                  action={stepForwardHandler}
                />
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
