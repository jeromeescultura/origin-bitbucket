import { useForm } from "react-hook-form";
import FormInputSlider from "../form-components/FormInputSlider";
import { useEffect, useState } from "react";
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
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";

const StepOneContainer = ({ btnQsts, chkBoxQsts, sldrQsts, glsQsts }) => {
  const [goals, setGoals] = useState("");
  const [choice, setChoice] = useState(null);
  const [enSourceValue, setEnSourceValue] = useState([]);
  const [genOpValue, setGenOpValue] = useState([]);
  const [sliderValue, setSliderValue] = useState(3);

  const [stepOneAns, setStepOneAns] = useState({
    goals: "",
    choice: null,
    enSource: [],
    genOp: [],
    slider: 3,
  });

  const methods = useForm({ defaultValues: stepOneAns });
  const { control, watch, setValue } = methods;

  const handleLabel = (val) => {
    switch (val) {
      case 1:
        return "Low Priority";
      case 2:
        return "Somewhat a priority";
      case 3:
        return "Neutral";
      case 4:
        return "Priority";
      case 5:
        return "High Priority";
      default:
        break;
    }
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const sliderMarks = [
    {
      value: 1,
      label: "Low Priority",
    },
    {
      value: 2,
      label: "",
    },
    {
      value: 3,
      label: "",
    },
    {
      value: 4,
      label: "",
    },
    {
      value: 5,
      label: "High Priority",
    },
  ];

  const storedData = JSON.parse(
    typeof window !== "undefined" && window.localStorage.getItem("STEP_ONE_ANS")
  );

  useEffect(() => {
    window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
  }, [stepOneAns]);

  useEffect(() => {
    if (storedData !== null) {
      setStepOneAns(storedData);
      setEnSourceValue(storedData.enSource);
      setGenOpValue(storedData.genOp);
      setSliderValue(storedData.slider);
    }
  }, []);

  const handleChange = (data) => {
    setStepOneAns({
      goals: data.goals,
      choice: data.choice,
      enSource: data.enSource,
      genOp: data.genOp,
      slider: data.slider,
    });
  };

  return (
    <>
      {/* STEP ONE - QUESTION ONE */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <QuestionContainer
          style={"px-0"}
          text={glsQsts?.text}
        ></QuestionContainer>
      </QuestionContainer>

      {/* STEP ONE - QUESTION TWO */}
      <QuestionContainer
        id={chkBoxQsts[0]?.id}
        text={chkBoxQsts[0]?.text}
        subText={chkBoxQsts[0]?.subText}
      >
        <div className="flex flex-col gap-5 mt-12">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 lg:w-12 lg:h-12">
              {chkBoxQsts[0] && (
                <Image
                  src={chkBoxQsts[0]?.icon}
                  width={50}
                  height={50}
                  objectFit="contain"
                  alt={chkBoxQsts[0]?.icon}
                />
              )}
            </div>
            <p className="text-base lg:text-[20px] font-bold text-secondaryText">
              {chkBoxQsts[0]?.title}
            </p>
          </div>
          <div className="lg:ml-16">
            <FormInputMultiCheckbox
              onChange={watch(handleChange)}
              control={control}
              setValue={setValue}
              name="enSource"
              options={chkBoxQsts[0]?.questionsList}
              checkboxValue={enSourceValue}
              setCheckboxValue={setEnSourceValue}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-12">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 lg:w-12 lg:h-12">
              {chkBoxQsts[1] && (
                <Image
                  src={chkBoxQsts[1]?.icon}
                  width={50}
                  height={50}
                  objectFit="contain"
                  alt={chkBoxQsts[1]?.icon}
                />
              )}
            </div>
            <p className="text-base lg:text-[20px] font-bold text-secondaryText">
              {chkBoxQsts[1]?.title}
            </p>
          </div>
          <div className="lg:ml-16">
            <FormInputMultiCheckbox
              onChange={watch(handleChange)}
              control={control}
              setValue={setValue}
              name="genOp"
              options={chkBoxQsts[1]?.questionsList}
              checkboxValue={genOpValue}
              setCheckboxValue={setGenOpValue}
            />
          </div>
        </div>

        {/* {chkBoxQsts?.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 mt-12">
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
            </div> */}
        {/* {item.questionsList &&
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
              ))} */}
        {/* <div className="lg:ml-16">
              <FormInputMultiCheckbox
                onChange={watch(handleChange)}
                control={control}
                setValue={setValue}
                name={index === 0 ? "enSource" : "genOp"}
                options={item.questionsList}
                checkboxValue={index === 0 ? enSourceValue : genOpValue}
                setCheckboxValue={
                  index === 0 ? setEnSourceValue : setGenOpValue
                }
              />
            </div> */}
        {/* </div>
        ))} */}
      </QuestionContainer>
      {/* STEP ONE - QUESTION THREE */}
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        {/* <SliderQuestion
          answer={setStepOneAns}
          answers={stepOneAns}
          qst={sldrQsts?.options}
        /> */}
        <div className="mt-12 px-[20px] lg:px-0">
          <FormInputSlider
            name={"slider"}
            setValue={setValue}
            control={control}
            sliderValue={sliderValue}
            sliderMarks={sliderMarks}
            min={1}
            max={5}
            handleLabel={handleLabel}
            handleChange={handleSliderChange}
          />
        </div>
      </QuestionContainer>
    </>
  );
};

export default StepOneContainer;
