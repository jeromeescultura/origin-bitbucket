import ContentContainer from "../containers/ContentContainer";
import QuestionContainer from "../containers/QuestionContainer";
import ButtonQuestion from "../components/ButtonQuestion";
import ButtonComponent from "../components/ButtonComponent";
import CheckboxContainer from "../containers/CheckboxContainer";
import Image from "next/image";

function signup() {
  const buttonQuestions = {
    id: "01",
    text: "Do you have an existing business account with Origin?",
    options: [
      {
        id: 1,
        text: "No",
      },

      {
        id: 2,
        text: "Yes",
      },
    ],
  };

  const checkboxQuestions = {
    questionsList: [
      {
        id: 1,
        text: "I am the primary account holder for this account",
      },
    ],
  };
  return (
    <div className="bg-primaryBG">
      <div className="bg-assessment-bg bg-no-repeat bg-contain h-full">
        <ContentContainer>
          <div>
            <div className="w-16 lg:w-20 cursor-pointer ml-auto mt-8">
              <Image
                src="/images/origin-logo.svg"
                width={90}
                height={90}
                objectFit="contain"
                alt="origin-logo"
              />
            </div>
            <div className="text-center font-light md:w-[80vw] lg:w-full mx-auto mt-4 max-w-[400px]">
              <h2 className="text-primaryText font-bold">
                Applying to Origin&#39;s Clean Ambition Program
              </h2>
              <p className="mb-4 mt-8 sm:leading-loose">
                Thank you for choosing to join the program! You have chosen to
                pledge with <strong>Carbon Offsets.</strong>
              </p>
              <p className="text-secondaryBG font-bold">
                View your pledge details
              </p>
            </div>
          </div>
          <QuestionContainer text="Please give us a few details, and one of our specialists will contact you about finalising your application.  ">
            <div className="space-y-12 mt-12">
              <div>
                <p className="font-bold text-sm">
                  Do you have an existing business account with Origin?
                </p>
                <ButtonQuestion options={buttonQuestions.options} />
              </div>
              <div>
                <CheckboxContainer
                  questionsList={checkboxQuestions.questionsList}
                />
                <div className="max-w-[240px] mx-auto">
                  <ButtonComponent text="Submit my application" style="mt-8" />
                </div>
              </div>
              <p className="text-sm">
                *Once you submit your application, one of our Clean Ambition
                club representatives will get in contact to review your energy
                plan options.
              </p>
            </div>
          </QuestionContainer>
        </ContentContainer>
      </div>
    </div>
  );
}

export default signup;
