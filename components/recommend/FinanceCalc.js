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

  return (
    <Card
      variant="outlined"
      className="border-none rounded-xl max-w-[530px] mx-auto"
    >
      <CardContent>
        <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center pt-8 pb-6">
          Financial impact calculator
        </p>

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
                    {" "}
                    <LinearProgress
                      className="h-7"
                      variant="determinate"
                      value={100}
                    />
                    <p className="rotate-90 -top-8 left-12 absolute">
                      {formatPrice(withoutSolar)}
                    </p>
                    <LinearProgress
                      color="secondary"
                      className="h-7 mt-2"
                      variant="determinate"
                      value={100 - solarReduction}
                    />
                    <p className="rotate-90 absolute bottom-2 left-6">
                      {formatPrice(withSolar)}
                    </p>
                    <p className="rotate-90 mt-28 font-medium">
                      {solarReduction}% <br />
                      savings
                    </p>
                  </Box>
                </div>
              ) : (
                <Box
                  sx={{ width: "100px" }}
                  className="-rotate-90  h-full absolute "
                >
                  <div className="rotate-90 flex gap-4 absolute top-6 left-4 z-20">
                    <p>{formatPrice(industryCost)}</p>
                    <p>{formatPrice(totalCost)}</p>
                  </div>
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
                  <p className="mt-10 mr-8 rotate-90 font-medium">
                    {increasePercentage}% <br />
                    increase
                  </p>
                </Box>
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
