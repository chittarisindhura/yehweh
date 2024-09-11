import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AssesmentsContainer from "./AsssesmentsContainer";
const Assesments = () => {
  const baseUrl = "https://yehwehnode.vercel.app/";
  const [assesment, setAssesment] = useState("");
  useEffect(() => {
    getAssignments();
  }, []);
  console.log("get", assesment);

  const getAssignments = async () => {
    const res = await axios.get(`${baseUrl}/assesment/get`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    setAssesment(res.data);
  };

  return (
    <div className="assesment">
      <h1>My Assesments</h1>
      <p className="studentsPara"> Students Page</p>
      <Link to="/assesment">
        <button>Create New Assesment Button</button>
      </Link>

      <Link to="/assesmentAnswer">
        {" "}
        <button type="button" className="teacher">
          Teacher's Page
        </button>
      </Link>
      <div>
        <AssesmentsContainer AssesmentList={assesment && assesment} />
      </div>
    </div>
  );
};
export default Assesments;
