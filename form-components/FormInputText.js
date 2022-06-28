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
  multiline,
  rows
}) => {
  useEffect(() => {
    if (inputValue) setValue(name, inputValue);
    
  }, [inputValue]);

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
          multiline={multiline ?? false}
          rows={rows ?? 1}
        />
      )}
    />
  );
};
