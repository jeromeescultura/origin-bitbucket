import { useDebugValue, useEffect, useState } from "react";
import { server } from "../config";
import Image from "next/image";
import { useRouter } from "next/router";
import { Controller, useForm } from "react-hook-form";
import ContentContainer from "../containers/ContentContainer";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import FormInputDropdown from "../form-components/FormInputDropdown";
import LeafRating from "../components/LeafRating";

import {
  Grid,
  Container,
  Typography,
  Button,
  ButtonGroup,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import FormInputButton from "../form-components/FormInputButton";
import ButtonQuestion from "../components/ButtonQuestion";
function signup() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const defaultValues = {
    unitNo: "",
    streetNo: "",
    street: "",
    city: "",
    state: "",
    postcode: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    existingBusiness: false,
    accountNumber: "",
  };
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
        window.localStorage.getItem("SIGNUP_DETAILS")
    ) || [];

  const [signUpDetails, setSignUpDetails] = useState(storedData);
  const methods = useForm({ defaultValues: signUpDetails });
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

  console.log(signUpDetails.existingBusiness, "existu");
  useEffect(() => {
    if (signUpDetails !== null) {
      setSignUpDetails(signUpDetails);
      setExistingBusiness(signUpDetails.existingBusiness);
      setAccountNumber(signUpDetails.accountNumber);
      setUnitNo(signUpDetails.unitNo);
      setStreetNo(signUpDetails.streetNo);
      setStreet(signUpDetails.street);
      setCity(signUpDetails.city);
      setState(signUpDetails.state);
      setpostcode(signUpDetails.postcode);
      setFirstName(signUpDetails.firstName);
      setLastName(signUpDetails.lastName);
      setEmail(signUpDetails.email);
      setPhone(signUpDetails.phone);
      setPrimaryAccountHolder(signUpDetails.primaryAccountHolder);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "SIGNUP_DETAILS",
      JSON.stringify(signUpDetails)
    );
  }, [signUpDetails]);

  const handleChange = (data) => {
    setSignUpDetails({
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
    <div className="bg-primaryBG pb-32">
      <section className="pt-6 lg:pt-8 ">
        <div className="w-full xl:w-[1108px] mx-auto">
          <div className="w-16 lg:w-20 cursor-pointer ml-auto pr-4">
            <Image
              src="/images/origin-logo.svg"
              width={90}
              height={90}
              objectFit="contain"
              alt="origin-logo"
              onClick={handleClick}
            />
          </div>
        </div>
        <div className="text-center font-light w-full mt-4 lg:-mt-8">
          <h2 className="text-primaryText font-bold w-full sm:w-[60vw] lg:w-[50vw] mx-auto">
            Applying to Origin&#39;s Clean Ambition Program
          </h2>
          <p className="subtitle my-6 leading-loose w-[300px] sm:w-full mx-auto">
            Thank you for choosing to join the program!
          </p>
        </div>
      </section>

      <ContentContainer style="grid gap-6 lg:gap-8 lg:grid-col-5 lg:grid-flow-col lg:grid-flow-col">
        <section className="w-full  lg:order-2 lg:col-span-2">
          <div className="bg-white py-8 px-4 lg:p-12 rounded-lg">
            <div className="text-center space-y-2">
              <p className="text-sm pb-4">You have chosen to pledge with</p>
              <LeafRating count={4} />
              <p className="font-medium subtitle">Origin Go Zero</p>
              <Button className="lg:hidden">Pledge details</Button>
            </div>
            <div className="lg:inline hidden text-center">
              <div className="space-y-1 mt-8">
                <p className="font-medium">How you reduce impact</p>
                <p>Through offsetting your energy use</p>
              </div>
              <div className="space-y-2 mt-8">
                <p className="font-medium">Estimated cost</p>
                <h2>$0</h2>
                <p className="text-xs">
                  extra p/month on any <br />
                  Origin Energy plan*
                </p>
              </div>
              <div className="mt-16">
                <div className="w-24 h-24 mx-auto">
                  <Image
                    src="/icons/trees.svg"
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="trees"
                  />
                </div>
                <p className="text-xs mt-6">
                  If all businesses like yours did this, we could neutralise
                  [XX] tonnes of carbon emissions - equivalent planting [20,000]
                  young trees to clean up the atmosphere.
                </p>
              </div>
              <div className="mt-16">
                <p className="font-medium">You’ve chosen to do more</p>
                <div className="flex gap-4 justify-center mt-4">
                  <div className="w-[20px] h-[20px]">
                    <Image
                      src="/icons/check-green.svg"
                      width={50}
                      height={50}
                      objectFit="contain"
                      alt="trees"
                    />
                  </div>
                  <p className="text-left">
                    Participate in our net zero <br />
                    strategy review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col py-8 px-6 sm:px-8 sm:py-6 md:p-12 bg-white gap-6 rounded-lg lg:col-span-3">
          <p>
            Please give us a few details, and one of our specialists will
            contact you about finalising your application.
          </p>
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
                    validation={{ required: "Required" }}
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
                // validation={{
                //   required: "Required",
                //   pattern: {
                //     value:
                //       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                //     message: "Please enter a valid email",
                //   },
                // }}
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
                validation={{ required: "Required" }}
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
            representatives will get in contact to review your energy plan
            options.
          </p>
        </section>
      </ContentContainer>
    </div>
  );
}

export default signup;
