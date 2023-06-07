import React from "react";
import Banner from "../../components/Banner";
import InfoCards from "../../components/InfoCards";
import Services from "../../components/Services";

function Home() {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
    </div>
  );
}

export default Home;
