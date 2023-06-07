import React from "react";
import Service from "../components/Service";
import fluoride from "../assets/images/fluoride.png";
import cavity from "../assets/images/cavity.png";
import whitening from "../assets/images/whitening.png";

function Services() {
  const servicesData = [
    {
      _id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride is an inorganic, monatomic anion of fluorine, with the chemical formula F⁻ , whose salts are typically white or colorless. Fluoride salts typically have distinctive bitter tastes, and are odorless.",
      icon: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        'To treat a cavity your dentist will remove the decayed portion of the tooth and then "fill" the area on the tooth where the decayed material was removed. ',
      icon: cavity,
    },
    {
      _id: 3,
      name: "Teeth Whitening",
      description:
        "The best way to whiten teeth by removing stains is whitening toothpaste and an electric toothbrush. For more dramatic results, the best teeth whitening method is a custom-fitted whitening gel tray. ",
      icon: whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-xl font-bold">
          OUR <span className="text-neutral">SERVICES</span>
        </h2>
        <h1 className="text-3xl">
          <span className="text-secondary">Services</span> We Provide
        </h1>
      </div>
      <div className="gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {servicesData.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
}

export default Services;
