import {
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
  Switch,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState, useEffect } from "react";
import FormInputDropdown from "../../form-components/FormInputDropdown";

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
        <div className="mt-4 space-y-5 text-sm font-light">
          <Card
            variant="contained"
            className={`${
              interview ? "bg-white border border-accentColor" : "bg-[#F8F8F8]"
            }`}
          >
            <CardContent>
              <div>
                <Switch color="secondary" onChange={expandInterview} />
                <div>Take part in the net zero research interview</div>
                <div
                  className={`${
                    interview
                      ? "opacity-100 block mt-5"
                      : "opacity-0 absolute -mt-15"
                  } transition-all duration-100 pointer-events-none`}
                >
                  <ul className="space-y-4">
                    <li className="flex items-center gap-x-[19px]">
                      <div className="w-6 h-6">
                        <Image
                          src="/icons/check-yellow.svg"
                          width={500}
                          height={500}
                          objectFit="contained"
                          alt="check"
                        />
                      </div>
                      Free to participate
                    </li>
                    <li className="flex items-start gap-x-[19px]">
                      <div className="w-11 h-6">
                        <Image
                          src="/icons/check-yellow.svg"
                          width={500}
                          height={500}
                          objectFit="cover"
                          alt="check"
                        />
                      </div>
                      Requires your participation in 1x research interview at
                      your chosen interview time{" "}
                    </li>
                  </ul>
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
                  <Switch color="secondary" onChange={expandGreenPower} />
                  <div>GreenPower</div>
                  <div className="mt-8 flex items-center">
                    Select GreenPower{" "}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        value={level}
                        displayEmpty
                        color="secondary"
                        onChange={handleLevel}
                        inputProps={{ "aria-label": "Without label" }}
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
