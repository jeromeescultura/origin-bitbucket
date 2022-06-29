import { TextField } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

export const FormInputText = ({
  name,
  label,
  control,
  setValue,
  validation,
  inputValue,
  minValue,
  maxValue,
  type,
}) => {
  useEffect(() => {
    if (inputValue) setValue(name, inputValue);
  }, [inputValue]);

  const inputProps = {
    max: maxValue,
    min: minValue,
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="large"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="filled"
          color="secondary"
          type={type ? type : "text"}
          inputProps={minValue && inputProps}
        />
      )}
    />
  );
};
