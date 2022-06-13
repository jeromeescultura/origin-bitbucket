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

  const existingOptions = [
    {
      value: "Yes",
    },
    {
      value: "No",
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

  const [contactFormsDetails, setContactFormsDetails] = useState(storedData);
  const methods = useForm({ defaultValues: contactFormsDetails });
  const { handleSubmit, control, watch, setValue } = methods;
  const onSubmit = (data) => console.log(data);

  // Retain Values
  const [existingBusiness, setExistingBusiness] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [unitNo, setUnitNo] = useState("");
  const [streetNo, setStreetNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postcode, setpostcode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [primaryAccountHolder, setPrimaryAccountHolder] = useState("");

  useEffect(() => {
    if (contactFormsDetails !== null) {
      setContactFormsDetails(contactFormsDetails);
      setExistingBusiness(contactFormsDetails.existingBusiness);
      setAccountNumber(contactFormsDetails.accountNumber);
      setUnitNo(contactFormsDetails.unitNo);
      setStreetNo(contactFormsDetails.streetNo);
      setStreet(contactFormsDetails.street);
      setCity(contactFormsDetails.city);
      setState(contactFormsDetails.state);
      setpostcode(contactFormsDetails.postcode);
      setFirstName(contactFormsDetails.firstName);
      setLastName(contactFormsDetails.lastName);
      setEmail(contactFormsDetails.email);
      setPhone(contactFormsDetails.phone);
      setPrimaryAccountHolder(contactFormsDetails.primaryAccountHolder);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "CONTACT_FORMS_DETAILS",
      JSON.stringify(contactFormsDetails)
    );
  }, [contactFormsDetails]);

  const handleChange = (data) => {
    setContactFormsDetails({
      existingBusiness: data.existingBusiness,
      accountNumber: data.accountNumber,
      unitNo: data.unitNo,
      streetNo: data.streetNo,
      street: data.street,
      city: data.city,
      state: data.state,
      postcode: data.postcode,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      primaryAccountHolder: data.primaryAccountHolder,
    });
  };

  // Handle Existing Button
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-medium";

  const handleButtonSelect = (value) => {
    setExistingBusiness(value.toString());
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
    } else {
      setBtn1(false);
      setBtn2(true);
    }
  };

  useEffect(() => {
    if (existingBusiness !== "") {
      setValue("existingBusiness", existingBusiness);
      handleButtonSelect(parseInt(existingBusiness));
    }
  }, [existingBusiness]);
  return (
    <section className="flex flex-col py-8 px-6 sm:px-8 sm:py-6 md:p-12 bg-white gap-6 rounded-lg lg:col-span-3">
      <p>{text}</p>
      <p className="font-medium text-sm">
        Do you have an existing business account with Origin?
      </p>

      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        size="large"
        color="secondary"
        arial-label="contained button group"
        fullWidth
        className="max-w-[300px]"
      >
        <Controller
          control={control}
          name="existingBusiness"
          render={({}) => {
            return (
              <>
                <Button
                  className={btn1 ? activeStyles : ""}
                  value={"Yes"}
                  onClick={() => handleButtonSelect(0)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                  }}
                >
                  Yes
                </Button>
                <Button
                  className={btn2 ? activeStyles : ""}
                  value={"No"}
                  onClick={() => handleButtonSelect(1)}
                  sx={{
                    color: "#505050",
                    borderColor: "#E3E3E3",
                    fontSize: "16",
                  }}
                >
                  No
                </Button>
              </>
            );
          }}
        />
      </ButtonGroup>

      {btn1 && (
        <>
          <p className="font-medium text-sm">
            What is your Origin Account Number?
          </p>
          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="accountNumber"
                label="Account number"
                control={control}
                setValue={setValue}
                inputValue={accountNumber}
                onChange={watch(handleChange)}
                // validation={{ required: "required" }}
              />
            </Grid>
          </Grid>
        </>
      )}
      <p className="font-medium text-sm">
        What is the address of your primary site on the account?
      </p>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormInputText
            name="unitNo"
            label="Unit no."
            control={control}
            setValue={setValue}
            inputValue={unitNo}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
        <Grid item xs={6}>
          <FormInputText
            name="streetNo"
            label="Street no."
            control={control}
            setValue={setValue}
            inputValue={streetNo}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="street"
            label="Street"
            control={control}
            setValue={setValue}
            inputValue={street}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="city"
            label="City/Suburb"
            control={control}
            setValue={setValue}
            inputValue={city}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormInputDropdown
            name="state"
            control={control}
            label="State"
            states={states}
            setValue={setValue}
            inputValue={state}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>

        <Grid item xs={6}>
          <FormInputText
            name="postcode"
            label="Postcode"
            control={control}
            setValue={setValue}
            inputValue={postcode}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <p className="font-medium text-sm">Your contact details</p>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="firstName"
            label="First Name"
            control={control}
            setValue={setValue}
            inputValue={firstName}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="lastName"
            label="Last Name"
            control={control}
            setValue={setValue}
            inputValue={lastName}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="email"
            label="Email Address"
            control={control}
            setValue={setValue}
            inputValue={email}
            onChange={watch(handleChange)}
            validation={{
              required: "Required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputText
            name="phone"
            label="Phone number"
            control={control}
            setValue={setValue}
            inputValue={phone}
            onChange={watch(handleChange)}
            validation={{ required: "Required" }}
          />
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <FormInputMultiCheckbox
            control={control}
            name={"primaryAccountHolder"}
            options={checkboxOptions}
            setValue={setValue}
            inputValue={primaryAccountHolder}
            onChange={watch(handleChange)}
          />
        </Grid>
      </Grid>
      <Button
        onClick={handleSubmit(onSubmit)}
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
