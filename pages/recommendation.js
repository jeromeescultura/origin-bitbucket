import { Card, CardContent, Switch, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import {
  sumArray,
  stepOneScore,
  stepTwoScore,
} from "../components/reccomponents/RecoFunctions";
import ToggleCard from "../components/reccomponents/ToggleCard";

const Recommendation = () => {
  const storedStepOneData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_ONE_ANS")
    ) || [];

  const storedStepTwoData =
    JSON.parse(
      typeof window !== "undefined" &&
        window.localStorage.getItem("STEP_TWO_ANS")
    ) || [];

  const [goZero, setGoZero] = useState({
    carbonOffset: 0,
    decarbEOI: 0,
  });

  const [greenPower, setGreenPower] = useState({
    greenPower: 0,
    decarbEOI: 0,
  });

  const [solarPower, setSolarPower] = useState({
    solar: 0,
    greenPower: 0,
    decarbEOI: 0,
  });

  const [recommend, setRecommend] = useState("");

  const goZeroScore = Object.values(goZero).reduce(sumArray);
  const greenPowerScore = Object.values(greenPower).reduce(sumArray);
  const solarPowerScore = Object.values(solarPower).reduce(sumArray);

  useEffect(() => {
    if (goZeroScore > greenPowerScore && goZeroScore > solarPowerScore) {
      setRecommend("go_zero");
    } else if (
      greenPowerScore > goZeroScore &&
      greenPowerScore > solarPowerScore
    ) {
      setRecommend("green_power");
    } else if (
      solarPowerScore > goZeroScore &&
      solarPowerScore > greenPowerScore
    ) {
      setRecommend("solar_power");
    }
  }, [goZeroScore, greenPowerScore, solarPowerScore]);

  useEffect(() => {
    if (storedStepOneData !== null && storedStepTwoData !== null) {
      stepOneScore(storedStepOneData, setGoZero, setGreenPower, setSolarPower);
      stepTwoScore(storedStepTwoData, setSolarPower);
    }
  }, []);

  return (
    <div>
      <h1>Recommended:{recommend && recommend}</h1>
      <ToggleCard recommend={recommend} />
    </div>
  );
};

export default Recommendation;
