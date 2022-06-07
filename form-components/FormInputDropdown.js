import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useEffect } from "react";
import { Controller } from "react-hook-form";

const FormInputDropdown = ({
  name,
  control,
  label,
  options,
  dropdownValue,
  setValue,
}) => {
  const generateSingleOptions = () => {
    return options.map((option, index) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  useEffect(() => {
    if (dropdownValue) setValue(name, dropdownValue);
  }, [dropdownValue]);

  return (
    <FormControl size={"large"} className="mt-4 w-full">
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select onChange={onChange} value={value}>
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  );
};

export default FormInputDropdown;
