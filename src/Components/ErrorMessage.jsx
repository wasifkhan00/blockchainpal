import React from "react";
import { Link } from "react-router-dom";

function ErrorMessage() {
  return (
    <>
      <div className="errorMessage">
        <h1>404 Page Not Found :(</h1>
        <Link to="/" className="errorBtn">
          Go back Home
        </Link>
      </div>
    </>
  );
}

export default ErrorMessage;
