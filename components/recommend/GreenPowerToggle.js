import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Collapse,
  Switch,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const GreenPowerToggle = ({ recommend, pledges, setPledges }) => {
  const [greenPower, setGreenPower] = useState(false);

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-semibold";

  useEffect(() => {
    setGreenPower(false);
    setPledges([]);
  }, [recommend]);

  const expandGreenPower = () => {
    setGreenPower(!greenPower);
    if (greenPower) {
      handleButtonSelect(1);
    } else {
      handleButtonSelect(0);
    }
  };

  const handleButtonSelect = (value) => {
    const isPresent = pledges.indexOf("greenPower");

    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
      if (recommend === "solar") {
        setPledges((prevItems) => [...prevItems, "greenPower"]);
      }
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
      if (isPresent !== -1) {
        const remaining = pledges.filter((item) => item !== "greenPower");
        setPledges(remaining);
      }
    }
  };

  return (
    <Card
      variant="outlined"
      className="border-none rounded-xl max-w-[530px] mx-auto"
    >
      <CardContent>
        <p className="font-medium text-[18px] lg:text-[20px] text-primaryText text-center pt-8 pb-6">
          GreenPower
        </p>
        <div className="mt-4 space-y-5 font-light">
          <Card
            variant="contained"
            className={`${
              greenPower ? "bg-white border border-accentColor" : "bg-[#F8F8F8]"
            }`}
          >
            <CardContent>
              <div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div>Interested in adding GreenPower to your Solar plan?</div>
                  <Switch
                    className="order-first lg:order-last"
                    color="secondary"
                    onChange={expandGreenPower}
                    checked={greenPower}
                    sx={{ willChange: "transform" }}
                  />
                </div>
                <Collapse in={greenPower} sx={{ willChange: "transform" }}>
                  <div className="space-y-8">
                    <div className="mt-6 text-sm">
                      If so, click yes below and one of our Business Club
                      Specialists will get in contact to review your GreenPower
                      options.
                    </div>
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                      size="large"
                      color="secondary"
                      arial-label="contained button group"
                      fullWidth
                    >
                      <Button
                        className={
                          btn1
                            ? activeStyles
                            : "hover:border hover:border-gray-300"
                        }
                        onClick={() => {
                          if (!btn1) {
                            handleButtonSelect(0);
                          }
                        }}
                        sx={{
                          color: "#505050",
                          borderColor: "#E3E3E3",
                          fontSize: "16",
                          py: 1,
                        }}
                      >
                        {"Yes, please!"}
                      </Button>
                      <Button
                        className={`${
                          btn2
                            ? activeStyles
                            : "hover:border hover:border-gray-300"
                        } ${
                          btn1 &&
                          "border-l-accentColor hover:border-l-accentColor"
                        }`}
                        onClick={() => handleButtonSelect(1)}
                        sx={{
                          color: "#505050",
                          borderColor: "#E3E3E3",
                          fontSize: "16",
                          py: 1,
                        }}
                      >
                        {"No thanks"}
                      </Button>
                    </ButtonGroup>
                  </div>
                </Collapse>
              </div>
            </CardContent>
          </Card>
          <div></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GreenPowerToggle;
