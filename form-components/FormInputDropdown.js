import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormHelperText,
} from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

const FormInputDropdown = ({
  name,
  control,
  label,
  options,
  dropdownValue,
  setValue,
  states,
  validation,
  defaultDropdown
}) => {
  const generateSingleOptions = () => {
    if (options) {
      return options.map((option, index) => {
        return (
          <MenuItem key={index} value={option?.id}>
            {option.label}
          </MenuItem>
        );
      });
    } else if (states) {
      return states.map((state, index) => {
        return (
          <MenuItem key={index} value={state.capital}>
            <p>{state.capital}</p>
          </MenuItem>
        );
      });
    }
  };

  useEffect(() => {
    if (dropdownValue) setValue(name, dropdownValue);
  }, [dropdownValue]);

  return (
    <>
      <Controller
        rules={validation}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl
            size={"large"}
            error={error ? true : false}
            color="secondary"
            fullWidth
          >
            <InputLabel>{label}</InputLabel>
            <Select onChange={onChange} value={value} defaultValue={defaultDropdown ?? ''}>
              {generateSingleOptions()}
            </Select>
            {error && (
              <FormHelperText>{error ? error.message : null}</FormHelperText>
            )}
          </FormControl>
        )}
        control={control}
        name={name}
      />
    </>
  );
};

export default FormInputDropdown;
