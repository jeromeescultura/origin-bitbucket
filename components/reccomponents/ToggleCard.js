import {
  Card,
  CardContent,
  FormControl,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";

const ToggleCard = ({ recommend }) => {
  const [interview, setInterview] = useState(false);
  const [greenPower, setGreenPower] = useState(false);
  const [level, setLevel] = useState("100%");

  const expandInterview = () => {
    setInterview(!interview);
  };

  const expandGreenPower = () => {
    setGreenPower(!greenPower);
  };

  const handleLevel = (event) => {
    setLevel(event.target.value);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          sx={{
            fontSize: { lg: "20px", xs: "18px" },
            textAlign: "center",
            fontWeight: "bold",
          }}
          color="primary"
        >
          Make a bigger difference
        </Typography>
        <div className="mt-4 space-y-5 font-light">
          <Card
            variant="contained"
            className={`${
              interview ? "bg-white border border-accentColor" : "bg-[#F8F8F8]"
            }`}
          >
            <CardContent sx={{ transition: "all 0.3s ease" }}>
              <div>
                <Switch
                  color="secondary"
                  onChange={expandInterview}
                  disabled={greenPower && true}
                />
                <div>Take part in the net zero research interview</div>
                <div
                  className={`${
                    interview ? "opacity-100 block " : "opacity-0 absolute "
                  } pointer-events-none`}
                >
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
                </div>
              </div>
            </CardContent>
          </Card>
          {recommend === "solar_power" && (
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
                  <Switch
                    color="secondary"
                    onChange={expandGreenPower}
                    disabled={interview && true}
                  />
                  <div>GreenPower</div>
                  <div
                    className={`${
                      greenPower ? "opacity-100 block" : "opacity-0 absolute"
                    } mt-8 flex items-center`}
                  >
                    Select GreenPower{" "}
                    <FormControl sx={{ ml: "16px", minWidth: 120 }}>
                      <Select
                        value={level}
                        displayEmpty
                        color="secondary"
                        onChange={handleLevel}
                        sx={{
                          borderRadius: "15px",
                          height: "40px",
                          width: "100px",
                        }}
                      >
                        <MenuItem value="100%">100%</MenuItem>
                        <MenuItem value="50%">50%</MenuItem>
                        <MenuItem value="25%">25%</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
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
