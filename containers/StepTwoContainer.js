import React, { useState, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";
import DropdownQuestion from "../components/DropdownQuestion";
import RadioQuestion from "../components/RadioQuestion";
import IconsQuestion from "../components/IconsQuestion";
import CheckboxComponent from "../components/CheckboxComponent";
import ButtonQuestion from "../components/ButtonQuestion";

const StepTwoContainer = ({
  dropDwnQsts,
  radioQsts,
  iconQsts,
  chkBoxQsts,
  btnQsts,
  stepTwoAns,
  setStepTwoAns,
}) => {
  useEffect(() => {
    console.log(stepTwoAns);
  }, [stepTwoAns]);
  return (
    <>
      {/* STEP TWO - QUESTION 1 */}
      <QuestionContainer id={dropDwnQsts?.id} text={dropDwnQsts?.text}>
        <DropdownQuestion
          qst={dropDwnQsts?.options}
          answer={setStepTwoAns}
          answers={stepTwoAns}
        />
        <QuestionContainer style={"px-0"} text={radioQsts?.text}>
          {radioQsts.options?.map((item, index) => (
            <RadioQuestion
              id={index}
              text={item.text}
              key={index}
              answer={setStepTwoAns}
              answers={stepTwoAns}
            />
          ))}
        </QuestionContainer>
      </QuestionContainer>
      {/* STEP TWO - QUESTION 2 */}
      <QuestionContainer
        id={iconQsts?.id}
        text={iconQsts?.text}
        subText={iconQsts?.subText}
      >
        <div className="space-y-8 mt-12">
          <div className="flex flex-col lg:flex-row md:gap-4">
            {iconQsts.options?.map((item, index) => (
              <IconsQuestion
                key={index}
                id={index}
                ans={item.value}
                text={item.text}
                icon={item.icon}
                answer={setStepTwoAns}
                answers={stepTwoAns}
              />
            ))}
          </div>
        </div>
      </QuestionContainer>
      {/* STEP TWO - QUESTION 3 */}
      <QuestionContainer id={chkBoxQsts?.id} text={chkBoxQsts?.text}>
        <div className="space-y-12 mt-8 lg:mt-7">
          {" "}
          {chkBoxQsts.questionsList?.map((item, index) => (
            <CheckboxComponent
              text={item?.text}
              key={index}
              subText={item?.subText}
              answer={setStepTwoAns}
              answers={stepTwoAns}
              ans={item.value}
            />
          ))}
        </div>
      </QuestionContainer>
      {/* STEP TWO - QUESTION 4 */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <ButtonQuestion
          options={btnQsts?.options}
          answer={setStepTwoAns}
          answers={stepTwoAns}
        />
      </QuestionContainer>
    </>
  );
};

export default StepTwoContainer;
