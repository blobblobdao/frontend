import Sidebar from "@/components/Sidebar";
import React from "react";
import "./index.css";
function Dashboard({ children }: any) {
  return (
    <div className="flex flex-row justify-start">
      <Sidebar />

      <div className="mainBlock">{children}</div>
    </div>
  );
}

export default Dashboard;
