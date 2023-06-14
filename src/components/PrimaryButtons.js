import React from "react";
import { Link } from "react-router-dom";

function PrimaryButtons({ children }) {
  return (
    <Link
      to="/appointment"
      className="btn uppercase text-white btn-primary bg-gradient-to-r from-primary to-secondary"
    >
      {children}
    </Link>
  );
}

export default PrimaryButtons;
