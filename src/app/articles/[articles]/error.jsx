"use client"
import ErrorComponent from "@/_local-components/errorPage";

const ErrorPage = ({error}) => {
  return (
    <div>
        <ErrorComponent error={""} />
    </div>
  )
}

export default ErrorPage;
