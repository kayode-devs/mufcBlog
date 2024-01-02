"use client";
import ErrorComponent from "@/_local-components/errorPage";

const ErrorPage = ({ error }) => {
  // console.log(error);
  return <ErrorComponent error={error} />;
};

export default ErrorPage;
