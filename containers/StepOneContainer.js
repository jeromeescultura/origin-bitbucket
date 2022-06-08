import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import QuestionContainer from "./QuestionContainer";
import SliderQuestion from "../components/SliderQuestion";
import { Button, ButtonGroup, Grid } from "@mui/material";
import Image from "next/image";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { Controller } from "react-hook-form";

const StepOneContainer = ({
  btnQsts,
  chkBoxQsts,
  sldrQsts,
  glsQsts,
  stepForwardHandler,
}) => {
  const [goals, setGoals] = useState("");
  const [choice, setChoice] = useState("");
  const [enSourceValue, setEnSourceValue] = useState([]);
  const [genOpValue, setGenOpValue] = useState([]);
  const [sliderValue, setSliderValue] = useState(3);

  const [selectedBtn, setSelectedBtn] = useState("");
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || [];

  const [stepOneAns, setStepOneAns] = useState(storedData);

  const methods = useForm({ defaultValues: stepOneAns });
  const { control, watch, setValue, handleSubmit } = methods;

  useEffect(() => {
    window.localStorage.setItem("STEP_ONE_ANS", JSON.stringify(stepOneAns));
  }, [stepOneAns]);

  useEffect(() => {
    if (storedData !== null) {
      setStepOneAns(storedData);
      setEnSourceValue(storedData.enSource);
      setGenOpValue(storedData.genOp);
      setSliderValue(storedData.slider);
      setChoice(storedData.choice);
      setGoals(storedData.goals);
    }
  }, []);

  const handleButtonSelect = (value) => {
    setChoice(value.toString());
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
    }
  };
  useEffect(() => {
    if (choice !== "") {
      setValue("choice", choice);
      handleButtonSelect(parseInt(choice));
    }

    if (choice === "0") {
      setGoals("");
    }
  }, [choice]);

  useEffect(() => {
    setValue("goals", goals);
  }, [goals]);

  const activeStyles = "border-accentColor bg-highlight font-medium";

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
                      className={
                        btn2
                          ? activeStyles
                          : "hover:border hover:border-gray-300"
                      }
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
        {choice === "1" && (
          <QuestionContainer style={"px-0"} text={glsQsts?.text}>
            <div className="mt-12 h-[192px]">
              <textarea
                name=""
                id=""
                placeholder="Type here"
                className="w-full h-full border-2 rounded-xl resize-none focus:outline-accentColor p-4 font-light"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              ></textarea>
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
              name="enSource"
              options={chkBoxQsts[0]?.questionsList}
              checkboxValue={enSourceValue}
              setCheckboxValue={setEnSourceValue}
              validation={{ required: "Required" }}
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
      </QuestionContainer>
      {/* STEP ONE - QUESTION THREE */}
      <QuestionContainer id={sldrQsts?.id} text={sldrQsts?.text}>
        <SliderQuestion
          setValue={setValue}
          name={"slider"}
          setSliderValue={setSliderValue}
          sliderValue={sliderValue}
          qst={sldrQsts?.options}
          low={"Low priority"}
          high={"High priority"}
        />
      </QuestionContainer>
    </>
  );
};

export default StepOneContainer;
