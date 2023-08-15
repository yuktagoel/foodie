import "./App.css";

import Container from "./components/Container";
import Header from "./components/Header";
import React from "react";

const AppLayout = () => {
  return (
    <div className="body">
      <Header />
      <Container />
    </div>
  );
};
export default AppLayout;
