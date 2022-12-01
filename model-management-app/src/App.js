import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Model from "./components/Model";
import Manager from "./components/Manager";

function App() {
  return (
    <Routes>
      {/* public routes */}
      <Route path="/" element={<Login />} />
      <Route path="manager" element={<Manager />} />
      <Route path="model" element={<Model />} />
    </Routes>
  );
}

export default App;
