import React, { useState, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";
import { Controller, useForm } from "react-hook-form";
import FormInputRadio from "../form-components/FormInputRadio";
import FormInputDropdown from "../form-components/FormInputDropdown";
import DropdownQuestion from "../components/DropdownQuestion";
import RadioQuestion from "../components/RadioQuestion";
import IconsQuestion from "../components/IconsQuestion";
import ButtonQuestion from "../components/ButtonQuestion";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  useMediaQuery,
} from "@mui/material";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";

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

  const [stepTwoAns, setStepTwoAns] = useState(storedData);

  const methods = useForm({ defaultValues: stepTwoAns });
  const { control, watch, setValue } = methods;

  const [dropdown, setDropdown] = useState(19);
  const [radio, setRadio] = useState("1-2");
  const [enSources, setEnSources] = useState([]);
  const [enUsage, setEnUsage] = useState("constant");
  const [equipment, setEquipment] = useState("");

  useEffect(() => {
    window.localStorage.setItem("STEP_TWO_ANS", JSON.stringify(stepTwoAns));
  }, [stepTwoAns]);

  useEffect(() => {
    if (storedData !== null) {
      setStepTwoAns(storedData);
      setDropdown(storedData.dropdown);
      setRadio(storedData.radio);
      setEnSources(storedData.checkboxEnSource);
      setEnUsage(storedData.radioEnUsage);
      setEquipment(storedData.choice);
    }
  }, []);

  const handleChange = (data) => {
    setStepTwoAns({
      dropdown: data.dropdown,
      radio: data.radio,
      checkboxEnSource: data.checkboxEnSource,
      radioEnUsage: data.radioEnUsage,
      choice: data.choice,
    });
  };

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);
  const [btn4, setBtn4] = useState(true);

  const handleButtonSelect = (value) => {
    setEquipment(value.toString());
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
      setBtn4(false);
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
      setBtn4(false);
    } else if (value === 2) {
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
      setBtn4(false);
    } else if (value === 3) {
      setBtn1(false);
      setBtn2(false);
      setBtn3(false);
      setBtn4(true);
    }
  };
  useEffect(() => {
    if (equipment !== "") {
      setValue("choice", equipment);
      handleButtonSelect(parseInt(equipment));
    }
  }, [equipment]);

  const activeStyles = "border-accentColor bg-highlight font-medium";
  const orient = useMediaQuery("(min-width:1024px)");
  return (
    <>
      {/* STEP TWO - QUESTION 1 */}
      <QuestionContainer id={dropDwnQsts?.id} text={dropDwnQsts?.text}>
        <div className="mt-8">
          <FormInputDropdown
            onChange={watch(handleChange)}
            name={"dropdown"}
            control={control}
            options={dropDwnQsts.options}
            setValue={setValue}
            dropdownValue={dropdown}
            label={"Industry"}
            defaultDropdown={19}
            // id={dropdown?.id}
          />
        </div>

        <QuestionContainer style={"px-0"} text={radioQsts?.text}>
          <div className="mt-5">
            <FormInputRadio
              name={"radio"}
              control={control}
              options={radioQsts?.options}
              setValue={setValue}
              radioValue={radio}
              radioDefault={"1-2"}
            />
          </div>
        </QuestionContainer>
      </QuestionContainer>

      {/* STEP TWO - QUESTION 2 */}
      <QuestionContainer
        id={iconQsts?.id}
        text={iconQsts?.text}
        subText={iconQsts?.subText}
      >
        <div className="space-y-8 mt-12">
          <div className="">
            <IconsQuestion
              answer={setEnSources}
              answers={enSources}
              setValue={setValue}
              name={"checkboxEnSource"}
              options={iconQsts?.options}
            />
          </div>
        </div>
      </QuestionContainer>

      {/* STEP TWO - QUESTION 3 */}
      <QuestionContainer id={chkBoxQsts?.id} text={chkBoxQsts?.text}>
        <div className="mt-5">
          <FormInputRadio
            name={"radioEnUsage"}
            control={control}
            options={chkBoxQsts?.questionsList}
            setValue={setValue}
            radioValue={enUsage}
            radioDefault={"constant"}
          />
        </div>
      </QuestionContainer>

      {/* STEP TWO - QUESTION 4 */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <div className="mt-12 w-full ">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size="large"
            color="secondary"
            arial-label="contained button group"
            orientation={`${orient ? "horizontal" : "vertical"}`}
            fullWidth
          >
            <Controller
              control={control}
              name={"choice"}
              render={() => {
                return (
                  <>
                    <Button
                      className={
                        btn1
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      }
                      value={"Yes"}
                      onClick={() => handleButtonSelect(0)}
                      sx={{
                        color: "#505050",
                        borderColor: "#E3E3E3",
                        fontSize: "16",
                      }}
                    >
                      {"Yes"}
                    </Button>
                    <Button
                      className={`${
                        btn2
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      } ${
                        btn1 &&
                        "border-t-accentColor hover:border-t-accentColor lg:border-t-gray-300 lg:hover:border-t-gray-300 lg:border-l-accentColor lg:hover:border-l-accentColor"
                      }`}
                      value={"At some of my sites"}
                      onClick={() => handleButtonSelect(1)}
                      sx={{
                        color: "#505050",
                        borderColor: "#E3E3E3",
                        fontSize: "16",
                      }}
                    >
                      {"At some of my sites"}
                    </Button>
                    <Button
                      className={`${
                        btn3
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      } ${
                        btn2 &&
                        "border-t-accentColor hover:border-t-accentColor lg:border-t-gray-300 lg:hover:border-t-gray-300 lg:border-l-accentColor lg:hover:border-l-accentColor"
                      }`}
                      value={"No"}
                      onClick={() => handleButtonSelect(2)}
                      sx={{
                        color: "#505050",
                        borderColor: "#E3E3E3",
                        fontSize: "16",
                      }}
                    >
                      {"No"}
                    </Button>
                    <Button
                      className={`${
                        btn4
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      } ${
                        btn3 &&
                        "border-t-accentColor hover:border-t-accentColor lg:border-t-gray-300 lg:hover:border-t-gray-300 lg:border-l-accentColor lg:hover:border-l-accentColor"
                      }`}
                      value={"I'm not sure"}
                      onClick={() => handleButtonSelect(3)}
                      sx={{
                        color: "#505050",
                        borderColor: "#E3E3E3",
                        fontSize: "16",
                      }}
                    >
                      {"I'm not sure"}
                    </Button>
                  </>
                );
              }}
            />
          </ButtonGroup>
        </div>
      </QuestionContainer>
    </>
  );
};

export default StepTwoContainer;
