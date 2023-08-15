import "./App.css";

import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import React from "react";

const AppLayout = () => {
  return (
    <div className="body">
      <Header />
      <Outlet />
    </div>
  );
};
export default AppLayout;
