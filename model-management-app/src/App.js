import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";
import Login from "./pages/Login";
import Manager from "./pages/Manager";
import Job from "./pages/Job";
import JobId from "./pages/JobId";
import Model from "./pages/Model";
import NotAuthorized from "./pages/NotAuthorized";
import Layout from "./layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* unprotected routes for login and unautharozition pages */}
          <Route path="login" element={<Login />} />
          <Route path="notauthorized" element={<NotAuthorized />} />

          {/* protected routes for manager and model roles */}
          <Route element={<RequireAuth allowedRoles={["Model", "Manager"]} />}>
            <Route path="job" element={<Job />} />
            <Route path="job/:jobId" element={<JobId />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={["Manager"]} />}>
            <Route path="manager" element={<Manager />} />
            <Route path="model" element={<Model />} />
          </Route>

          {/* default */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
