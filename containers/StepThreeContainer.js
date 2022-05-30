import React from "react";
import QuestionContainer from "./QuestionContainer";
import IconsRadioQuestion from "../components/IconsRadioQuestion";
import RadioQuestion from "../components/RadioQuestion";
import ButtonQuestion from "../components/ButtonQuestion";

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
      <QuestionContainer id={investmentQsts?.id} text={investmentQsts?.text}>
        {investmentQsts.options?.map((item, index) => (
          <RadioQuestion key={index} text={item.text} />
        ))}
      </QuestionContainer>
      {/* STEP THREE - QUESTION 3 */}
      <QuestionContainer id={largerInvQsts?.id} text={largerInvQsts?.text}>
        <ButtonQuestion options={largerInvQsts?.options} />
      </QuestionContainer>
    </>
  );
};

export default StepThreeContainer;
