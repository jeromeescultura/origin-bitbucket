import React, { useState, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";
import { useForm } from "react-hook-form";
import FormInputRadio from "../form-components/FormInputRadio";
import FormInputDropdown from "../form-components/FormInputDropdown";
import DropdownQuestion from "../components/DropdownQuestion";
import RadioQuestion from "../components/RadioQuestion";
import IconsQuestion from "../components/IconsQuestion";
import CheckboxComponent from "../components/CheckboxComponent";
import ButtonQuestion from "../components/ButtonQuestion";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";

const StepTwoContainer = ({
  dropDwnQsts,
  radioQsts,
  iconQsts,
  chkBoxQsts,
  btnQsts,
}) => {
  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ) || [];

  const [stepTwoAns, setStepTwoAns] = useState({
    dropdown: "",
    radio: "",
    checkboxEnSource: [],
    checkboxEnUsage: [],
    choice: "",
  });

  const methods = useForm({ defaultValues: stepTwoAns });
  const { control, watch, setValue } = methods;

  const [dropdown, setDropdown] = useState("");
  const [radio, setRadio] = useState("");
  const [enSources, setEnSources] = useState([]);
  const [enUsage, setEnUsage] = useState([]);
  const [choice, setChoice] = useState("");

  useEffect(() => {
    window.localStorage.setItem("STEP_TWO_ANS", JSON.stringify(stepTwoAns));
  }, [stepTwoAns]);

  useEffect(() => {
    if (storedData !== null) {
      setStepTwoAns(storedData);
      setDropdown(storedData.dropdown);
      setRadio(storedData.radio);
    }
  }, []);

  useEffect(() => {
    console.log(enSources);
  }, [enSources]);

  const handleChange = (data) => {
    setStepTwoAns({
      dropdown: data.dropdown,
      radio: data.radio,
      checkboxEnSource: data.checkboxEnSource,
      checkboxEnUsage: data.checkboxEnUsage,
      choice: data.choice,
    });
  };
  return (
    <>
      {/* STEP TWO - QUESTION 1 */}
      <QuestionContainer id={dropDwnQsts?.id} text={dropDwnQsts?.text}>
        <div className="mt-8">
          <FormInputDropdown
            onChange={watch(handleChange)}
            name={"dropdown"}
            control={control}
            options={dropDwnQsts?.options}
            setValue={setValue}
            dropdownValue={dropdown}
            label={"Industry"}
          />
        </div>
        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            {dropDwnQsts?.options.map((item, index) => (
              <MenuItem key={index} value={item.text}>
                {item.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}

        {/* 
        <DropdownQuestion
          qst={dropDwnQsts?.options}
          answer={setStepTwoAns}
          answers={stepTwoAns}
        /> */}

        <QuestionContainer style={"px-0"} text={radioQsts?.text}>
          <div className="mt-5">
            <FormInputRadio
              name={"radio"}
              control={control}
              options={radioQsts?.options}
              setValue={setValue}
              radioValue={radio}
            />
          </div>
          {/* {radioQsts.options?.map((item, index) => (
            <RadioQuestion
              id={index}
              text={item.text}
              key={index}
              answer={setStepTwoAns}
              answers={stepTwoAns}
            />
          ))} */}
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
                answer={setEnSources}
                answers={enSources}
                setValue={setValue}
                name={'checkboxEnSource'}
              />
            ))}
          </div>
        </div>
      </QuestionContainer>
      {/* STEP TWO - QUESTION 3 */}
      <QuestionContainer id={chkBoxQsts?.id} text={chkBoxQsts?.text}>
        {/* <div className="space-y-12 mt-8 lg:mt-7">
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
        </div> */}
      </QuestionContainer>
      {/* STEP TWO - QUESTION 4 */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        {/* <ButtonQuestion
          options={btnQsts?.options}
          answer={setStepTwoAns}
          answers={stepTwoAns}
        /> */}
      </QuestionContainer>
    </>
  );
};

export default StepTwoContainer;
