import "./Assesment.css";
import React from "react";

const ShortAnswer = ({ shortAnswerList, handleShort }) => {
  return shortAnswerList.map((short, id) => (
    <div className="shortAnswerDiv" key={id}>
      <label id="labeldiv">Enter ShortAnswer Question </label>
      <br />
      <input
        type="text"
        length="200"
        placeholder="Enter ShortAnswer Question"
        size="120"
        onChange={(e) => {
          handleShort(short.id, e.target.value);
        }}
      />
    </div>
  ));
};
export default ShortAnswer;
