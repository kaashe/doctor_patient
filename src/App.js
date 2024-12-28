import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StepperForm from "./components/StepperForm";
import SummaryPage from "./components/SummaryPage";
import Login from "./components/Login";
import DoctorPortal from "./components/DoctorPortal";
import SplashScreen from "./components/SplashScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/patient" element={<StepperForm />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<DoctorPortal />} />
      </Routes>
    </Router>
  );
};

export default App;
