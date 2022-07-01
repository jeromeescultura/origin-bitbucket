import {
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SliderQuestion from "../components/SliderQuestion";
import QuestionContainer from "../containers/QuestionContainer";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import FormInputRadio from "../form-components/FormInputRadio";

const StepOneAssessmentContainer = ({
  buttonHandler,
  setAssessmentAnswers,
  assessmentAnswers,
  gatherAnswers,
  stepNo,
}) => {
  const questions = {
    chkBoxQsts: [
      {
        id: "02",
        icon: "/icons/bulb.svg",
        title: "Energy changes",
        text: "What sort of changes have been implemented (if any) to help reduce the impact your business has on the environment?",
        subText: "Select none or as many that apply.",
        questionsList: [
          {
            id: 1,
            value: "replaced_equipments",
            text: "Replaced some or all energy inefficient equipment at your site(s) with more efficient ones",
          },

          {
            id: 2,
            value: "green_power",
            text: "Invested in renewable generators through programs like GreenPower, to feed renewables into the grid",
          },
          {
            id: 3,
            value: "solar",
            text: "Installed solar at your site(s)",
          },
          {
            id: 4,
            value: "batteries",
            text: "Added battery storage to your solar system",
          },
          {
            id: 5,
            value: "electric_vehicles",
            text: "Replaced some or all of your vehicle fleet with electric vehicles",
          },
          {
            id: 6,
            value: "expert_advice",
            text: "Created a sustainability strategy",
          },
          {
            id: 7,
            value: "carbon_offsets",
            text: "Switch to an energy plan that carbon offsets your energy use",
          },
          {
            id: 8,
            value: "other",
            text: "Other",
          },
        ],
      },
      {
        id: "02",
        icon: "/icons/leaf.svg",
        title: "General operational changes",
        questionsList: [
          {
            id: 1,
            value: "alternatives",
            text: "Replaced some or all packaging used for your business to use more sustainable alternatives",
          },
          {
            id: 2,
            value: "digitized",
            text: "Digitised some or all paper based processes at your sites(s)",
          },
          {
            id: 3,
            value: "recycling",
            text: "Introduced recycling and waste reduction processes at office sites",
          },
          {
            id: 4,
            value: "optimized_supply_chain",
            text: "Optimised supply chain processes to reduce material wastage",
          },
          {
            id: 5,
            value: "other",
            text: "Other",
          },
        ],
      },
    ],
    btnQsts: {
      id: "01",
      text: "Are you currently looking to implement any specific sustainability or energy efficiency goals at your business for the future?",
      options: [
        {
          id: 1,
          text: "Not really",
        },

        {
          id: 2,
          text: "Yes, I'm considering it",
        },
      ],
    },
    sldrQsts: {
      id: "04",
      text: "How much of a priority is sustainability for your business?",
      options: [
        {
          id: 1,
          value: "low_priority",
        },
        {
          id: 2,
          value: "medium_priority",
        },
        {
          id: 3,
          value: "priority",
        },
        {
          id: 4,
          value: "high_priority",
        },
        {
          id: 5,
          value: "very_high_priority",
        },
      ],
    },
    glsQsts: {
      text: "Can you tell us a bit more about what type of goals you are considering?",
    },
    radioQsts: {
      id: "03",
      text: "How much time and energy do you want to spend on moving towards your sustainability goals?",
      options: [
        {
          id: 1,
          value: "easy",
          label: "Not much - make it as easy as possible please",
        },
        {
          id: 2,
          value: "open_decision",
          label:
            "I'm open to having a chat or two, and deciding how to proceed",
        },
        {
          id: 3,
          value: "fully_invest",
          label:
            "I'm happy to invest time and energy into finding the best and most sustainable option that works for me.",
        },
      ],
    },
  };

  const { chkBoxQsts, btnQsts, sldrQsts, glsQsts, radioQsts } = questions;

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || null;

  const [implementSustainability, setImplementSustainability] = useState("");
  const [goalsConsidered, setGoalsConsidered] = useState("");
  const [timeAndEnergy, setTimeAndEnergy] = useState("");
  const [energySourceChanges, setEnergySourceChanges] = useState([]);
  const [energySourceOtherInfo, setEnergySourceOtherInfo] = useState("");
  const [generalOperationsChanges, setGeneralOperationsChanges] = useState([]);
  const [generalOpsOtherInfo, setGeneralOpsOtherInfo] = useState("");
  const [howMuchPriority, setHowMuchPriority] = useState(3);
  const [stepOneAns, setStepOneAns] = useState({
    implementSustainability: "",
    goalsConsidered: "",
    energySourceChanges: [],
    energySourceOtherInfo: "",
    generalOperationsChanges: [],
    generalOpsOtherInfo: "",
    timeAndEnergy: "",
    howMuchPriority: 3,
  });
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const methods = useForm({ defaultValues: stepOneAns });
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log(errors);

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      if (
        Object.keys(errors).includes("implementSustainability") ||
        Object.keys(errors).includes("goalsConsidered")
      ) {
        document.getElementById("qone").scrollIntoView();
      } else if (Object.keys(errors).includes("timeAndEnergy")) {
        document.getElementById("qthree").scrollIntoView();
      } else if (Object.keys(errors).includes("energySourceOtherInfo")) {
        document.getElementById("qtwo-esc").scrollIntoView();
      } else if (Object.keys(errors).includes("generalOpsOtherInfo")) {
        document.getElementById("qtwo-goc").scrollIntoView();
      }
    }
  }, [errors]);

  useEffect(() => {
    if (storedData !== null) {
      setStepOneAns(storedData);
      setImplementSustainability(storedData.implementSustainability);
      setGoalsConsidered(storedData.goalsConsidered);
      setEnergySourceChanges(storedData.energySourceChanges);
      setEnergySourceOtherInfo(storedData.energySourceOtherInfo);
      setGeneralOperationsChanges(storedData.generalOperationsChanges);
      setGeneralOpsOtherInfo(storedData.generalOpsOtherInfo);
      setTimeAndEnergy(storedData.timeAndEnergy);
      setHowMuchPriority(storedData.howMuchPriority);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
  }, [stepOneAns]);

  useEffect(() => {
    if (implementSustainability?.length > 1) {
      console.log("fired", implementSustainability);
      setValue("implementSustainability", implementSustainability);
      handleButtonSelect(implementSustainability === "yes" ? 1 : 0);
    }

    if (implementSustainability === "no") {
      setValue("goalsConsidered", "");
    }
  }, [implementSustainability]);

  useEffect(() => {
    setValue("goalsConsidered", goalsConsidered);
  }, [goalsConsidered]);

  useEffect(() => {
    if (!generalOperationsChanges?.includes("other")) {
      setValue("generalOpsOtherInfo", "");
    }
  }, [generalOperationsChanges]);

  useEffect(() => {
    setValue("generalOpsOtherInfo", generalOpsOtherInfo);
  }, [generalOpsOtherInfo]);

  useEffect(() => {
    if (!energySourceChanges?.includes("other")) {
      setValue("energySourceOtherInfo", "");
    }
  }, [energySourceChanges]);

  useEffect(() => {
    setValue("energySourceOtherInfo", energySourceOtherInfo);
  }, [energySourceOtherInfo]);

  const handleButtonSelect = (value) => {
    setImplementSustainability(value === 0 ? "no" : "yes");
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
    }
  };

  const activeStyles = "border-accentColor bg-highlight font-semibold";

  const handleChange = (data) =>
    setStepOneAns({
      implementSustainability: data.implementSustainability,
      goalsConsidered: data.goalsConsidered,
      energySourceChanges: data.energySourceChanges,
      energySourceOtherInfo: data.energySourceOtherInfo,
      generalOperationsChanges: data.generalOperationsChanges,
      generalOpsOtherInfo: data.generalOpsOtherInfo,
      timeAndEnergy: data.timeAndEnergy,
      howMuchPriority: data.howMuchPriority,
    });

  const actionHandler = () => {
    buttonHandler("next");
  };

  return (
    <>
      {/* STEP ONE - QUESTION 1 */}
      <div id="qone">
        <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
          <div className="mt-12 w-full max-w-[500px]">
            <Controller
              control={control}
              name={"implementSustainability"}
              rules={{ required: "Please choose one" }}
              render={({ field: { onChange }, fieldState: { error } }) => {
                return (
                  <FormControl component="fieldset">
                    <ButtonGroup
                      sx={{
                        border:
                          error &&
                          implementSustainability?.length <= 0 &&
                          "2px solid red",
                        p: error && implementSustainability?.length <= 0 && 1,
                      }}
                      variant="outlined"
                      aria-label="outlined button group"
                      size="large"
                      color="secondary"
                      arial-label="contained button group"
                      onChange={onChange}
                    >
                      <Button
                        className={
                          btn1
                            ? activeStyles
                            : "hover:border hover:border-gray-300"
                        }
                        value={"Not really"}
                        onClick={() => handleButtonSelect(0)}
                        sx={{
                          color: "#505050",
                          borderColor: "#E3E3E3",
                          fontSize: "16",
                          py: 1,
                          maxWidth: "150px",
                          minWidth: "100px",
                        }}
                      >
                        {"Not really"}
                      </Button>
                      <Button
                        className={`${
                          btn2
                            ? activeStyles
                            : "hover:border hover:border-gray-300"
                        } ${
                          btn1 &&
                          "border-l-accentColor hover:border-l-accentColor"
                        }`}
                        value={"Yes, I'm considering it"}
                        onClick={() => handleButtonSelect(1)}
                        sx={{
                          color: "#505050",
                          borderColor: "#E3E3E3",
                          fontSize: "16",
                          py: 1,
                        }}
                      >
                        {"Yes, I'm considering it"}
                      </Button>
                    </ButtonGroup>

                    {error && implementSustainability?.length <= 0 ? (
                      <FormHelperText>Please choose one</FormHelperText>
                    ) : null}
                  </FormControl>
                );
              }}
            />
          </div>

          {btn2 && (
            <QuestionContainer style={"px-0"} text={glsQsts?.text}>
              <div className="mt-12 h-[192px]">
                <Controller
                  control={control}
                  name="goalsConsidered"
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      fullWidth
                      size="large"
                      onChange={onChange}
                      value={value}
                      color="secondary"
                      multiline
                      rows={6}
                      placeholder="Type here"
                    />
                  )}
                />
              </div>
            </QuestionContainer>
          )}
        </QuestionContainer>
      </div>

      {/* STEP ONE - QUESTION 2 */}
      <QuestionContainer
        id={chkBoxQsts[0]?.id}
        text={chkBoxQsts[0]?.text}
        subText={chkBoxQsts[0]?.subText}
      >
        <div className="flex flex-col gap-5 mt-12" id="qtwo-esc">
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
              name="energySourceChanges"
              options={chkBoxQsts[0]?.questionsList}
              checkboxValue={energySourceChanges}
              setCheckboxValue={setEnergySourceChanges}
            />
            {energySourceChanges?.includes("other") && (
              <div className="space-y-5 mt-5">
                <p>Can you tell us a bit more?</p>
                <Controller
                  control={control}
                  name="energySourceOtherInfo"
                  rules={{ required: "More info required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      size="large"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      color="secondary"
                      multiline
                      rows={6}
                      placeholder="Type here"
                    />
                  )}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-12" id="qtwo-goc">
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
              name="generalOperationsChanges"
              options={chkBoxQsts[1]?.questionsList}
              checkboxValue={generalOperationsChanges}
              setCheckboxValue={setGeneralOperationsChanges}
            />
            {generalOperationsChanges?.includes("other") && (
              <div className="space-y-5 mt-5">
                <p>Can you tell us a bit more?</p>
                <Controller
                  control={control}
                  name="generalOpsOtherInfo"
                  rules={{ required: "More info required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      size="large"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      color="secondary"
                      multiline
                      rows={6}
                      placeholder="Type here"
                    />
                  )}
                />
              </div>
            )}
          </div>
        </div>
      </QuestionContainer>

      {/* STEP ONE - QUESTION 3 */}
      <div id="qthree">
        <QuestionContainer id={radioQsts?.id} text={radioQsts?.text}>
          <div className="mt-8">
            <FormInputRadio
              onChange={watch(handleChange)}
              name="timeAndEnergy"
              validation={{ required: "Please select one" }}
              control={control}
              options={radioQsts?.options}
              setValue={setValue}
              radioValue={timeAndEnergy}
              radioDefault={"easy"}
            />
          </div>
        </QuestionContainer>
      </div>

      {/* STEP ONE - QUESTION FOUR */}
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion
          setValue={setValue}
          name={"howMuchPriority"}
          setSliderValue={setHowMuchPriority}
          sliderValue={howMuchPriority}
          qst={sldrQsts?.options}
          low={"Low priority"}
          high={"High priority"}
        />
      </QuestionContainer>

      <div className="">
        <Button
          size="large"
          variant="contained"
          style={{
            backgroundColor: "#EC0000",
            borderRadius: 200,
            boxShadow: "none",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          }}
          onClick={handleSubmit(actionHandler)}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default StepOneAssessmentContainer;
