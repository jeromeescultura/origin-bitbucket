import React, { useState, useEffect } from "react";
import ButtonQuestion from "../components/ButtonQuestion";
import SliderQuestion from "../components/SliderQuestion";
import CheckboxContainer from "./CheckboxContainer";
import QuestionContainer from "./QuestionContainer";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Slider,
} from "@mui/material";
import Image from "next/image";

const StepOneContainer = ({
  btnQsts,
  chkBoxQsts,
  sldrQsts,
  glsQsts,
  stepOneAns,
  setStepOneAns,
}) => {
  const [btn, setBtn] = useState({
    btn1: false,
    btn2: false,
  });

  const [selectedCheckbox, setCheckbox] = useState(false);

  const activeStyles =
    "bg-highlight border-[#FFB432] font-bold hover:border-[#FFB432] hover:bg-highlight cursor-default";

  const notActiveStyles = "bg-white font-light hover:border-gray-300";

  const storedData = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("STEP_ONE_ANS")
  );

  useEffect(() => {
    window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
  }, [stepOneAns]);

  useEffect(() => {
    if (storedData !== null) {
      setStepOneAns(storedData);
    }
  }, []);

  useEffect(() => {
    if (stepOneAns) {
      if (typeof stepOneAns.QOne !== "number") {
        if ("choice" in stepOneAns.QOne) {
          if (typeof stepOneAns.QOne?.choice !== "object") {
            handleButtonClick(stepOneAns.QOne?.choice);
          }
        }
      }
    }
  }, [stepOneAns.QOne?.choice]);

  // FUNCTION FOR BUTTON QUESTION
  const handleButtonClick = (value) => {
    if (typeof stepOneAns.QOne !== "number") {
      if ("choice" in stepOneAns.QOne) {
        setStepOneAns({
          ...stepOneAns,
          QOne: { ...stepOneAns.QOne, choice: value },
        });
      }
    }

    switch (value) {
      case 0:
        console.log("1");
        setBtn({
          btn1: true,
          btn2: false,
        });
        break;

      case 1:
        console.log("2");
        setBtn({
          btn2: true,
          btn1: false,
        });
        break;

      default:
        break;
    }
  };

  // FUNCTION FOR CHECKBOX QUESTION
  const handleSelectedCheckbox = (e, container) => {
    let target = e.target;
    let item = target.value;
    console.log(container);

    setCheckbox(!selectedCheckbox);

    if (container === 0) {
      if (target.checked) {
        setStepOneAns({
          ...stepOneAns,
          QTwo: {
            ...stepOneAns.QTwo,
            enSource: [...stepOneAns.QTwo.enSource, item],
          },
        });
      } else {
        setStepOneAns({
          ...stepOneAns,
          QTwo: {
            ...stepOneAns.QTwo,
            enSource: stepOneAns.QTwo.enSource.filter((val) => val !== item),
          },
        });
      }
    } else if (container === 1) {
      if (target.checked) {
        setStepOneAns({
          ...stepOneAns,
          QTwo: {
            ...stepOneAns.QTwo,
            genOp: [...stepOneAns.QTwo.genOp, item],
          },
        });
      } else {
        setStepOneAns({
          ...stepOneAns,
          QTwo: {
            ...stepOneAns.QTwo,
            genOp: stepOneAns.QTwo.genOp.filter((val) => val !== item),
          },
        });
      }
    }
  };

  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <>
      {/* STEP ONE - QUESTION ONE */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <div className="flex flex-row gap-0 mt-8">
          <ButtonGroup className="w-full">
            {btnQsts?.options?.map((item, index) => (
              <Button
                key={index}
                size="large"
                color="secondary"
                onClick={() => handleButtonClick(index)}
                className={`${
                  index === 0 && btn.btn1 ? activeStyles : notActiveStyles
                } ${
                  index === 1 && btn.btn2 ? activeStyles : notActiveStyles
                } w-full border border-gray-300 max-w-[200px] text-sm xs:h-[48px] transition duration-200 text-[#505050] flex items-center justify-center px-1 text-center`}
              >
                {item.text}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <QuestionContainer style={"px-0"} text={glsQsts?.text}>
          <div className="w-full h-48 mt-6 lg:mt-12">
            <textarea
              name=""
              id=""
              placeholder="Type here"
              className="w-full h-full border-2 rounded-xl resize-none focus:outline-accentColor p-4 font-light"
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

      {/* STEP ONE - QUESTION TWO */}
      <QuestionContainer
        id={chkBoxQsts[0]?.id}
        text={chkBoxQsts[0]?.text}
        subText={chkBoxQsts[0]?.subText}
      >
        {/* {chkBoxQsts?.map((item, index) => (
          <CheckboxContainer
            id={index}
            key={index}
            icon={item?.icon}
            title={item?.title}
            questionsList={item?.questionsList}
            answer={setStepOneAns}
            answers={stepOneAns}
          />
        ))} */}
        {chkBoxQsts?.map((item, index) => (
          <div key={index} className="flex flex-col gap-12 mt-12">
            <div className="flex items-center gap-4">
              {item?.icon && (
                <div className="w-6 h-6 lg:w-12 lg:h-12">
                  <Image
                    src={item.icon}
                    width={50}
                    height={50}
                    objectFit="contain"
                    alt={item.icon}
                  />
                </div>
              )}
              <p className="text-base lg:text-[20px] font-bold text-secondaryText">
                {item.title}
              </p>
            </div>
            {item.questionsList &&
              item.questionsList.map((qst, i) => (
                <div
                  key={i}
                  className="form-check flex items-start gap-4 lg:ml-16"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          value={qst.value}
                          color="secondary"
                          onClick={(e) => handleSelectedCheckbox(e, index)}
                          defaultChecked={
                            stepOneAns?.QTwo?.enSource?.includes(qst.value) ||
                            stepOneAns?.QTwo?.genOp?.includes(qst.value)
                              ? true
                              : false
                          }
                        />
                      }
                      label={qst.text}
                    />
                  </FormGroup>
                </div>
              ))}
          </div>
        ))}
      </QuestionContainer>
      {/* STEP ONE - QUESTION THREE */}
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion
          answer={setStepOneAns}
          answers={stepOneAns}
          qst={sldrQsts?.options}
        />
        {/* <Slider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          step={10}
          marks
          min={10}
          max={110}
        /> */}
      </QuestionContainer>
    </>
  );
};

export default StepOneContainer;