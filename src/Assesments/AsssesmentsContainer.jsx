import AssesmentContainer from "./AssesmentContainer";
import { useNavigate } from "react-router-dom";
const AssesmentsContainer = ({ AssesmentList }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    const assesment =
      AssesmentList &&
      AssesmentList.filter((data) => {
        if (data._id === id) {
          return data;
        }
      });
    return navigate(`/assesmentPage/${id}`, { state: { assesment, id } });
  };
  return (
    <div className="assesmentList">
      {AssesmentList &&
        AssesmentList.map((data) => {
          return (
            <AssesmentContainer
              key={data._id}
              id={data._id}
              title={data.title}
              type={data.type}
              questionBank={data.questionBank}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
};
export default AssesmentsContainer;
