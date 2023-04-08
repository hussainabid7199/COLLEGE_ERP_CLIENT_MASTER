import { Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./components/Request/Post/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Underdev from "./components/partials/Underdev";





function App() {
  // toast.error("ERROR");
  // toast.success("SUCCESFUL");
  // toast.info("INFORMALIZED");
  // toast.warn("WARNING");
  return (
    <div className="App">
      {/* <ToastContainer
        draggable={false}
        transition={Zoom}
        autoClose={5000}
      /> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        {/* Admin */}
        <Route exact path="/dashboard/admin/teacher" element={<Dashboard />} />
        <Route exact path="/dashboard/admin/student" element={<Dashboard />} />
        <Route exact path="/dashboard/admin/profile" element={<Dashboard />} />
        <Route exact path="/dashboard/admin/register" element={<Dashboard />} />
        {/* Teacher */}
        <Route exact path="/dashboard/teacher/profile" element={<Dashboard />} />
        <Route exact path="/dashboard/teacher/student" element={<Dashboard />} />
        <Route exact path="/dashboard/teacher/complaint" element={<Dashboard />} />
        <Route exact path="/dashboard/teacher/attandance" element={<Dashboard />} />
        <Route exact path="/dashboard/teacher/salary" element={<Dashboard />} />
        {/* Student */}
        <Route exact path="/dashboard/student/profile" element={<Dashboard />} />
        <Route exact path="/dashboard/student/complaint" element={<Dashboard />} />
        <Route exact path="/dashboard/student/attandance" element={<Dashboard />} />
        <Route exact path="/dashboard/student/fee" element={<Dashboard />} />
        <Route exact path="/underdevelopment" element={<Underdev />} />
      </Routes>
    </div>
  );
}

export default App;
