import { Checkbox, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputText = ({ name, label, control, validation }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={validation}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
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
        />
      )}
    />
  );
};
