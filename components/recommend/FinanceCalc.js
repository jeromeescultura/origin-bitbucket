import {
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
import { Controller, useForm } from "react-hook-form";
import MoreDetailsComponent from "../MoreDetailsComponent";

const FinanceCalc = () => {
  const [extra, setExtra] = useState(false);
  const [buttonSelect, setSelected] = useState();

  const methods = useForm({ defaultValues: buttonSelect });
  const { control, watch, setValue } = methods;

  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(false);
  const [btn3, setBtn3] = useState(false);

  const expandExtra = () => {
    setExtra(!extra);
  };

  const handleButtonSelect = (value) => {
    setValue("usage", value);
    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
      setBtn3(false);
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
      setBtn3(false);
    } else if (value === 2) {
      setBtn1(false);
      setBtn2(false);
      setBtn3(true);
    }
  };

  useEffect(() => {
    console.log(buttonSelect);
  }, [buttonSelect]);

  const handleUsage = (data) => setSelected(data.usage);

  const activeStyles = "border-accentColor bg-highlight font-medium";
  return (
    <Card
      variant="outlined"
      className="border-none rounded-xl max-w-[510px] mx-auto"
    >
      <CardContent>
        <Typography
          sx={{
            fontSize: { lg: "20px", xs: "18px" },
            textAlign: "center",
            fontWeight: "bold",
          }}
          color="primary"
        >
          Financial Impact Calculator
        </Typography>
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
          Bill impact on [20-50] kWh average monthly use
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} lg={6} sx={{ p: 0 }}>
            <div className="bg-[#F8F8F8] rounded-lg  max-h-[131px] min-h-[104px] flex items-end justify-center ">
              <div className="max-w-[157px] min-w-[151px] flex justify-between text-xs font-light items-center">
                <div className="bg-lime-400 w-6 h-20"></div>
                <div className="bg-green-800 w-6 h-20"></div>
                <div>[no extra cost]</div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} sx={{ p: 0, mb: "48px" }}>
            <div className="lg:max-h-[131px] lg:min-h-[104px] flex items-center justify-center font-light text-xs">
              <div className="flex lg:flex-col space-x-8 lg:space-y-2 lg:space-x-0">
                <div className="flex items-center">
                  <div className="w-3 h-3 inline-block bg-lime-400 rounded-full mr-2"></div>
                  Without Go Zero
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 inline-block bg-green-800 rounded-full mr-2"></div>
                  With Go Zero
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
        <MoreDetailsComponent text="Why it costs you nothing extra">
          <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
            dui. Donec rutrum congue leo eget malesuada. Proin eget tortor
            risus. Curabitur non nulla sit amet nisl tempus convallis quis ac
            lectus.
          </p>
        </MoreDetailsComponent>
      </CardContent>
    </Card>
  );
};

export default FinanceCalc;
