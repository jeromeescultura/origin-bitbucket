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
}) => {
  const [interview, setInterview] = useState(false);
  const [greenPower, setGreenPower] = useState(false);

  const expandInterview = () => {
    const isPresent = pledges.indexOf("interview");
    setInterview(!interview);

    if (isPresent !== -1) {
      const remaining = pledges.filter((item) => item !== "interview");
      setPledges(remaining);
    } else {
      setPledges((prevItems) => [...prevItems, "interview"]);
    }
  };

  const expandGreenPower = () => {
    const isPresent = pledges.indexOf("greenPower");
    setGreenPower(!greenPower);

    if (isPresent !== -1) {
      const remaining = pledges.filter((item) => item !== "greenPower");
      setPledges(remaining);
    } else {
      setPledges((prevItems) => [...prevItems, "greenPower"]);
    }
  };

  return (
    <Card
      variant="outlined"
      className="border-none rounded-xl max-w-[510px] mx-auto"
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
                  <Switch color="secondary" onChange={expandInterview} />
                  <div>Take part in the net zero research interview</div>
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
                  <Switch color="secondary" onChange={expandGreenPower} />
                  <div>GreenPower</div>

                  <Collapse in={greenPower}>
                    <div className="flex items-center">
                      Select GreenPower{" "}
                      <FormControl sx={{ ml: "16px", minWidth: 120 }}>
                        <Select
                          value={level}
                          displayEmpty
                          color="secondary"
                          onChange={handleLevel}
                          sx={{
                            borderRadius: "10px",
                            height: "40px",
                            width: "100px",
                          }}
                        >
                          <MenuItem value={1}>100%</MenuItem>
                          <MenuItem value={0.5}>50%</MenuItem>
                          <MenuItem value={0.25}>25%</MenuItem>
                        </Select>
                      </FormControl>
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
