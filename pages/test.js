import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { server } from "../config";
import FormInputRadio from "../form-components/FormInputRadio";

const Test = ({ questions }) => {
  const storedData =
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("RADIO")
    ) || null;

  const { timeAndEnergy } = questions;
  const [defaultValues, setDefaultValues] = useState(storedData);
  const [radio, setRadio] = useState("");
  const [error, setError] = useState(false);
  const methods = useForm({ defaultValues: defaultValues });
  const {
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = methods;

  useEffect(() => {
    window.localStorage.setItem("RADIO", JSON.stringify(defaultValues));
  }, [defaultValues]);

  useEffect(() => {
    if (storedData !== null) {
      setDefaultValues(storedData);
      setRadio(storedData.radio);
    }
  }, []);

  const handleChange = (data) => {
    setDefaultValues({
      radio: data.radio,
    });

  };

  return (
    <>
      <FormInputRadio
        onChange={watch(handleChange)}
        name="radio"
        validation={{ required: "Please select one" }}
        control={control}
        options={timeAndEnergy?.options}
        setValue={setValue}
        radioValue={radio}
      />
      <Button onClick={handleSubmit(handleChange)}>Click me</Button>
    </>
  );
};

export default Test;

export async function getServerSideProps() {
  const questions = await fetch(`${server}/api/questions`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      questions,
    },
  };
}
