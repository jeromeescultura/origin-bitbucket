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
import { Controller, set, useForm } from "react-hook-form";
import MoreDetailsComponent from "../MoreDetailsComponent";
import LinearProgress from "@mui/material/LinearProgress";
import { formatPrice } from "../../functions/recofunctions/RecoFunctions";

const FinanceCalc = ({
  recommend,
  impactLevel,
  handleButtonSelect,
  usage,
  industry,
  industryCost,
  increasePercentage,
  withoutSolar,
  withSolar,
  solarReduction,
  totalCost,
  btn1,
  btn2,
  btn3,
}) => {
  const methods = useForm({ defaultValues: impactLevel });
  const { control, watch } = methods;

  const handleUsage = (data) => setButtonSelect(data.usage);

  const activeStyles = "border-accentColor bg-highlight font-medium";
  console.log(industry?.industryCost?.high, "industry");

  return (
    <Card
      variant="outlined"
      className="border-none rounded-xl max-w-[530px] mx-auto"
    >
      <CardContent>
        <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center pt-8 pb-6">
          Financial impact calculator
        </p>

        <Typography sx={{ mt: "16px", fontSize: "14px" }}>
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
                  {industry?.industryCost?.high > 0 && (
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
                  )}
                </>
              );
            }}
          />
        </ButtonGroup>
        <Typography sx={{ mt: "32px", mb: "16px", fontSize: "14px" }}>
          Bill impact on {usage} kWh average monthly use
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ p: 0 }}>
            <div className="bg-[#F8F8F8] rounded-lg h-[125px] w-full ">
              {recommend === "solar" ? (
                <div className="flex items-end w-full h-full justify-center">
                  <div className="mb-4 min-w-[80px] text-right">
                    <p className="mt-10 text-xs">{formatPrice(withoutSolar)}</p>
                  </div>
                  <Box className="-rotate-90 mb-4 w-[100px] ">
                    <LinearProgress
                      className="h-7"
                      variant="determinate"
                      value={100}
                    />

                    <LinearProgress
                      color="secondary"
                      className="h-7 mt-2"
                      variant="determinate"
                      value={100 - solarReduction}
                    />
                  </Box>
                  <div className="mb-4 min-w-[120px] text-left">
                    <div className="bg-[#FFC72C] text-center rounded-md">
                      <p className="text-xs font-medium whitespace-nowrap px-2 py-1">
                        {solarReduction}% saving
                      </p>
                    </div>
                    <p className="mt-2 text-xs">{formatPrice(withSolar)}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-end w-full h-full justify-center">
                  <div className="mb-4 min-w-[80px] text-right">
                    <p className="mt-10 text-xs">{formatPrice(industryCost)}</p>
                  </div>
                  <Box className="-rotate-90 mb-4 w-[100px] ">
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
                  </Box>
                  <div className="mb-4 min-w-[120px] text-left">
                    <div className=" bg-[#FFC72C] rounded-md text-center">
                      <p className="text-xs font-medium whitespace-nowrap px-2 py-1">
                        {increasePercentage}% increase
                      </p>
                    </div>
                    <p className="mt-2 text-xs">{formatPrice(totalCost)}</p>
                  </div>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ p: 0 }}>
          <div className="my-5 flex items-center justify-left font-light text-xs">
            <div className="flex items-center gap-4">
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
