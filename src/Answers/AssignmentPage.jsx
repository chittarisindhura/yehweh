import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AssesmentDetailspage from "./AssesmentDetailsPage";
const AssignmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const assesment = location.state.assesment;
  const [tasks, setTasks] = useState("");
  const [assesmen, setAssesment] = useState("");
  useEffect(() => {
    setAssesment(assesment);
  }, [assesmen]);
  console.log("ass", assesmen);
  const multipleObject = [
    {
      id: 0,
      question: "",
      multipleAnswer: "",
    },
  ];
  const shortObject = [
    {
      id: 0,
      question: "",
      shortAnswer: "",
    },
  ];
  const essayObject = [
    {
      id: 0,
      question: "",
      essayAnswer: "",
    },
  ];
  const booleanObject = [
    {
      id: 0,
      question: "",
      booleanAnswer: "",
    },
  ];
  const [multipleAnswer, setMultipleAnswer] = useState(multipleObject);
  const [shortAnswer, setShortAnswer] = useState(shortObject);
  const [essayAnswer, setEssayAnswer] = useState(essayObject);
  const [booleanAnswer, setBooleanAnswer] = useState(booleanObject);
  const [multipleArray, setMultipleArray] = useState([]);
  const [shortArray, setShortArray] = useState([]);
  const [essayArray, setEssayArray] = useState([]);
  const [booleanArray, setBooleanArray] = useState([]);
  const handleMultipleCheck = (question, multipleId, check, mvalue) => {
    if (check) {
      setMultipleAnswer(
        multipleAnswer.map((data, i) => {
          if (data.id === multipleId) {
            delete data.multipleAnswer;
          }
          return {
            ...data,
            id: multipleId,
            question: question,
            multipleAnswer: mvalue,
          };
        })
      );
      for (let [key, value] of Object.entries(multipleAnswer)) {
        if (value.multipleAnswer) {
          multipleArray.push(value);
        }
      }
    }
  };

  const handleShortAnswer = (shortId, squestion, svalue) => {
    setShortAnswer(
      shortAnswer.map((data, i) => {
        if (data.id === shortId) {
          delete data.shortAnswer;
        }
        return {
          ...data,
          id: shortId,
          question: squestion,
          shortAnswer: svalue,
        };
      })
    );

    for (let [key, value] of Object.entries(shortAnswer)) {
      if (value && value.shortAnswer && value.shortAnswer.length > 0) {
        if (value.id === shortId) {
          delete value.shortAnswer;
        }
        shortArray.push(value);
      }
    }
  };

  const handleEssayAnswer = (eid, equestion, evalue) => {
    setEssayAnswer(
      essayAnswer.map((data, i) => {
        if (data.id === eid) {
          delete data.essayAnswer;
        }
        return {
          ...data,
          id: eid,
          question: equestion,
          essayAnswer: evalue,
        };
      })
    );
    for (let [key, value] of Object.entries(essayAnswer)) {
      if (value.essayAnswer && value.essayAnswer.length > 0) {
        if (value.id === eid) {
          delete value.essayAnswer;
        }
        essayArray.push(value);
      }
    }
  };

  const handleBooleanAnswer = (bid, bquestion, bvalue, check) => {
    setBooleanAnswer(
      booleanAnswer.map((data, i) => {
        if (check) {
          if (data.id === bid) {
            delete data.booleanAnswer;
          }
          return {
            ...data,
            id: bid,
            question: bquestion,
            booleanAnswer: bvalue,
          };
        }
      })
    );
    for (let [key, value] of Object.entries(booleanAnswer)) {
      if (value.booleanAnswer) {
        booleanArray.push(value);
      }
    }
  };
  const baseUrl = "https://yehwehnode.vercel.app";
  const handleSubmit = async (title, type) => {
    const nodeUrl = `${baseUrl}/assesment/sendAssesmentAnswer`;
    for (let [key, value] of Object.entries(multipleAnswer)) {
      if (value.multipleAnswer) {
        multipleArray.push(value);
      }
    }
    for (let [key, value] of Object.entries(shortAnswer)) {
      if (value && value.shortAnswer) {
        shortArray.push(value);
      }
    }

    for (let [key, value] of Object.entries(essayAnswer)) {
      if (value && value.essayAnswer) {
        essayArray.push(value);
      }
    }
    for (let [key, value] of Object.entries(booleanAnswer)) {
      if (value && value.booleanAnswer) {
        booleanArray.push(value);
      }
    }
    const assesmentAnswerData = {
      title: title,
      type: type,
      multipleChoiceAnswer: multipleArray,
      shortAnswer: shortArray,
      essayAnswer: essayArray,
      booleanAnswer: booleanArray,
    };
    const data = await axios.post(nodeUrl, assesmentAnswerData);
    if (data.status == 200) {
      setTasks([...tasks, assesmentAnswerData]);
      navigate("/");
    }
  };

  return (
    <div>
      {assesmen &&
        assesmen.map((data, id) => {
          return (
            <AssesmentDetailspage
              key={data._id}
              AssesmentTitle={data.title}
              AssesmentType={data.type}
              multipleList={data.multipleChoice}
              shortList={data.shortAnswer}
              essayList={data.essay}
              booleanList={data.boolean}
              handleMultipleCheck={handleMultipleCheck}
              handleShortAnswer={handleShortAnswer}
              handleEssayAnswer={handleEssayAnswer}
              handleBooleanAnswer={handleBooleanAnswer}
              handleSubmit={handleSubmit}
            />
          );
        })}
    </div>
  );
};
export default AssignmentPage;
