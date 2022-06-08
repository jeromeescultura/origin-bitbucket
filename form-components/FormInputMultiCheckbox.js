import { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputMultiCheckbox = ({
  name,
  control,
  setValue,
  label,
  options,
  validation,
  checkboxValue,
  setCheckboxValue,
}) => {
  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (checkboxValue) {
      if (checkboxValue.length > 0) {
        setSelectedItems(checkboxValue);
      }
    }
  }, [checkboxValue]);

  useEffect(() => {
    if (setCheckboxValue) setCheckboxValue(selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    if (checkboxValue) {
      setValue(name, checkboxValue);
    } else {
      setValue(name, selectedItems);
    }
  }, [selectedItems, checkboxValue]);

  return (
    <Controller
      control={control}
      rules={validation}
      name={name}
      render={({ fieldState: { error } }) => {
        return (
          options &&
          options.map((option, index) => (
            <FormControl
              key={index}
              variant={"outlined"}
              error={error ? true : false}
            >
              {label && <FormLabel component="legend">{label}</FormLabel>}
              <FormGroup>
                <FormControlLabel
                  label={option.label || option.text}
                  key={option.value}
                  control={
                    <Checkbox
                      color="secondary"
                      size="large"
                      checked={
                        (checkboxValue &&
                          checkboxValue.includes(option.value)) ||
                        selectedItems?.includes(option.value)
                      }
                      onChange={() => handleSelect(option.value)}
                    />
                  }
                />
              </FormGroup>
              {error && (
                <FormHelperText>{error ? error.message : null}</FormHelperText>
              )}
            </FormControl>
          ))
        );
      }}
    />
  );
};
