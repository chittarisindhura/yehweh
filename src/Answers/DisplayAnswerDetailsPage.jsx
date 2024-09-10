import DisplayAnswerDetails from "./DisplayAnswerDetails";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const DisplayAnswerDetailsPage = () => {
  const location = useLocation();
  const assesmentAnswers = location.state.assesmentData;
  const [assesmentAnswer, setAssesmentAnswer] = useState("");
  useEffect(() => {
    setAssesmentAnswer(assesmentAnswers);
  }, [assesmentAnswer]);
  return (
    <div>
      {assesmentAnswer &&
        assesmentAnswer.map((data) => [
          <DisplayAnswerDetails
            id={data._id}
            assesmentTitle={data.title}
            assesmentType={data.type}
            multipleChoiceAnswer={data.multipleChoiceAnswer}
            shortAnswer={data.shortAnswer}
            essayAnswer={data.essayAnswer}
            booleanAnswer={data.booleanAnswer}
          />,
        ])}
    </div>
  );
};
export default DisplayAnswerDetailsPage;
