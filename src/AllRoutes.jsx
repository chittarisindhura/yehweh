import Assesments from "./Assesments/Assesments";
import { Routes, Route } from "react-router";
import CreateAssesments from "./Assesments/CreateAssesment";
import AssesmentPage from "./Answers/AssignmentPage";
import DisplayAnswersPage from "./Answers/DisplayAnswersPage";
import DisplayAnswerDetailsPage from "./Answers/DisplayAnswerDetailsPage";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Assesments />} />
        <Route exact path="/assesment" element={<CreateAssesments />} />
        <Route exact path="/assesmentPage/:id" element={<AssesmentPage />} />
        <Route exact path="/assesmentAnswer" element={<DisplayAnswersPage />} />
        <Route
          exact
          path="/assesmentAnswer/:id"
          element={<DisplayAnswerDetailsPage />}
        />
      </Routes>
    </div>
  );
};
export default AllRoutes;
