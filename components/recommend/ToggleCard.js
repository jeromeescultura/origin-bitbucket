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

  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(true);

  const activeStyles = "border-accentColor bg-highlight font-semibold";

  useEffect(() => {
    setInterview(false);
    setGreenPower(false);
    handleButtonSelect(1);
    setPledges([]);
  }, [recommend]);

  const expandInterview = () => {
    setInterview(!interview);
    handleButtonSelect(1);
  };

  const handleButtonSelect = (value) => {
    const isPresent = pledges.indexOf("interview");

    if (value === 0) {
      setBtn1(true);
      setBtn2(false);
      if (recommend === "solar") {
        setPledges((prevItems) => [...prevItems, "interview"]);
      } else {
        setPledges(["interview"]);
      }
    } else if (value === 1) {
      setBtn1(false);
      setBtn2(true);
      if (isPresent !== -1) {
        const remaining = pledges.filter((item) => item !== "interview");
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
          Help us do more
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
        </div>
      </CardContent>
    </Card>
  );
};

export default ToggleCard;
