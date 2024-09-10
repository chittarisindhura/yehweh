import "./Answers.css";
const AssesmentDetailspage = ({
  AssesmentTitle,
  AssesmentType,
  multipleList,
  shortList,
  essayList,
  booleanList,
  handleMultipleCheck,
  handleShortAnswer,
  handleEssayAnswer,
  handleBooleanAnswer,
  handleSubmit,
}) => {
  return (
    <div className="assesmentQuestionsContainer">
      <div className="questionsHeader">
        <h2> {AssesmentTitle}</h2>
        <h4>{AssesmentType}</h4>
      </div>
      <div className="timeLimit">
        <label> Time Limit: 30 minutes</label>
        <label className="attempts"> 3 attempts </label>
      </div>
      <div className="QuestionsContainer">
        {multipleList && multipleList.length > 0 && (
          <h4> Multiple Choice Questions</h4>
        )}
        {multipleList &&
          multipleList.map((multiple, i) => {
            let question = multiple.questionValue;
            return (
              <div>
                <div className="multpleChoiceContainer" key={multiple.id}>
                  <label for="multipleQuestion">
                    {multiple.questionValue}
                    <br />
                    <input
                      type="radio"
                      name={multiple.questionValue}
                      id="choice1"
                      value={multiple.options.choice1}
                      onChange={(e) =>
                        handleMultipleCheck(
                          question,
                          multiple.id,
                          e.target.checked,
                          e.target.value
                        )
                      }
                    />
                    <label for="choice1">{multiple.options.choice1}</label>
                    <input
                      type="radio"
                      name={multiple.questionValue}
                      value={multiple.options.choice2}
                      id="choice2"
                      onChange={(e) =>
                        handleMultipleCheck(
                          question,
                          multiple.id,
                          e.target.checked,
                          e.target.value
                        )
                      }
                    />
                    <label for="choice2">{multiple.options.choice2}</label>

                    <input
                      type="radio"
                      name={multiple.questionValue}
                      id="choice3"
                      value={multiple.options.choice3}
                      onChange={(e) =>
                        handleMultipleCheck(
                          question,
                          multiple.id,
                          e.target.checked,
                          e.target.value
                        )
                      }
                    />
                    <label for="choice3">{multiple.options.choice3}</label>

                    <input
                      type="radio"
                      name={multiple.questionValue}
                      id="choice4"
                      value={multiple.options.choice4}
                      onChange={(e) =>
                        handleMultipleCheck(
                          question,
                          multiple.id,
                          e.target.checked,
                          e.target.value
                        )
                      }
                    />
                    <label for="choice4">{multiple.options.choice4}</label>
                  </label>
                </div>
              </div>
            );
          })}
        <div className="shortAnswerQuestion">
          {shortList && shortList.length > 0 && (
            <h4> Short Answer Questions</h4>
          )}

          {shortList &&
            shortList.map((short, i) => {
              let squestion = short.shortQuestion;
              return (
                <div key={short.id}>
                  <div className="shortAnswerQuestions">
                    <label for="shortQuestion"></label>
                    {short.shortQuestion}
                    <input
                      type="text"
                      name="shortQuestion"
                      placeholder="Enter short answers"
                      size="30"
                      length="80"
                      onChange={(e) =>
                        handleShortAnswer(short.id, squestion, e.target.value)
                      }
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="essayAnswerQuestion">
          {essayList && essayList.length > 0 && <h4> Essay Questions</h4>}

          {essayList &&
            essayList.map((essay, i) => {
              let equestion = essay.essayQuestion;
              return (
                <div key={essay.id} className="essayAnswerQuestions">
                  <label for="essayAnswer">{essay.essayQuestion}</label>
                  <br />
                  <textarea
                    rows="8"
                    cols="100"
                    name="essayAnswer"
                    placeholder="Enter essay answers"
                    onChange={(e) =>
                      handleEssayAnswer(essay.id, equestion, e.target.value)
                    }
                  />
                </div>
              );
            })}
        </div>
        <div className="booleanAnswerQuestion">
          {booleanList && booleanList.length > 0 && <h4> Boolean Questions</h4>}

          {booleanList &&
            booleanList.map((boolean, i) => {
              let bquestion = boolean.booleanQuestion;
              return (
                <div key={boolean.id}>
                  <div className="booleanDiv">
                    <label for="booleanAnswer">{boolean.booleanQuestion}</label>
                    <br />

                    <label for="yes">
                      <input
                        type="radio"
                        name="booleanAnswer"
                        id="yes"
                        value="yes"
                        onChange={(e) => {
                          handleBooleanAnswer(
                            boolean.id,
                            bquestion,
                            e.target.value,
                            e.target.checked
                          );
                        }}
                      />
                      Yes
                    </label>
                    <label for="no">
                      <input
                        type="radio"
                        name="booleanAnswer"
                        id="no"
                        value="no"
                        onChange={(e) => {
                          handleBooleanAnswer(
                            boolean.id,
                            bquestion,
                            e.target.value,
                            e.target.checked
                          );
                        }}
                      />
                      No
                    </label>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="feedback">
          <label> Enter Feedback</label>
          <br />
          <textarea rows="2" cols="100" placeholder="Enter your Feedback" />
        </div>
        <div className="questionsSubmit">
          <button
            type="submit"
            className="questionSubmit"
            onClick={() => {
              handleSubmit(AssesmentTitle, AssesmentType);
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default AssesmentDetailspage;
