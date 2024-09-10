import "./Assesment.css";
import React from "react";
const MultipleChoice = ({
  handleQuestionChange,
  handleChoice1Change,
  handleChoice2Change,
  handleChoice3Change,
  handleChoice4Change,
  multipleQuestions,
}) => {
  let mid;
  return multipleQuestions.map((multiple, id) => (
    <div className="multipleDiv" key={multiple.id}>
      <label id="labeldiv">Enter Multiple Choice Question </label>
      <br />
      <input
        type="text"
        length="200"
        placeholder="Enter multiple choice question"
        size="120"
        onChange={(e) => {
          handleQuestionChange(multiple.id, e.target.value, mid);
        }}
        name="questionValue"
      />
      <br />
      <div className="choiceFlex">
        <input
          type="text"
          placeholder="Enter Choice1"
          length="50"
          name="choice1"
          onChange={(e) => {
            handleChoice1Change(multiple.id, e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Choice2"
          length="50"
          name="choice2"
          onChange={(e) => {
            handleChoice2Change(multiple.id, e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Choice3"
          length="50"
          name="choice3"
          onChange={(e) => {
            handleChoice3Change(multiple.id, e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Choice4"
          length="50"
          name="choice4"
          onChange={(e) => {
            handleChoice4Change(multiple.id, e.target.value);
          }}
        />
      </div>
    </div>
  ));
};
export default MultipleChoice;
