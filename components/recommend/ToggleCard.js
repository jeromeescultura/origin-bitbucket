import {
  Card,
  CardContent,
  Collapse,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Switch,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

const ToggleCard = ({
  recommend,
  adds,
  level,
  handleLevel,
  pledges,
  setPledges,
  setLevel,
}) => {
  const [interview, setInterview] = useState(false);
  const [greenPower, setGreenPower] = useState(false);

  useEffect(() => {
    setInterview(false);
    setGreenPower(false);
    setPledges([]);
    if (setLevel) {
      setLevel(1);
    }
  }, [recommend]);

  const expandInterview = () => {
    const isPresent = pledges.indexOf("interview");
    setInterview(!interview);

    if (isPresent !== -1) {
      const remaining = pledges.filter((item) => item !== "interview");
      setPledges(remaining);
    } else {
      if (recommend === "solar") {
        setPledges((prevItems) => [...prevItems, "interview"]);
      } else {
        setPledges(["interview"]);
      }
    }
  };

  const expandGreenPower = () => {
    const isPresent = pledges.indexOf("greenPower");
    setGreenPower(!greenPower);

    if (recommend === "solar") {
      if (isPresent !== -1) {
        const remaining = pledges.filter((item) => item !== "greenPower");
        setPledges(remaining);
      } else {
        setPledges((prevItems) => [...prevItems, "greenPower"]);
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
          {adds.includes("decarbEOI") && (
            <Card
              variant="contained"
              className={`${
                interview
                  ? "bg-white border border-accentColor"
                  : "bg-[#F8F8F8]"
              }`}
            >
              <CardContent sx={{ transition: "all 0.3s ease" }}>
                <div>
                  <div className="flex items-center justify-between">
                    <div>Take part in the net zero research interview</div>
                    <Switch
                      color="secondary"
                      onChange={expandInterview}
                      checked={interview}
                    />
                  </div>
                  <Collapse in={interview}>
                    <List dense={true}>
                      <ListItem>
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
                      <ListItem alignItems="flex-start">
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
                    </List>
                  </Collapse>
                </div>
              </CardContent>
            </Card>
          )}
          {adds.includes("greenPower") && recommend === "solar" && (
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
                  <div className='flex items-center justify-between'>
                    <div>GreenPower</div>
                    <Switch
                      color="secondary"
                      onChange={expandGreenPower}
                      checked={greenPower}
                    />
                  </div>
                  <Collapse in={greenPower}>
                    <div className="mt-6">
                      One of our Good Change club representatives will get in
                      contact to review your GreenPower options
                    </div>
                  </Collapse>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToggleCard;