import React from "react";
import Banner from "./Banner";
import InfoCards from "./InfoCards";
import Services from "./Services";
import Hero from "./Hero";
import MakeAppointment from "./MakeAppointment";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <MakeAppointment></MakeAppointment>
      <Services></Services>
      <Hero></Hero>
      <Testimonial></Testimonial>
    </div>
  );
}

export default Home;
