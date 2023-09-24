import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <>
      <Header />
      <div>ErrorPage</div>
      <div>
        {err.status}: {err.statusText}
      </div>
    </>
  );
};

export default ErrorPage;
