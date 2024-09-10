const Essay = ({ essayLists, handleEssay }) => {
  return essayLists.map((essay, i) => (
    <div className="essayDiv" key={i}>
      <label id="labeldiv">Enter Essay Question </label>
      <br />
      <input
        type="text"
        length="200"
        placeholder="Enter Essay Question"
        size="120"
        onChange={(e) => {
          handleEssay(essay.id, e.target.value);
        }}
      />
    </div>
  ));
};
export default Essay;
