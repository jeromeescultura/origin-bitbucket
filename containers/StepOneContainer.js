import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import SliderQuestion from "../components/SliderQuestion";
import { Button, ButtonGroup, Grid, TextField } from "@mui/material";
import Image from "next/image";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { Controller } from "react-hook-form";
import FormInputRadio from "../form-components/FormInputRadio";

const StepOneContainer = ({
  btnQsts,
  chkBoxQsts,
  sldrQsts,
  glsQsts,
  radioQsts,
  setAssessmentAnswers,
  stepForwardHandler,
}) => {
  const [goals, setGoals] = useState("");
  const [choice, setChoice] = useState("");
  const [enSourceValue, setEnSourceValue] = useState([]);
  const [genOpValue, setGenOpValue] = useState("");
  const [sliderValue, setSliderValue] = useState(3);
  const [radioValue, setRadioValue] = useState("easy");
  const [other, setOther] = useState("");

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || [];



  const [stepOneAns, setStepOneAns] = useState(storedData);

  const methods = useForm({ defaultValues: stepOneAns });
  const { control, watch, setValue, handleSubmit } = methods;

  // STORING VALUES SAVED IN stepOneAns TO LOCAL STORAGE AND assessmentAnswers STATE
  useEffect(() => {
    window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
    setAssessmentAnswers((prevState) => {
      return { ...prevState, stepOneAns: stepOneAns };
    });
  }, [stepOneAns]);

  // GETTING DATA FROM LOCAL STORAGE
  useEffect(() => {
    if (storedData) {
      setStepOneAns(storedData);
      setEnSourceValue(storedData.energySourceChanges);
      setGenOpValue(storedData.generalOperationsChanges);
      setSliderValue(storedData.howMuchPriority);
      setChoice(storedData.implementSustainability);
      setGoals(storedData.goalsConsidered);
      setRadioValue(storedData.howMuchTimeAndEnergy);
      setOther(storedData.otherInfo);
    }
  }, []);

  // SETTING SELECTED BUTTON BASED ON choice STATE AND CLEAR goals STATE WHEN SELECTING THE 'NO' OPTION
  useEffect(() => {
    if (choice !== "") {
      setValue("implementSustainability", choice);
      handleButtonSelect(choice === "yes" ? 1 : 0);
    }

    if (choice === "no") {
      setValue("goalsConsidered", "");
    }
  }, [choice]);

  useEffect(() => {
    if (typeof genOpValue === "object") {
      if (!genOpValue?.includes("other")) {
        setValue("otherInfo", "");
      }
    }
  }, [genOpValue]);

  useEffect(() => {
    setValue("otherInfo", other);
  }, [other]);

  // FUNCTION TO HIGHLIGHT SELECTED BUTTON
  const handleButtonSelect = (value) => {
    setChoice(value === 0 ? "no" : "yes");
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
    }
  };

  // UPDATE DATA FOR goalsConsidered STATE
  useEffect(() => {
    setValue("goalsConsidered", goals);
  }, [goals]);

  const activeStyles = "border-accentColor bg-highlight font-semibold";

  // SET stepOneAns VALUES BASED ON VALUES STORED BY FORM HOOK COMPONENTS
  const handleChange = (data) => {
    setStepOneAns({
      goalsConsidered: data.goalsConsidered,
      implementSustainability: data.implementSustainability,
      energySourceChanges: data.energySourceChanges,
      generalOperationsChanges: data.generalOperationsChanges,
      howMuchPriority: data.howMuchPriority,
      howMuchTimeAndEnergy: data.howMuchTimeAndEnergy,
      otherInfo: data.otherInfo,
    });
  };

  const handleNextButton = () => {
    stepForwardHandler();
  };

  return (
    <>
      {/* STEP ONE - QUESTION ONE */}
      <QuestionContainer id={btnQsts?.id} text={btnQsts?.text}>
        <div className="mt-12 w-full max-w-[500px]">
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            size="large"
            color="secondary"
            arial-label="contained button group"
            fullWidth
          >
            <Controller
              control={control}
              name={"implementSustainability"}
              render={() => {
                return (
                  <>
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
                          : "hover:border hover:border-gray-300 hover:border-l-accentColor"
                      } ${btn1 && "border-l-accentColor"}`}
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
                  </>
                );
              }}
            />
          </ButtonGroup>
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
          </QuestionContainer>
        )}
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
              name="energySourceChanges"
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
              name="generalOperationsChanges"
              options={chkBoxQsts[1]?.questionsList}
              checkboxValue={genOpValue}
              setCheckboxValue={setGenOpValue}
            />
            {genOpValue?.includes("other") && (
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
      {/* STEP ONE - QUESTION THREE */}
      <QuestionContainer id={radioQsts?.id} text={radioQsts?.text}>
        <div className="mt-8">
          <FormInputRadio
            name={"howMuchTimeAndEnergy"}
            control={control}
            options={radioQsts?.options}
            setValue={setValue}
            radioValue={radioValue && radioValue}
            radioDefault={"easy"}
          />
        </div>
      </QuestionContainer>
      {/* STEP ONE - QUESTION FOUR */}
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion
          setValue={setValue}
          name={"howMuchPriority"}
          setSliderValue={setSliderValue}
          sliderValue={sliderValue}
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
          onClick={handleSubmit(handleNextButton)}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default StepOneContainer;
