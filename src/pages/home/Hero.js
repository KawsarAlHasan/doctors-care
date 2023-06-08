import React from "react";
import treatment from "../../assets/images/treatment.png";

function Hero() {
  return (
    <div className="hero mt-16">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={treatment}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="no internet"
        />
        <div>
          <h1 className="text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            All Private Health Funds Accepted. General, cosmetic & restorative
            dentistry. Open Mon-Sat. Don't let bad teeth impact your overall
            health - Get the best care for you. Book online. All-Inclusive
            Services. Same Day Appointments. Short Wait Times. Affordable
            Dentistry.
          </p>
          <button className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
