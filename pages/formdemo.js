import { Button, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInputRadio from "../form-components/FormInputRadio";
import { FormInputText } from "../form-components/FormInputText";

function formdemo() {
  const [radio, setRadio] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("radio", radio);
  }, [radio]);

  const storedData =
    JSON.parse(
      typeof window !== "undefined" && window.localStorage.getItem("FORM_DEMO")
    ) || [];

  const radioOptions = [
    {
      label: "Radio Option 1",
      value: "1",
    },
    {
      label: "Radio Option 2",
      value: "2",
    },
  ];

  const [defaultValues, setDefaultValues] = useState({
    textValue: "",
    radioValue: "",
  });

  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, onChange, reset, control, setValue, watch } = methods;

  const onSubmit = (data) =>
    setDefaultValues({
      textValue: data.textValue,
      radioValue: data.radioValue,
    });

  useEffect(() => {
    window.localStorage.setItem("FORM_DEMO", JSON.stringify(defaultValues));
  }, [defaultValues]);

  useEffect(() => {
    if (storedData !== null) {
      setDefaultValues(storedData);
      setInput(storedData.textValue);
      setRadio(storedData.radioValue);
    }
  }, []);

  return (
    <Grid container spacing={4} className="mx-auto font-Gordita">
      <Grid item xs={10}>
        <FormInputText
          name="textValue"
          label="Test Text Input"
          control={control}
          onChange={watch(onSubmit)}
        />
      </Grid>
      <Grid item xs={10}>
        <FormInputRadio
          name={"radioValue"}
          control={control}
          label={"Radio Input"}
          options={radioOptions}
          validation={{ required: "Required" }}
          radioValue={radio}
          setValue={setValue}
        />
      </Grid>
      <Grid item xs={10}>
        <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
}

export default formdemo;
