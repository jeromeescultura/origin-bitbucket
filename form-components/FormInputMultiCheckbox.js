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
    if (setCheckboxValue) setCheckboxValue(selectedItems);
  }, [selectedItems]);

  useEffect(() => {
    if (checkboxValue) {
      console.log("checkboxValue");
      setValue(name, checkboxValue);
    } else {
      console.log("selectedItems");
      setValue(name, selectedItems);
    }
  }, [selectedItems, checkboxValue]);

  useEffect;

  return (
    <FormControl size={"small"} variant={"outlined"}>
      <FormLabel component="legend">{label}</FormLabel>
      <div className="flex flex-col space-y-5">
        {options?.map((option) => {
          return (
            <FormControlLabel
              control={
                <Controller
                  name={name}
                  render={({}) => {
                    return (
                      <Checkbox
                        color="secondary"
                        checked={
                          (checkboxValue &&
                            checkboxValue.includes(option.value)) ||
                          selectedItems.includes(option.value)
                        }
                        onChange={() => handleSelect(option.value)}
                      />
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
    </FormControl>
  );
};
