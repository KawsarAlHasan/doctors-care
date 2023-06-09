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
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryButtons>Get Started</PrimaryButtons>
        </div>
      </div>
    </div>
  );
}

export default Banner;