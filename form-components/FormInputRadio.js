import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

const generateRadioOptions = (options) => {
  return options?.map((singleOption, index) => (
    <FormControlLabel
      key={index}
      value={singleOption.value ? singleOption.value : ""}
      label={singleOption.label}
      control={<Radio color="secondary" size="medium" />}
    />
  ));
};

const FormInputRadio = ({
  name,
  control,
  label,
  validation,
  options,
  radioValue,
  setValue,
}) => {
  useEffect(() => {
    if (radioValue) setValue(name, radioValue);
  }, [radioValue]);
  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl component="fieldset" error={error ? true : false}>
          {label && (
            <FormLabel component="legend" color="secondary">
              {label}
            </FormLabel>
          )}
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions(options)}
          </RadioGroup>
          {error && (
            <FormHelperText>{error ? error.message : null}</FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
};

export default FormInputRadio;
