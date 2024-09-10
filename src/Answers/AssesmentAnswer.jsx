import "./Answers.css";
const AssesmentAnswer = ({
  id,
  assesmentTitle,
  assesmentType,
  handleClick,
}) => {
  return (
    <div className="assesmentAnswerContainer" onClick={() => handleClick(id)}>
      <div className="assesmentAnsContainer">
        <div>
          <h2>{assesmentTitle}</h2>
        </div>
        <div className="answerTypes">
          <h3 className="answerType"> {assesmentType}</h3>
        </div>
      </div>
    </div>
  );
};
export default AssesmentAnswer;
