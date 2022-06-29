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
  defaultDropdown,
}) => {
  const generateSingleOptions = () => {
    if (options) {
      return options.map((option, index) => {
        return (
          <MenuItem key={index} value={option?.value}>
            <p className="text-xs xs:text-base md:text-base">{option.label}</p>
          </MenuItem>
        );
      });
    } else if (states) {
      return states.map((state, index) => {
        return (
          <MenuItem key={index} value={state.name}>
            <p className="capitalize text-xs xs:text-base md:text-base">
              {state.name}
            </p>
          </MenuItem>
        );
      });
    }
  };

  useEffect(() => {
    if (dropdownValue) setValue(name, dropdownValue);
  }, [dropdownValue]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        left: "0px !important",
      },
    },
  };
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
            <Select
              label={label}
            
              onChange={onChange}
              value={value}
              defaultValue={defaultDropdown ?? ""}
              variant="outlined"

            >
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
