import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Controller, set, useForm } from "react-hook-form";
import MoreDetailsComponent from "../MoreDetailsComponent";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const FinanceCalc = ({ recommend, industry }) => {
  const [extra, setExtra] = useState(false);
  const [buttonSelect, setButtonSelect] = useState(0);
  const [usage, setUsage] = useState("<40");
  const [offSet, setOffSet] = useState();
  const [dailyUsage, setDailyUsage] = useState(0);
  const [industryCost, setIndustryCost] = useState(0);
  const [withSolar, setWithSolar] = useState(0);

  const methods = useForm({ defaultValues: buttonSelect });
  const { control, watch, setValue } = methods;

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const expandExtra = () => {
    setExtra(!extra);
  };

  useEffect(() => {
    if (recommend === "carbonOffset") {
      setOffSet(0.015);
    } else if (recommend === "greenPower") {
      setOffSet(0.028);
    } else if (recommend === "solar") {
      setOffSet(0.25);
    }
  }, [recommend, buttonSelect]);

  useEffect(() => {
    setDailyUsage(industry?.dailyUsage?.low);
    setIndustryCost(industry?.industryCost?.low);
    setWithSolar(industry?.withSolarCost?.low);
  }, [industry]);

  const handleButtonSelect = (value) => {
    setValue("usage", value);
    if (value === 0) {
      setUsage("<40");
      setDailyUsage(industry?.dailyUsage?.low);
      setIndustryCost(industry?.industryCost?.low);
      setWithSolar(industry?.withSolarCost?.low);
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    } else if (value === 1) {
      setUsage("40-440");
      setDailyUsage(industry?.dailyUsage?.medium);
      setIndustryCost(industry?.industryCost?.medium);
      setWithSolar(industry?.withSolarCost?.medium);
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
    } else if (value === 2) {
      setUsage(">440");
      setDailyUsage(industry?.dailyUsage?.high);
      setIndustryCost(industry?.industryCost?.high);
      setWithSolar(industry?.withSolarCost?.high);
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
    }
  };

  const handleUsage = (data) => setButtonSelect(data.usage);

  const activeStyles = "border-accentColor bg-highlight font-medium";

  // Math.round((num + Number.EPSILON) * 100) / 100
  const extraCost =
    Math.round((((dailyUsage * 365) / 12) * offSet + Number.EPSILON) * 100) /
    100;

  const increasePercentage =
    Math.round(((extraCost / industryCost) * 100 + Number.EPSILON) * 100) / 100;

  const solarReduction =
    Math.round(
      (((extraCost - withSolar) / extraCost) * 100 + Number.EPSILON) * 100
    ) / 100;

  // Math.round(
  //   ((extraCost / industry?.industryCost?.low) * 100 + Number.EPSILON) * 100
  // ) / 100;

  const totalCost =
    Math.round(
      (extraCost + industry?.industryCost?.low + Number.EPSILON) * 100
    ) / 100;

  return (
    <Card
      variant="outlined"
      className="border-none rounded-xl max-w-[510px] mx-auto"
    >
      <CardContent>
        <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center pt-8 pb-6">
          Financial impact calculator
        </p>
        <p>extraCost: {extraCost}</p>
        <p>solar savings: {solarReduction}%</p>
        <p>increasePercentage: {increasePercentage}%</p>
        <p>totalCost: {totalCost}</p>
        <Typography sx={{ textAlign: "center", mt: "16px", fontSize: "14px" }}>
          Toggle to compare how your monthly bills might change depending on
          different usage levels
        </Typography>
        <ButtonGroup
          sx={{ mt: { xs: "12px", lg: "24px" } }}
          variant="outlined"
          aria-label="outlined button group"
          size="large"
          color="secondary"
          arial-label="contained button group"
          fullWidth
        >
          <Controller
            onChange={watch(handleUsage)}
            control={control}
            name={"usage"}
            render={() => {
              return (
                <>
                  <Button
                    className={
                      btn1 ? activeStyles : "hover:border hover:border-gray-300"
                    }
                    value={"low"}
                    onClick={() => handleButtonSelect(0)}
                    sx={{
                      color: "#505050",
                      borderColor: "#E3E3E3",
                      fontSize: "16",
                    }}
                  >
                    {"Low"}
                  </Button>
                  <Button
                    className={`${
                      btn2
                        ? activeStyles
                        : `hover:border hover:border-gray-300 ${
                            btn1 &&
                            "border-l-accentColor hover:border-l-accentColor"
                          }`
                    } `}
                    value={"medium"}
                    onClick={() => handleButtonSelect(1)}
                    sx={{
                      color: "#505050",
                      borderColor: "#E3E3E3",
                      fontSize: "16",
                    }}
                  >
                    {"Medium"}
                  </Button>
                  <Button
                    className={
                      btn3
                        ? activeStyles
                        : `hover:border hover:border-gray-300 ${
                            btn2 &&
                            "border-l-accentColor hover:border-l-accentColor"
                          }`
                    }
                    value={"high"}
                    onClick={() => handleButtonSelect(2)}
                    sx={{
                      color: "#505050",
                      borderColor: "#E3E3E3",
                      fontSize: "16",
                    }}
                  >
                    {"High"}
                  </Button>
                </>
              );
            }}
          />
        </ButtonGroup>
        <Typography sx={{ textAlign: "center", my: "12px", fontSize: "14px" }}>
          Bill impact on {usage} kWh average monthly use
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} sx={{ p: 0 }}>
            <div className="bg-[#F8F8F8] rounded-lg  max-h-[131px] min-h-[104px] flex items-end justify-center relative ">
              {recommend === "solar" ? (
                <div className="max-w-[157px] min-w-[151px] flex justify-around text-xs font-light items-end">
                  <Box
                    sx={{ width: "100px" }}
                    className="-rotate-90 h-full absolute"
                  >
                    <LinearProgress
                      className="h-7"
                      variant="determinate"
                      value={20}
                    />
                    <LinearProgress
                      color="secondary"
                      className="h-7 mt-2"
                      variant="determinate"
                      value={20 + solarReduction}
                    />
                    <p className="mt-14 rotate-90">
                      {solarReduction}% <br />
                      reduction
                    </p>
                  </Box>
                  {/* <div className="bg-lime-400 w-6 h-[100px]"></div>
                  <div className="bg-green-800 w-6 h-[100px]"></div>
                  <div className="pb-10">{increasePercentage}% reduction</div> */}
                </div>
              ) : (
                <Box
                  sx={{ width: "100px" }}
                  className="-rotate-90  h-full absolute"
                >
                  <LinearProgress
                    className="h-7"
                    variant="determinate"
                    value={50}
                  />
                  <LinearProgress
                    color="secondary"
                    className="h-7 mt-2"
                    variant="determinate"
                    value={50 + increasePercentage}
                  />
                  <p className="mt-14 rotate-90 ">
                    {increasePercentage}% <br />
                    increase
                  </p>
                </Box>
                // <div className="max-w-[157px] min-w-[151px] flex justify-around text-xs font-light items-end">
                //   {/* <div className="bg-lime-400 w-6 h-[50px]"></div> */}
                //   {/* <div className={`bg-green-800 w-6 h-[${high}]`}></div> */}

                //   <div className="pb-10">{increasePercentage}% increase</div>
                // </div>
              )}
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ p: 0, mb: "48px" }}>
            <div className="lg:max-h-[131px] lg:min-h-[104px] flex items-center justify-center font-light text-xs">
              <div className="flex lg:flex-col space-x-8 lg:space-y-2 lg:space-x-0">
                <div className="flex items-center">
                  <div className="w-3 h-3 inline-block bg-lime-400 rounded-full mr-2"></div>
                  Without {recommend === "carbonOffset" && "Go Zero"}{" "}
                  {recommend === "solar" && "Solar"}
                  {recommend === "greenPower" && "GreenPower"}
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 inline-block bg-green-800 rounded-full mr-2"></div>
                  With {recommend === "carbonOffset" && "Go Zero"}{" "}
                  {recommend === "solar" && "Solar"}
                  {recommend === "greenPower" && "GreenPower"}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        {increasePercentage <= 0 && (
          <MoreDetailsComponent text="Why it costs you nothing extra">
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Donec rutrum congue leo eget malesuada. Proin eget tortor
              risus. Curabitur non nulla sit amet nisl tempus convallis quis ac
              lectus.
            </p>
          </MoreDetailsComponent>
        )}
      </CardContent>
    </Card>
  );
};

export default FinanceCalc;
