import { Button } from "@mui/material";
import React from "react";

const StepTwoAssessmentContainer = ({ buttonHandler }) => {
  return (
    <>
      <div className="flex gap-16 mt-16 justify-between sm:justify-start">
        <Button
          size="large"
          style={{
            fontWeight: 600,
          }}
          onClick={() => buttonHandler("back")}
        >
          Back
        </Button>

        <div className="">
          <Button
            size="large"
            variant="contained"
            style={{
              borderRadius: 200,
              boxShadow: "none",
              paddingLeft: "2rem",
              backgroundColor: "#EC0000",
              paddingRight: "2rem",
            }}
          >
            View recommendations
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepTwoAssessmentContainer;
