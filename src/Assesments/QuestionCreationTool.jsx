import React, { useState } from "react";
import ShortAnswer from "./ShortAnswer";
import Essay from "./Essay";
import Boolean from "./Boolean";
import MultipleChoice from "./MulipleQuestionCreation";
const QuestionCreationTool = ({
  handleQuestionChange,
  handleChoice1Change,
  handleChoice2Change,
  handleChoice3Change,
  handleChoice4Change,
  multipleQuestion,
  handleEssay,
  essayLists,
  handleBoolean,
  booleanLists,
  handleShort,
  shortAnswerLists,
}) => {
  const [questionTasks, setQuestionTasks] = useState([]);
  const [questionEssayTasks, setQuestionEssayTasks] = useState([]);
  const [questionShortTasks, setQuestionShortTasks] = useState([]);
  const [questionBooleanTasks, setQuestionBooleanTasks] = useState([]);
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [essay, setEssay] = useState(false);
  const [shortAnswer, setShortAnswer] = useState(false);
  const [boolean, setBoolean] = useState(false);
  const questionTypeSelect = (e) => {
    if (e.target.value == "multiple choice") {
      setQuestionTasks([questionTasks.length, ...questionTasks]);
      setMultipleChoice(true);
    }
    if (e.target.value == "shortAnswer") {
      setQuestionShortTasks([questionShortTasks.length, ...questionShortTasks]);
      setShortAnswer(true);
    }
    if (e.target.value == "essay") {
      setQuestionEssayTasks([questionEssayTasks.length, ...questionEssayTasks]);
      setEssay(true);
    }
    if (e.target.value == "boolean") {
      setQuestionBooleanTasks([
        questionBooleanTasks.length,
        ...questionBooleanTasks,
      ]);
      setBoolean(true);
    }
  };
  return (
    <div>
      <button
        type="button"
        value="multiple choice"
        onClick={questionTypeSelect}
      >
        Multiple Choice
      </button>
      <button type="button" value="shortAnswer" onClick={questionTypeSelect}>
        Short Answer
      </button>
      <button type="button" value="essay" onClick={questionTypeSelect}>
        Essay
      </button>

      <button type="button" value="boolean" onClick={questionTypeSelect}>
        Boolean
      </button>
      {!!questionTasks.length ? (
        questionTasks.map((task, i) => {
          return {
            ...(multipleChoice ? (
              <MultipleChoice
                key={i}
                handleQuestionChange={handleQuestionChange}
                handleChoice1Change={handleChoice1Change}
                handleChoice2Change={handleChoice2Change}
                handleChoice3Change={handleChoice3Change}
                handleChoice4Change={handleChoice4Change}
                multipleQuestions={multipleQuestion}
              />
            ) : (
              ""
            )),
          };
        })
      ) : (
        <span />
      )}

      {!!questionEssayTasks.length ? (
        questionEssayTasks.map((task, i) => {
          return essay ? (
            <Essay key={i} handleEssay={handleEssay} essayLists={essayLists} />
          ) : (
            ""
          );
        })
      ) : (
        <span />
      )}
      {!!questionShortTasks.length ? (
        questionShortTasks.map((task, i) => {
          return shortAnswer ? (
            <ShortAnswer
              key={i}
              handleShort={handleShort}
              shortAnswerList={shortAnswerLists}
            />
          ) : (
            ""
          );
        })
      ) : (
        <span />
      )}
      {!!questionBooleanTasks.length ? (
        questionBooleanTasks.map((task, i) => {
          return boolean ? (
            <Boolean
              key={i}
              booleanLists={booleanLists}
              handleBoolean={handleBoolean}
            />
          ) : (
            ""
          );
        })
      ) : (
        <span />
      )}
    </div>
  );
};
export default QuestionCreationTool;
