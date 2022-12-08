import { Routes, Route } from "react-router-dom";
import RequireAuth from "./auth/RequireAuth";

import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Model from "./pages/Model";
import Manager from "./pages/Manager";
import NotAuthorized from "./pages/NotAuthorized";
import NotFound from "./pages/NotFound";

import Layout from "./layout/Layout";

import "./styles/index.css";
import { SetupInterceptors } from "./api/Utils";

const App = () => {
  SetupInterceptors();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* unprotected routes for login and unautharozition pages */}
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route path="notauthorized" element={<NotAuthorized />} />

        {/* protected routes for manager and model roles */}
        <Route element={<RequireAuth allowedRoles={["Model"]} />}>
          <Route path="model" element={<Model />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["Manager"]} />}>
          <Route path="manager" element={<Manager />} />
        </Route>

        {/* default */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
