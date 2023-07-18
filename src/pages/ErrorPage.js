import React from "react";
import pageNotFound from "../images/pageNotFound.jpg";

const ErrorPage = () => {
  return (
    <div className="contentOfPage d-flex flex-column justify-content-center align-items-center">
      <p className="text-danger fs-3 mb-4">404 Page Not Found!</p>
      <div className="errorImgBox shadow col-9 col-sm-5 col-lg-3">
        <img className="errorImg" src={pageNotFound} alt="Page not found!" />
      </div>
    </div>
  );
};

export default ErrorPage;
