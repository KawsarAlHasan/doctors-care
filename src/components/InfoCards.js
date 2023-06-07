import React from "react";
import InfoCard from "./InfoCard";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";

function InfoCards() {
  const cardData = [
    {
      _id: 1,
      name: "Opening Hours",
      description: "Open 9.00AM to 5.00PM everyday",
      icon: clock,
      colorClass: "text-white",
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      _id: 2,
      name: "Our Locations",
      description: "Mirpur Dhaka Bangladesh",
      icon: marker,
      colorClass: "text-black",
      bgClass: "bg-accent",
    },
    {
      _id: 3,
      name: "Contact Us",
      description: "+0123456789",
      icon: phone,
      colorClass: "text-white",
      bgClass: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card) => (
        <InfoCard key={card._id} card={card}></InfoCard>
      ))}
    </div>
  );
}

export default InfoCards;
