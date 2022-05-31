import React, { useEffect } from "react";
import Questions1 from "./Questions1";
import Questions2 from "./Questions2";
import Questions3 from "./Questions3";
import Question4 from "./Question4";
import SliderQuestion from "./sliderQuestion";

const Questions = ({ questions }) => {
  console.log("question", questions);
  return (
    <div className="space-y-12">
      <Questions1 qsts={questions[0]} />
      <Questions2 qsts={questions[1]}/>
      <Questions3 qsts={questions[2]} />
      {questions[3] && <Question4 />}
    </div>
  );
};

export default Questions;
