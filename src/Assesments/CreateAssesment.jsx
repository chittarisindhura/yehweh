import react, { useState } from "react";
import axios from "axios";
import MultipleChoice from "./MulipleQuestionCreation";
import Essay from "./Essay";
import ShortAnswer from "./ShortAnswer";
import Boolean from "./Boolean";
const CreateAssesments = () => {
  const multipleObject = [
    {
      id: 0,
      questionValue: "",
      options: { choice1: "", choice2: "", choice3: "", choice4: "" },
      type: "multipleChoice",
    },
  ];
  const shortAnswerObject = [
    {
      id: 0,
      shortQuestion: "",
      type: "short",
    },
  ];
  const booleanObject = [
    {
      id: 0,
      booleanQuestion: "",
      type: "boolean",
    },
  ];
  const essayObject = [
    {
      id: 0,
      essayQuestion: "",
      type: "essay",
    },
  ];
  const baseUrl = "https://yehwehnode.vercel.app";
  const baseUrl1 = "http://localhost:5000";
  const [title, setTitle] = useState("");
  const [survey, setSurvey] = useState("");
  const [tasks, setTasks] = useState("");
  const [questions, setQuestions] = useState("");
  const [multipleChoice, setMultipleChoice] = useState(false);
  const [essay, setEssay] = useState(false);
  const [shortAnswer, setShortAnswer] = useState(false);
  const [boolean, setBoolean] = useState(false);
  const [questionTasks, setQuestionTasks] = useState([]);
  const [questionEssayTasks, setQuestionEssayTasks] = useState([]);
  const [questionShortTasks, setQuestionShortTasks] = useState([]);
  const [questionBooleanTasks, setQuestionBooleanTasks] = useState([]);
  const [multipleQuestion, setMultipleQuestion] = useState(multipleObject);
  const [shortAnswerLists, setShortAnswerLists] = useState(shortAnswerObject);
  const [essayLists, setEssayLists] = useState(essayObject);
  const [booleanLists, setBooleanLists] = useState(booleanObject);
  const [multipleArray, setMultipleArray] = useState([]);
  const [shortArray, setShortArray] = useState([]);
  const [booleanArray, setBooleanArray] = useState([]);
  const [essayArray, setEssayArray] = useState([]);
  const [array, setArray] = useState(false);

  const handleQuestionChange = (multipleId, titleValue) => {
    setMultipleQuestion(
      multipleQuestion.map((multiple) => {
        if (titleValue) {
          setArray(true);
        }

        if (multiple.id === multipleId) {
          return {
            ...multiple,

            questionValue: titleValue,
          };
        } else {
          return multiple;
        }
      })
    );
  };

  const handleChoice1Change = (multipleId, choiceValue) => {
    setMultipleQuestion(
      multipleQuestion.map((multiple) => {
        if (multiple.id === multipleId) {
          return {
            ...multiple,
            options: {
              ...multiple.options,
              choice1: choiceValue,
            },
          };
        } else {
          return multiple;
        }
      })
    );
  };
  const handleChoice2Change = (multipleId, choiceValue) => {
    setMultipleQuestion(
      multipleQuestion.map((multiple) => {
        if (multiple.id === multipleId) {
          return {
            ...multiple,
            options: {
              ...multiple.options,
              choice2: choiceValue,
            },
          };
        } else {
          return multiple;
        }
      })
    );
  };
  const handleChoice3Change = (multipleId, choiceValue) => {
    setMultipleQuestion(
      multipleQuestion.map((multiple) => {
        if (multiple.id === multipleId) {
          return {
            ...multiple,
            options: {
              ...multiple.options,
              choice3: choiceValue,
            },
          };
        } else {
          return multiple;
        }
      })
    );
  };
  const handleChoice4Change = (multipleId, choiceValue) => {
    setMultipleQuestion(
      multipleQuestion.map((multiple) => {
        if (multiple.id === multipleId) {
          return {
            ...multiple,
            options: {
              ...multiple.options,
              choice4: choiceValue,
            },
          };
        } else {
          return multiple;
        }
      })
    );
  };
  const handleShort = (shortId, shortValue) => {
    setShortAnswerLists(
      shortAnswerLists.map((short, id) => {
        if (short.id === shortId) {
          return {
            ...short,
            shortQuestion: shortValue,
          };
        } else {
          return short;
        }
      })
    );
  };
  const handleEssay = (essayId, essayValue) => {
    setEssayLists(
      essayLists.map((essay, id) => {
        if (essay.id === essayId) {
          return {
            ...essay,
            essayQuestion: essayValue,
          };
        } else {
          return essay;
        }
      })
    );
  };
  const handleBoolean = (booleanId, booleanValue) => {
    setBooleanLists(
      booleanLists.map((boolean, id) => {
        if (boolean.id === booleanId) {
          return {
            ...boolean,
            booleanQuestion: booleanValue,
          };
        } else {
          return boolean;
        }
      })
    );
  };
  const questionTypeSelect = (e) => {
    if (e.target.value === "multiple choice") {
      setQuestionTasks([questionTasks.length, ...questionTasks]);
      setMultipleChoice(true);
      if (multipleQuestion && multipleQuestion.length > 0) {
        multipleQuestion.map((data) => {
          for (let [key, value] of Object.entries(data)) {
            if (key === "questionValue") {
              if (data.questionValue) {
                setArray(true);
                multipleArray.push(data);
              }
            }
          }
        });
      }
    }
    if (e.target.value == "shortAnswer") {
      setQuestionShortTasks([questionShortTasks.length, ...questionShortTasks]);
      setShortAnswer(true);
      if (shortAnswerLists && shortAnswerLists.length > 0) {
        shortAnswerLists.map((data) => {
          for (let [key, value] of Object.entries(data)) {
            if (key === "shortQuestion") {
              if (data.shortQuestion) {
                shortArray.push(data);
              } else {
                return shortArray;
              }
            }
          }
        });
      }
    }
    if (e.target.value == "essay") {
      setQuestionEssayTasks([questionEssayTasks.length, ...questionEssayTasks]);
      setEssay(true);
      if (essayLists && essayLists.length > 0) {
        essayLists.map((data) => {
          for (let [key, value] of Object.entries(data)) {
            if (key === "essayQuestion") {
              if (data.essayQuestion) {
                essayArray.push(data);
              } else {
                return essayArray;
              }
            }
          }
        });
      }
    }
    if (e.target.value == "boolean") {
      setQuestionBooleanTasks([
        questionBooleanTasks.length,
        ...questionBooleanTasks,
      ]);
      setBoolean(true);
      if (booleanLists && booleanLists.length > 0) {
        booleanLists.map((data) => {
          for (let [key, value] of Object.entries(data)) {
            if (key === "booleanQuestion") {
              if (data.booleanQuestion) {
                booleanArray.push(data);
                return booleanArray;
              } else {
                return booleanArray;
              }
            }
          }
          return booleanArray;
        });
      }
    }
  };
  console.log("m", baseUrl);
  const sendAssignment = async () => {
    const ApiUrl = `${baseUrl}/assesment/create`;
    const type = survey ? survey : "Quizz";
    if (multipleQuestion && multipleQuestion.length > 0) {
      multipleQuestion.map((data) => {
        for (let [key, value] of Object.entries(data)) {
          if (key === "questionValue") {
            if (data.questionValue) {
              multipleArray.push(data);
            } else {
              return multipleArray;
            }
          }
        }
      });
    }
    if (shortAnswerLists && shortAnswerLists.length > 0) {
      shortAnswerLists.map((data) => {
        for (let [key, value] of Object.entries(data)) {
          if (key === "shortQuestion") {
            if (data.shortQuestion) {
              shortArray.push(data);
            } else {
              return shortArray;
            }
          }
        }
      });
    }
    if (essayLists && essayLists.length > 0) {
      essayLists.map((data) => {
        for (let [key, value] of Object.entries(data)) {
          if (key === "essayQuestion") {
            if (data.essayQuestion) {
              essayArray.push(data);
            } else {
              return essayArray;
            }
          }
        }
      });
    }
    if (booleanLists && booleanLists.length > 0) {
      booleanLists.map((data) => {
        for (let [key, value] of Object.entries(data)) {
          if (key === "booleanQuestion") {
            if (data.booleanQuestion) {
              booleanArray.push(data);
            } else {
              return booleanArray;
            }
          }
        }
      });
    }
    for (let id in multipleArray) {
      let array = multipleArray[id];
      array.id = id;
    }
    for (let id in shortArray) {
      let array = shortArray[id];
      array.id = id;
    }
    for (let id in essayArray) {
      let array = essayArray[id];
      array.id = id;
    }
    for (let id in booleanArray) {
      let array = booleanArray[id];
      array.id = id;
    }
    const assesmentData = {
      title: title,
      type: type,
      questionBank: questions,
      multipleChoice: multipleArray,
      shortAnswer: shortArray,
      essay: essayArray,
      boolean: booleanArray,
    };
    const res = await axios.post(ApiUrl, assesmentData);
    if (res.status == 200) {
      setTasks([...tasks, assesmentData]);
    } else {
      console.log("error");
    }
  };
  return (
    <div className="createAssignment">
      <h1>Create New Assesments </h1>
      <form>
        <div className="createAssignmentLine">
          <label>
            {" "}
            Assesment Title
            <input
              type="text"
              placeholder="Enter Assesment Title"
              size="50"
              length="150"
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            {" "}
            select Assignment Type
            <select
              value={survey}
              onChange={(e) => {
                setSurvey(e.target.value);
              }}
            >
              <option value="Quizz">Quizz</option>
              <option value="Assignment">Assignment</option>
              <option value="Survey">Survey</option>
            </select>
          </label>
          <label>
            Select Questions
            <select
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
            >
              <option value="Creae new">Create New Questions</option>
              <option value="Pre Existing Question">
                PreExisting Question Bank
              </option>
            </select>
          </label>
        </div>
        <div className="createQuestionType">
          <div>
            <label>Select QuestionType</label>
            <button
              type="button"
              value="multiple choice"
              onClick={questionTypeSelect}
            >
              Multiple Choice
            </button>
            <button
              type="button"
              value="shortAnswer"
              onClick={questionTypeSelect}
            >
              Short Answer
            </button>
            <button type="button" value="essay" onClick={questionTypeSelect}>
              Essay
            </button>

            <button type="button" value="boolean" onClick={questionTypeSelect}>
              Boolean
            </button>
          </div>
          <div>
            <label> Time Limit: 30 minutes</label>
            <label className="attempts"> 3 attempts </label>
          </div>
        </div>
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
        {!!questionEssayTasks.length ? (
          questionEssayTasks.map((task, i) => {
            return essay ? (
              <Essay
                key={i}
                handleEssay={handleEssay}
                essayLists={essayLists}
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
        <div className="instructions">
          <label>Enter Assignment Instructions</label>
          <br />
          <textarea
            rows="10"
            cols="110"
            placeholder="Assesment Instructions"
          ></textarea>
        </div>
        <div className="createLastLine">
          <button type="submit" className="create" onClick={sendAssignment}>
            Create Assignment
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateAssesments;
