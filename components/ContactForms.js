import { Button, ButtonGroup, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import FormInputDropdown from "../form-components/FormInputDropdown";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { FormInputText } from "../form-components/FormInputText";

function ContactForms({ text }) {
  const checkboxOptions = [
    {
      label: "I am the primary account holder for this account",
      value: "1",
    },
  ];
  const states = [
    {
      name: "australian capital territory",
      abbreviation: "act",
      capital: "canberra",
      type: "territory",
    },
    {
      name: "new south wales",
      abbreviation: "nsw",
      capital: "sydney",
      type: "state",
    },
    {
      name: "northern territory",
      abbreviation: "nt",
      capital: "darwin",
      type: "territory",
    },
    {
      name: "queensland",
      abbreviation: "qld",
      capital: "brisbane",
      type: "state",
    },
    {
      name: "south australia",
      abbreviation: "sa",
      capital: "adelaide",
      type: "state",
    },
    {
      name: "tasmania",
      abbreviation: "tas",
      capital: "hobart",
      type: "state",
    },
    {
      name: "victoria",
      abbreviation: "vic",
      capital: "melbourne",
      type: "state",
    },
    {
      name: "western australia",
      abbreviation: "wa",
      capital: "perth",
      type: "state",
    },
  ];

  const storedData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("CONTACT_FORMS_DETAILS")
    ) || [];

  const [contactFormsDetails, setContactFormsDetails] = useState({
    dropdown: "",
  });

  const methods = useForm({ defaultValues: contactFormsDetails });
  const { handleSubmit, control, watch, setValue } = methods;
  // const onSubmit = (data) => console.log(data);

  // Retain Values

  const [dropdown, setDropdown] = useState("");

  useEffect(() => {
    window.localStorage.setItem(
      "CONTACT_FORMS_DETAILS",
      JSON.stringify(contactFormsDetails)
    );
  }, [contactFormsDetails]);

  useEffect(() => {
    if (storedData !== null) {
      setContactFormsDetails(storedData);
      setDropdown(storedData?.dropdown);
    }
  }, []);

  const handleChange = (data) => {
    setContactFormsDetails({
      dropdown: data.dropdown,
    });
  };

  // Handle Existing Button
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-medium";

  // const handleButtonSelect = (value) => {
  //   setExistingBusiness(value.toString());
  //   if (value === 0) {
  //     setBtn1(true);
  //     setBtn2(false);
  //   } else {
  //     setBtn1(false);
  //     setBtn2(true);
  //   }
  // };

  // useEffect(() => {
  //   if (existingBusiness !== "") {
  //     setValue("existingBusiness", existingBusiness);
  //     handleButtonSelect(parseInt(existingBusiness));
  //   }
  // }, [existingBusiness]);
  return (
    <section className="flex flex-col py-8 px-6 sm:px-8 sm:py-6 md:p-12 bg-white gap-6 rounded-lg lg:col-span-3">
      <p>{text}</p>
      <p className="font-medium text-sm">
        Do you have an existing business account with Origin?
      </p>

      <FormInputDropdown
        name="dropdown"
        control={control}
        label="State"
        states={states}
        setValue={setValue}
        dropdownValue={dropdown}
        onChange={watch(handleChange)}
        validation={{ required: "Required" }}
      />

      <Button
        // onClick={handleSubmit(onSubmit)}
        variant="contained"
        color="primary"
        size="large"
        style={{
          borderRadius: 200,
          boxShadow: "none",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
      >
        Submit
      </Button>
      <p>
        *Once you submit your application, one of our Clean Ambition club
        representatives will get in contact to review your energy plan options.
      </p>
    </section>
  );
}

export default ContactForms;
