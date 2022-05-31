import React from "react";
import ButtonQuestion from "../components/ButtonQuestion";
import SliderQuestion from "../components/SliderQuestion";
import CheckboxContainer from "./CheckboxContainer";
import QuestionContainer from "./QuestionContainer";

const StepOneContainer = ({ btnQsts, chkBoxQsts, sldrQsts, glsQsts }) => {
  return (
    <>
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <ButtonQuestion options={btnQsts?.options} />
        <QuestionContainer style={"px-0"} text={glsQsts?.text}>
          <div className="w-full h-48 mt-6 lg:mt-12">
            <textarea
              name=""
              id=""
              className="w-full h-full border-2 rounded-xl resize-none focus:outline-none p-4 font-light"
            ></textarea>
          </div>
        </QuestionContainer>
      </QuestionContainer>
      <QuestionContainer
        id={chkBoxQsts[0]?.id}
        text={chkBoxQsts[0]?.text}
        subText={chkBoxQsts[0]?.subText}
      >
        {chkBoxQsts?.map((item, index) => (
          <CheckboxContainer
            key={index}
            icon={item?.icon}
            title={item?.title}
            questionsList={item?.questionsList}
          />
        ))}
      </QuestionContainer>
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion qst={sldrQsts?.options} />
      </QuestionContainer>
    </>
  );
};

export default StepOneContainer;
