import React from "react";
import chair from "../../assets/images/chair.png";
import PrimaryButtons from "../../components/PrimaryButtons";

function Banner() {
  return (
    <div className="hero bannerBg">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="rounded-lg lg:w-1/2 shadow-2xl"
          alt="no inernet"
        />
        <div>
          <h1 className="text-5xl font-bold">Doctors Care Clinic</h1>
          <p className="py-6">
            Our main objective is to keep people healthy. For this, our doctors
            try their best to cure a patient as soon as possible.
          </p>
          <PrimaryButtons>Get Started</PrimaryButtons>
        </div>
      </div>
    </div>
  );
}

export default Banner;
