import { useEffect, useState } from "react";
import { server } from "../config";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
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
  const [selectedBtn, setSelectedBtn] = useState("Yes");
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
    existingBusiness: "Yes",
  };
  const methods = useForm({ defaultValues: defaultValues });
  const { handleSubmit, onChange, reset, control, setValue, watch } = methods;
  const onSubmit = (data) => console.log(data);

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
              <p className="font-bold subtitle">Origin Go Zero</p>
              <Button className="lg:hidden">Pledge details</Button>
            </div>
            <div className="lg:inline hidden text-center">
              <div className="space-y-1 mt-8">
                <p className="font-bold">How you reduce impact</p>
                <p>Through offsetting your energy use</p>
              </div>
              <div className="space-y-2 mt-8">
                <p className="font-bold">Estimated cost</p>
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
                <p className="font-bold">You’ve chosen to do more</p>
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
          <p className="font-bold text-sm">
            Do you have an existing business account with Origin?
          </p>
          <FormInputButton
            name="existingBusiness"
            control={control}
            options={existingOptions}
            setValue={setValue}
          />
          <p className="font-bold text-sm">
            What is the address of your primary site on the account?
          </p>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormInputText
                name="unitNo"
                label="Unit no."
                control={control}
                validation={{ required: "Required" }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="streetNo"
                label="Street no."
                control={control}
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
                validation={{ required: "Required" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormInputDropdown
                setValue={setValue}
                name="state"
                control={control}
                label="State"
                states={states}
                validation={{ required: "Required" }}
              />

              {/* <FormInputText
                name="state"
                label="State"
                control={control}
                validation={{ required: "Required" }}
              /> */}
            </Grid>
            <Grid item xs={6}>
              <FormInputText
                name="postcode"
                label="Postcode"
                control={control}
                validation={{ required: "Required" }}
              />
            </Grid>
          </Grid>

          <p className="font-bold text-sm">Your contact details</p>

          <Grid container>
            <Grid item xs={12}>
              <FormInputText
                name="firstName"
                label="First Name"
                control={control}
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
                validation={{ required: "Required" }}
              />
            </Grid>
          </Grid>
          <FormInputMultiCheckbox
            control={control}
            setValue={setValue}
            name={"primaryAccountHolder"}
            options={checkboxOptions}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit(onSubmit)}
            style={{
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              paddingRight: "2rem",
              marginTop: "1rem",
            }}
          >
            Submit my application
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
