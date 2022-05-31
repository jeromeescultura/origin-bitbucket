import React, { useState, useEffect } from "react";
import ButtonQuestion from "../components/ButtonQuestion";
import SliderQuestion from "../components/SliderQuestion";
import CheckboxContainer from "./CheckboxContainer";
import QuestionContainer from "./QuestionContainer";

const StepOneContainer = ({
  btnQsts,
  chkBoxQsts,
  sldrQsts,
  glsQsts,
  stepOneAns,
  setStepOneAns,
}) => {
  useEffect(() => {
    console.log(stepOneAns);
  }, [stepOneAns]);

  return (
    <>
      {/* STEP ONE - QUESTION ONE */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <ButtonQuestion
          options={btnQsts?.options}
          answer={setStepOneAns}
          answers={stepOneAns}
        />
        <QuestionContainer style={"px-0"} text={glsQsts?.text}>
          <div className="w-full h-48 mt-6 lg:mt-12">
            <textarea
              name=""
              id=""
              className="w-full h-full border-2 rounded-xl resize-none focus:outline-none p-4 font-light"
              value={stepOneAns.QOne.goals}
              onChange={(e) =>
                setStepOneAns({
                  ...stepOneAns,
                  QOne: { ...stepOneAns.QOne, goals: e.target.value },
                })
              }
            ></textarea>
          </div>
        </QuestionContainer>
      </QuestionContainer>
      {/* STEP ONE - QUESTION TWO - VALUES NOT STORED YET */}
      <QuestionContainer
        id={chkBoxQsts[0]?.id}
        text={chkBoxQsts[0]?.text}
        subText={chkBoxQsts[0]?.subText}
      >
        {chkBoxQsts?.map((item, index) => (
          <CheckboxContainer
            id={index}
            key={index}
            icon={item?.icon}
            title={item?.title}
            questionsList={item?.questionsList}
            answer={setStepOneAns}
            answers={stepOneAns}
          />
        ))}
      </QuestionContainer>
      {/* STEP ONE - QUESTION THREE */}
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion
          answer={setStepOneAns}
          answers={stepOneAns}
          qst={sldrQsts?.options}
        />
      </QuestionContainer>
    </>
  );
};

export default StepOneContainer;
