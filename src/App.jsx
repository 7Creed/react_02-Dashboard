import { Routes, Route, useNavigate } from "react-router-dom";

import "./index.css";
import AdminDashboard from "./pages/admin-dashboard/adminDashboard";
import { useEffect } from "react";

export default function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/admin-dashboard/main");
  // });

  return (
    <div className="h-screen w-full">
      <AdminDashboard />
    </div>
  );
}
