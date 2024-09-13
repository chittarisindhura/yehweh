import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AssesmentAnswer from "./AssesmentAnswer";
import "./Answers.css";
const DisplayAnswersPage = () => {
  const baseUrl = "https://yehwehnode.vercel.app";
  const [assesmentAnswer, setAssesmentAnswer] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    getAssignments();
  }, []);
  const getAssignments = async () => {
    const res = await axios.get(`${baseUrl}/assesment/getAnswers`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setAssesmentAnswer(res.data);
  };
  const handleClick = (id) => {
    const assesmentData =
      assesmentAnswer &&
      assesmentAnswer.filter((data) => {
        if (data._id === id) {
          return data;
        }
      });
    return navigate(`/assesmentAnswer/${id}`, {
      state: { assesmentData, id },
    });
  };
  return (
    <div className="assesmentAns">
      <h1> Students Assesment Answers List</h1>
      <div className="assesmentAnswer">
        {assesmentAnswer &&
          assesmentAnswer.map((data) => {
            return (
              <AssesmentAnswer
                id={data._id}
                assesmentTitle={data.title}
                assesmentType={data.type}
                handleClick={handleClick}
              />
            );
          })}
      </div>
    </div>
  );
};
export default DisplayAnswersPage;
