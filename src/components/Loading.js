import React from "react";
import "./Loading.css";

function Loading() {
  return (
    <div className="loader-star">
      <div className="loader-body">
        <div className="loader"></div>
        <span className="loading-span">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
