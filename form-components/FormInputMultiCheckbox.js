import { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
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
}) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (value) => {
    const isPresent = selectedItems.indexOf(value);
    if (isPresent !== -1) {
      const remaining = selectedItems.filter((item) => item !== value);
      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    if (selectedItems) setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <Controller
      control={control}
      rules={validation}
      name={name}
      render={({ fieldState: { error } }) => {
        return options.map((option, index) => (
          <FormControl
            key={index}
            size={"small"}
            variant={"outlined"}
            error={error ? true : false}
          >
            {label && <FormLabel component="legend">{label}</FormLabel>}
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  size="large"
                  checked={selectedItems?.includes(option.value)}
                  onChange={() => handleSelect(option.value)}
                />
              }
              label={option.label}
              key={option.value}
            />
            {error && (
              <FormHelperText>{error ? error.message : null}</FormHelperText>
            )}
          </FormControl>
        ));
      }}
    />
  );
};
