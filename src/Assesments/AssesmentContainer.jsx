import "./Assesment.css";
const AssesmentContainer = ({ id, title, type, handleClick, questionBank }) => {
  return (
    <div className="AssesmentContainer" onClick={() => handleClick(id)}>
      <h4>{title}</h4>
      <h4> {type}</h4>
    </div>
  );
};
export default AssesmentContainer;
