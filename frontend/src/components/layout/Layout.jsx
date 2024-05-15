import React from "react";
import Navbar from "./Navbar";
import Alerts from "../alerts/Alerts";
import Dashboard from "../layout/Dashboard";

const Layout = ({ children }) => {
  return (
    <>
      <div class="flex h-screen">
        <div class="w-64 bg-white shadow-md">
          <div class="p-4 border-b border-gray-200">
            <Navbar />
          </div>
        </div>
        <div class="flex-grow p-4">
          <Alerts />
          <Dashboard />

          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
