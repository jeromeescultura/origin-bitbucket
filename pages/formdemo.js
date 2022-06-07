import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";

function formdemo() {
  const defaultValues = {
    textValue: "",
  };
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, onChange, reset, control, setValue, watch } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormInputText
        name="textValue"
        label="Test Text Input"
        control={control}
        onChange={watch(onSubmit)}
      />
      <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
        Submit
      </Button>
    </div>
  );
}

export default formdemo;
