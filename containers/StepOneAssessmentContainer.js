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
  btnQsts,
  chkBoxQsts,
  sldrQsts,
  glsQsts,
  radioQsts,
  buttonHandler,
  setAssessmentAnswers,
  assessmentAnswers,
  gatherAnswers,
}) => {
  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || null;

  const [implementSustainability, setImplementSustainability] = useState("");
  const [goalsConsidered, setGoalsConsidered] = useState("");
  const [timeAndEnergy, setTimeAndEnergy] = useState("");
  const [energySourceChanges, setEnergySourceChanges] = useState([]);
  const [generalOperationsChanges, setGeneralOperationsChanges] = useState([]);
  const [otherInfo, setOtherInfo] = useState("");
  const [howMuchPriority, setHowMuchPriority] = useState(3);
  const [stepOneAns, setStepOneAns] = useState(storedData);
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

  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      if (
        Object.keys(errors).includes("implementSustainability") ||
        Object.keys(errors).includes("goalsConsidered")
      ) {
        document.getElementById("qone").scrollIntoView();
      } else if (Object.keys(errors).includes("timeAndEnergy")) {
        document.getElementById("qthree").scrollIntoView();
      }
    }
  }, [errors]);

  useEffect(() => {
    window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
  }, [stepOneAns]);

  useEffect(() => {
    if (storedData !== null) {
      setStepOneAns(storedData);
      setImplementSustainability(storedData.implementSustainability);
      setGoalsConsidered(storedData.goalsConsidered);
      setEnergySourceChanges(storedData.energySourceChanges);
      setGeneralOperationsChanges(storedData.generalOperationsChanges);
      setOtherInfo(storedData.otherInfo);
      setTimeAndEnergy(storedData.timeAndEnergy);
      setHowMuchPriority(storedData.howMuchPriority);
    }
  }, []);

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
      setValue("otherInfo", "");
    }
  }, [generalOperationsChanges]);

  useEffect(() => {
    setValue("otherInfo", otherInfo);
  }, [otherInfo]);

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
      generalOperationsChanges: data.generalOperationsChanges,
      otherInfo: data.otherInfo,
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
              rules={{ required: "Please choose" }}
              render={({ field: { onChange }, fieldState: { error } }) => {
                return (
                  <FormControl component="fieldset" fullWidth>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                      size="large"
                      color="secondary"
                      arial-label="contained button group"
                      fullWidth
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
                        }}
                      >
                        {"Yes, I'm considering it"}
                      </Button>
                    </ButtonGroup>

                    {error && implementSustainability === "" ? (
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
                  rules={{ required: "More info required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      fullWidth
                      helperText={error ? error.message : null}
                      size="large"
                      error={!!error}
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
              name="energySourceChanges"
              options={chkBoxQsts[0]?.questionsList}
              checkboxValue={energySourceChanges}
              setCheckboxValue={setEnergySourceChanges}
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
                  name="otherInfo"
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

      <div>
        <Button onClick={handleSubmit(actionHandler)}>Click me</Button>
      </div>
    </>
  );
};

export default StepOneAssessmentContainer;
