const DisplayAnswerDetails = ({
  id,
  assesmentTitle,
  assesmentType,
  multipleChoiceAnswer,
  shortAnswer,
  essayAnswer,
  booleanAnswer,
}) => {
  return (
    <div className="displayAnswerContainer" key={id}>
      <div className="AnswerDetailsHeader">
        <h1>{assesmentTitle}</h1>
        <h3>{assesmentType}</h3>
      </div>
      <div className="multipleChoice">
        {multipleChoiceAnswer && multipleChoiceAnswer.length > 0 && (
          <h3>Multiple Choice Questions:</h3>
        )}
        {multipleChoiceAnswer &&
          multipleChoiceAnswer.map((multiple) => {
            let ids = Number(multiple.id) + 1;
            return (
              <div key={multiple.id}>
                <h4>
                  {ids}. {multiple.question}
                </h4>
                <h4> Answer: {multiple.multipleAnswer}</h4>
              </div>
            );
          })}
      </div>
      <div className="shortAnswer">
        {shortAnswer && shortAnswer.length > 0 && (
          <h3> Short Answer Questions:</h3>
        )}
        {shortAnswer &&
          shortAnswer.map((short) => {
            let ids = Number(short.id) + 1;
            return (
              <div key={short.id}>
                <h4>
                  {ids}. {short.question}
                </h4>
                <h4> Answer: {short.shortAnswer}</h4>
              </div>
            );
          })}
      </div>
      <div className="essayAnswer">
        {essayAnswer && essayAnswer.length > 0 && (
          <h3> Essay Answer Questions:</h3>
        )}
        {essayAnswer &&
          essayAnswer.map((essay) => {
            let ids = Number(essay.id) + 1;
            return (
              <div key={essay.id}>
                <h4>
                  {ids}. {essay.question}
                </h4>
                <h4> Answer: {essay.essayAnswer}</h4>
              </div>
            );
          })}
      </div>
      <div className="booleanAnswer">
        {booleanAnswer && booleanAnswer.length > 0 ? (
          <h3> Boolean Answer Questions:</h3>
        ) : (
          ""
        )}
        {booleanAnswer &&
          booleanAnswer.map((boolean) => {
            let ids = Number(boolean.id) + 1;
            return (
              <div key={boolean.id}>
                <h4>
                  {ids}. {boolean.question}
                </h4>
                <h4> Answer: {boolean.booleanAnswer}</h4>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default DisplayAnswerDetails;
