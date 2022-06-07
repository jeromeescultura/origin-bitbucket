import { useEffect, useState } from "react";
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
<<<<<<< HEAD
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

=======
  checkboxValue,
  setCheckboxValue,
}) => {
>>>>>>> 2c881f8f786ce378cd057bc4d581034da748323b
  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };
<<<<<<< HEAD
=======
  const [selectedItems, setSelectedItems] = useState([]);
>>>>>>> 2c881f8f786ce378cd057bc4d581034da748323b

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

<<<<<<< HEAD
  return (
    <FormControl size={"small"} variant={"outlined"}>
      {label && <FormLabel component="legend">{label}</FormLabel>}
=======
  useEffect(() => {
    if (checkboxValue) {
      setValue(name, checkboxValue);
    } else {
      setValue(name, selectedItems);
    }
  }, [selectedItems, checkboxValue]);
>>>>>>> 2c881f8f786ce378cd057bc4d581034da748323b

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
<<<<<<< HEAD
                        checked={selectedItems?.includes(option.value)}
=======
                        color="secondary"
                        checked={
                          (checkboxValue &&
                            checkboxValue.includes(option.value)) ||
                          selectedItems?.includes(option.value)
                        }
>>>>>>> 2c881f8f786ce378cd057bc4d581034da748323b
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
