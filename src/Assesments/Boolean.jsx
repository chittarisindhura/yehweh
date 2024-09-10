const Boolean = ({ handleBoolean, booleanLists }) => {
  return (
    booleanLists &&
    booleanLists.map((boolean, id) => (
      <div className="booleanDiv" key={boolean.id}>
        <label id="labeldiv">Enter Boolean Question </label>
        <br />
        <input
          type="text"
          size="120"
          length="200"
          placeholder="Enter Boolean Question"
          onChange={(e) => {
            handleBoolean(boolean.id, e.target.value);
          }}
        />
      </div>
    ))
  );
};
export default Boolean;
