import React, { useState, useEffect } from "react";
import QuestionContainer from "./QuestionContainer";
import { Controller, useForm } from "react-hook-form";
import FormInputRadio from "../form-components/FormInputRadio";
import FormInputDropdown from "../form-components/FormInputDropdown";
import DropdownQuestion from "../components/DropdownQuestion";
import RadioQuestion from "../components/RadioQuestion";
import IconsQuestion from "../components/IconsQuestion";
import ButtonQuestion from "../components/ButtonQuestion";
import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";

const StepTwoContainer = ({
  dropDwnQsts,
  radioQsts,
  iconQsts,
  chkBoxQsts,
  btnQsts,
  setAssessmentAnswers,
  stepBackwardHandler,
  submitAssessment,
}) => {
  // STORING DATA UPLOADED BY stepTwoAns STATE
  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ) || [];


  const [stepTwoAns, setStepTwoAns] = useState(storedData);

  const methods = useForm({ defaultValues: stepTwoAns });
  const { control, watch, setValue } = methods;

  const [dropdown, setDropdown] = useState("Other Services");
  const [radio, setRadio] = useState("1-2 sites");
  const [enSources, setEnSources] = useState([]);
  const [enUsage, setEnUsage] = useState("constant");
  const [equipment, setEquipment] = useState("");

  // STORING VALUES SAVED IN stepTwoAns TO LOCAL STORAGE AND assessmentAnswers STATE
  useEffect(() => {
    window.localStorage.setItem("STEP_TWO_ANS", JSON.stringify(stepTwoAns));
    setAssessmentAnswers((prevState) => {
      return { ...prevState, stepTwoAns: stepTwoAns };
    });
  }, [stepTwoAns]);

  // GETTING DATA FROM LOCAL STORAGE
  useEffect(() => {
    if (storedData !== null) {
      setStepTwoAns(storedData);
      setDropdown(storedData.typeOfIndustry);
      setRadio(storedData.businessSites);
      setEnSources(storedData.energySources);
      setEnUsage(storedData.energyUsage);
      setEquipment(storedData.spaceForInstallation);
    }
  }, []);

  // SET stepTwoAns VALUES BASED ON VALUES STORED BY FORM HOOK COMPONENTS
  const handleChange = (data) => {
    setStepTwoAns({
      typeOfIndustry: data.typeOfIndustry,
      businessSites: data.businessSites,
      energySources: data.energySources,
      energyUsage: data.energyUsage,
      spaceForInstallation: data.spaceForInstallation,
    });
  };

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(true);
  // const [btn4, setBtn4] = useState(true);

  // FUNCTION TO HIGHLIGHT SELECTED BUTTON
  const handleButtonSelect = (value) => {
    setEquipment(value === 0 ? "yes" : value === 1 ? "no" : "not_sure");
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
      // setBtn4(false);
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
      // setBtn4(false);
    } else if (value === 2) {
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
      // setBtn4(false);
    }
    // else if (value === 3) {
    //   setBtn1(false);
    //   setBtn2(false);
    //   setBtn3(false);
    //   setBtn4(true);
    // }
  };

  // SETTING SELECTED BUTTON BASED ON equipment STATE
  useEffect(() => {
    if (equipment !== "") {
      setValue("spaceForInstallation", equipment);
      handleButtonSelect(equipment === "yes" ? 0 : equipment === "no" ? 1 : 2);
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
            name={"typeOfIndustry"}
            control={control}
            options={dropDwnQsts.options}
            setValue={setValue}
            dropdownValue={dropdown}
            label={"Industry"}
            defaultDropdown={"Other Services"}
            // id={dropdown?.id}
          />
        </div>

        <QuestionContainer style={"px-0"} text={radioQsts?.text}>
          <div className="mt-5">
            <FormInputRadio
              name={"businessSites"}
              control={control}
              options={radioQsts?.options}
              setValue={setValue}
              radioValue={radio}
              radioDefault={"1-2 sites"}
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
              name={"energySources"}
              options={iconQsts?.options}
            />
          </div>
        </div>
      </QuestionContainer>

      {/* STEP TWO - QUESTION 3 */}
      <QuestionContainer id={chkBoxQsts?.id} text={chkBoxQsts?.text}>
        <div className="mt-5">
          <FormInputRadio
            name={"energyUsage"}
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
            // orientation={`${orient ? "horizontal" : "vertical"}`}
            fullWidth
          >
            <Controller
              control={control}
              name={"spaceForInstallation"}
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
                        fontSize: "14",
                        px: 0,
                        py: 1,
                      }}
                    >
                      {"Yes"}
                    </Button>
                    {/* <Button
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
                        fontSize: "14",
                      }}
                    >
                      {"At some of my sites"}
                    </Button> */}
                    <Button
                      className={`${
                        btn2
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      } ${
                        btn1 &&
                        "border-t-gray-300 hover:border-t-gray-300 border-l-accentColor hover:border-l-accentColor"
                      }`}
                      value={"No"}
                      onClick={() => handleButtonSelect(1)}
                      sx={{
                        color: "#505050",
                        borderColor: "#E3E3E3",
                        fontSize: "14",
                        px: 0,
                        py: 1,
                      }}
                    >
                      {"No"}
                    </Button>
                    <Button
                      className={`${
                        btn3
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      } ${
                        btn2 &&
                        "border-t-gray-300 hover:border-t-gray-300 border-l-accentColor hover:border-l-accentColor"
                      }`}
                      value={"I'm not sure"}
                      onClick={() => handleButtonSelect(2)}
                      sx={{
                        color: "#505050",
                        borderColor: "#E3E3E3",
                        fontSize: "14",
                        px: 0,
                        py: 1,
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
      <div className="flex gap-16 mt-16 justify-between sm:justify-start">
        <Button
          size="large"
          style={{
            fontWeight: 600,
          }}
          onClick={stepBackwardHandler}
        >
          Back
        </Button>

        <div className="">
          <Button
            size="large"
            variant="contained"
            style={{
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              backgroundColor: "#EC0000",
              paddingRight: "2rem",
            }}
            onClick={submitAssessment}
          >
            View recommendations
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepTwoContainer;
