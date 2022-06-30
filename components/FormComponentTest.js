import {
  Button,
  ButtonBase,
  ButtonGroup,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import QuestionContainer from "../containers/QuestionContainer";
import FormInputRadio from "../form-components/FormInputRadio";

const FormComponentTest = ({ options, buttonHandler }) => {
  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STORED_TEST")
    ) || null;

  const [choice, setChoice] = useState("");
  const [goals, setGoals] = useState("");
  const [radio, setRadio] = useState("");
  const [test, setTest] = useState({ storedData });
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const methods = useForm({ defaultValues: test });
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  console.log("ERRORS", errors);

  useEffect(() => {
    window.localStorage.setItem("STORED_TEST", JSON.stringify(test));
  }, [test]);

  useEffect(() => {
    if (storedData !== null) {
      setTest(storedData);
      setChoice(storedData.choice);
      setGoals(storedData.goals);
      setRadio(storedData.radio);
    }
  } ,[]);

  useEffect(() => {
    if (choice?.length > 1) {
      console.log("fired", choice);
      setValue("implementSustainability", choice);
      handleButtonSelect(choice === "yes" ? 1 : 0);
    }

    if (choice === "no") {
      setValue("goalsConsidered", "");
    }
  }, [choice]);

  useEffect(() => {
    setValue("goalsConsidered", goals);
  }, [goals]);

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

  const activeStyles = "border-accentColor bg-highlight font-semibold";

  const handleChange = (data) =>
    setTest({
      choice: data.implementSustainability,
      goals: data.goalsConsidered,
      radio: data.radio,
    });

  const actionHandler = () => {
    buttonHandler("next");
  };

  return (
    <div>
      <div>
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
                >
                  <Button
                    className={
                      btn1 ? activeStyles : "hover:border hover:border-gray-300"
                    }
                    value={"Not really"}
                    onClick={() => handleButtonSelect(0)}
                    sx={{
                      color: "#505050",
                      borderColor: "#E3E3E3",
                      fontSize: "16",
                    }}
                    onChange={onChange}
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
                    onChange={onChange}
                  >
                    {"Yes, I'm considering it"}
                  </Button>
                </ButtonGroup>
                {error && (
                  <FormHelperText>
                    {choice === "" ? error.message : null}
                  </FormHelperText>
                )}
              </FormControl>
            );
          }}
        />
        {btn2 && (
          <QuestionContainer style={"px-0"} text={"test"}>
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
      </div>
      <div>
        <FormInputRadio
          onChange={watch(handleChange)}
          name="radio"
          label="radio"
          validation={{ required: "required" }}
          control={control}
          options={options}
          setValue={setValue}
          radioValue={radio && radio}
        />
      </div>

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
    </div>
  );
};

export default FormComponentTest;
