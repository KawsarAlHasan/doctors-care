import React from "react";
import Banner from "../../components/Banner";
import InfoCards from "../../components/InfoCards";
import Services from "../../components/Services";
import Hero from "../../components/Hero";
import MakeAppointment from "../../components/MakeAppointment";
import Testimonial from "../../components/Testimonial";

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
