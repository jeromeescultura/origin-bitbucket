import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

const ToggleCard = ({ recommend, pledges, setPledges }) => {
  const [interview, setInterview] = useState(false);
  const [greenPower, setGreenPower] = useState(false);

  const [decarbBtn1, setDecarbBtn1] = useState(false);
  const [decarbBtn2, setDecarbBtn2] = useState(false);
  const [greenPowerBtn1, setGreenPowerBtn1] = useState(false);
  const [greenPowerBtn2, setGreenPowerBtn2] = useState(false);

  const activeStyles = "border-accentColor bg-highlight font-semibold";

  useEffect(() => {
    setInterview(false);
    setGreenPower(false);
    setPledges([]);
  }, [recommend]);

  const expandInterview = () => {
    setInterview(!interview);
    if (interview) {
      handleInterviewButtonSelect(1);
    } else {
      handleInterviewButtonSelect(0);
    }
  };

  const expandGreenPower = () => {
    setGreenPower(!greenPower);
    if (greenPower) {
      handleGreenPowerButtonSelect(1);
    } else {
      handleGreenPowerButtonSelect(0);
    }
  };

  const handleInterviewButtonSelect = (value) => {
    const isPresent = pledges.indexOf("decarbonisation interview");

    if (value === 0) {
      setDecarbBtn1(true);
      setDecarbBtn2(false);
      if (recommend === "solar") {
        setPledges((prevItems) => [...prevItems, "decarbonisation interview"]);
      } else {
        setPledges(["decarbonisation interview"]);
      }
    } else if (value === 1) {
      setDecarbBtn1(false);
      setDecarbBtn2(true);
      if (isPresent !== -1) {
        const remaining = pledges.filter(
          (item) => item !== "decarbonisation interview"
        );
        setPledges(remaining);
      }
    }
  };

  const handleGreenPowerButtonSelect = (value) => {
    const isPresent = pledges.indexOf("greenPower");

    if (value === 0) {
      setGreenPowerBtn1(true);
      setGreenPowerBtn2(false);
      if (recommend === "solar") {
        if (isPresent === -1) {
          setPledges((prevItems) => [...prevItems, "greenPower"]);
        }
      }
    } else if (value === 1) {
      setGreenPowerBtn1(false);
      setGreenPowerBtn2(true);
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
          Make a bigger difference
        </p>
        <div className="mt-4 space-y-5 font-light">
          <Card
            variant="contained"
            className={`${
              interview ? "bg-white border border-accentColor" : "bg-[#F8F8F8]"
            }`}
          >
            <CardContent>
              <div>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div>
                    Interested in participating in the Decarbonisation
                    Interview?
                  </div>
                  <Switch
                    className="order-first lg:order-last"
                    color="secondary"
                    onChange={expandInterview}
                    checked={interview}
                    sx={{ willChange: "transform" }}
                  />
                </div>
                <Collapse in={interview} sx={{ willChange: "transform" }}>
                  <List dense={true} className="lg:max-w-[280px]">
                    <ListItem className="p-0">
                      <ListItemIcon>
                        <Image
                          src="/icons/check-yellow.svg"
                          width={30}
                          height={30}
                          alt="check"
                        />
                      </ListItemIcon>
                      <ListItemText primary="Free to participate" />
                    </ListItem>
                    <ListItem alignItems="flex-start" className="p-0">
                      <ListItemIcon>
                        <Image
                          src="/icons/check-yellow.svg"
                          width={30}
                          height={30}
                          alt="check"
                        />
                      </ListItemIcon>
                      <ListItemText primary="Requires your participation in 1x research interview at your chosen interview time " />
                    </ListItem>
                    <ListItem className="p-0">
                      <ListItemIcon>
                        <Image
                          src="/icons/check-yellow.svg"
                          width={30}
                          height={30}
                          alt="check"
                        />
                      </ListItemIcon>
                      <ListItemText primary="Help us understand how to support businesses like yours to decarbonise " />
                    </ListItem>
                  </List>
                  <div>
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
                          decarbBtn1
                            ? activeStyles
                            : "hover:border hover:border-gray-300"
                        }
                        onClick={() => {
                          if (!decarbBtn1) {
                            handleInterviewButtonSelect(0);
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
                          decarbBtn2
                            ? activeStyles
                            : "hover:border hover:border-gray-300"
                        } ${
                          decarbBtn1 &&
                          "border-l-accentColor hover:border-l-accentColor"
                        }`}
                        onClick={() => handleInterviewButtonSelect(1)}
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
        </div>
        {recommend === "solar" && (
          <div className="mt-4 space-y-5 font-light">
            <Card
              variant="contained"
              className={`${
                greenPower
                  ? "bg-white border border-accentColor"
                  : "bg-[#F8F8F8]"
              }`}
            >
              <CardContent>
                <div>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div>
                      Interested in adding GreenPower to your Solar plan?
                    </div>
                    <Switch
                      className="order-first lg:order-last"
                      color="secondary"
                      checked={greenPower}
                      onClick={expandGreenPower}
                      sx={{ willChange: "transform" }}
                    />
                  </div>
                  <Collapse in={greenPower} sx={{ willChange: "transform" }}>
                    <div className="space-y-8">
                      <div className="mt-6 text-sm">
                        If so, click yes below and one of our Business Club
                        Specialists will get in contact to review your
                        GreenPower options.
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
                            greenPowerBtn1
                              ? activeStyles
                              : "hover:border hover:border-gray-300"
                          }
                          onClick={() => handleGreenPowerButtonSelect(0)}
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
                            greenPowerBtn2
                              ? activeStyles
                              : "hover:border hover:border-gray-300"
                          } ${
                            greenPowerBtn1 &&
                            "border-l-accentColor hover:border-l-accentColor"
                          }`}
                          onClick={() => handleGreenPowerButtonSelect(1)}
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
        )}
      </CardContent>
    </Card>
  );
};

export default ToggleCard;
