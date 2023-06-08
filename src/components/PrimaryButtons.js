import React from "react";

function PrimaryButtons({ children }) {
  return (
    <button className="btn uppercase text-white btn-primary bg-gradient-to-r from-primary to-secondary">
      {children}
    </button>
  );
}

export default PrimaryButtons;
