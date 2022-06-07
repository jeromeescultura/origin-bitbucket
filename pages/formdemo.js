import { Button, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import FormInputRadio from "../form-components/FormInputRadio";
import { FormInputText } from "../form-components/FormInputText";

function formdemo() {
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

  const defaultValues = {
    textValue: "",
    radioValue: "",
  };
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, onChange, reset, control, setValue, watch } = methods;
  const onSubmit = (data) => console.log(data);

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
