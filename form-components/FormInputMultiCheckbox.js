import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { Controller } from "react-hook-form";

export const FormInputMultiCheckbox = ({
  name,
  control,
  setValue,
  label,
  options,
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

  useEffect;

  return (
    <div>
      {options?.map((option) => {
        return (
          <FormControlLabel
            control={
              <Controller
                name={name}
                render={({ fieldState: { error } }) => {
                  return (
                    <FormControl
                      size={"small"}
                      variant={"outlined"}
                      error={error ? true : false}
                    >
                      <FormLabel component="legend">{label}</FormLabel>
                      <Checkbox
                        color="secondary"
                        checked={
                          (checkboxValue &&
                            checkboxValue.includes(option.value)) ||
                          selectedItems?.includes(option.value)
                        }
                        onChange={() => handleSelect(option.value)}
                      />
                    </FormControl>
                  );
                }}
                control={control}
              />
            }
            label={option.label || option.text}
            key={option.value}
          />
        );
      })}
    </div>
  );
};
