import React, { useState, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";
import IconsRadioQuestion from "../components/IconsRadioQuestion";
import RadioQuestion from "../components/RadioQuestion";
import ButtonQuestion from "../components/ButtonQuestion";

const StepThreeContainer = ({
  iconsRadioQsts,
  investmentQsts,
  largerInvQsts,
  setStepThreeAns,
  stepThreeAns,
}) => {
  useEffect(() => {
    console.log(stepThreeAns);
  }, [stepThreeAns]);

  return (
    <>
      {/* STEP THREE - QUESTION 1 */}
      <QuestionContainer id={iconsRadioQsts?.id} text={iconsRadioQsts?.text}>
        <IconsRadioQuestion
          qst={iconsRadioQsts?.options}
          answer={setStepThreeAns}
          answers={stepThreeAns}
        />
      </QuestionContainer>
      {/* STEP THREE - QUESTION 2 */}
      <QuestionContainer id={investmentQsts?.id} text={investmentQsts?.text}>
        {investmentQsts.options?.map((item, index) => (
          <RadioQuestion
            id={index}
            key={index}
            text={item.text}
            answer={setStepThreeAns}
            answers={stepThreeAns}
          />
        ))}
      </QuestionContainer>
      {/* STEP THREE - QUESTION 3 */}
      <QuestionContainer id={largerInvQsts?.id} text={largerInvQsts?.text}>
        <ButtonQuestion
          options={largerInvQsts?.options}
          answer={setStepThreeAns}
          answers={stepThreeAns}
        />
      </QuestionContainer>
    </>
  );
};

export default StepThreeContainer;
