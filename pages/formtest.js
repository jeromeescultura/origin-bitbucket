import React from "react";
import FormComponentTest from "../components/FormComponentTest";
import { server } from "../config";

const formtest = ({ questions }) => {
  const { timeAndEnergy } = questions;
  return (
    <div>
      <FormComponentTest options={timeAndEnergy?.options} />
    </div>
  );
};

export default formtest;

export async function getServerSideProps() {
  const questions = await fetch(`${server}/api/questions`).then((rest) =>
    rest.json()
  );

  return {
    props: {
      questions,
    },
  };
}
