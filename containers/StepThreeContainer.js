import React from "react";
import QuestionContainer from "./QuestionContainer";
import IconsRadioQuestion from "../components/IconsRadioQuestion";

const StepThreeContainer = ({
  iconsRadioQsts,
  investmentQsts,
  largerInvQsts,
}) => {
  return (
    <>
      {/* STEP THREE - QUESTION 1 */}
      <QuestionContainer id={iconsRadioQsts?.id} text={iconsRadioQsts?.text}>
        <IconsRadioQuestion qst={iconsRadioQsts?.options} />
      </QuestionContainer>
      {/* STEP THREE - QUESTION 2 */}
      <QuestionContainer
        id={investmentQsts?.id}
        text={investmentQsts?.text}
      ></QuestionContainer>
    </>
  );
};

export default StepThreeContainer;
