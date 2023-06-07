import React from "react";

function InfoCard({ card }) {
  const { name, description, icon, colorClass, bgClass } = card;
  return (
    <div className={`card p-6 md:card-side ${colorClass} shadow-xl ${bgClass}`}>
      <figure>
        <img src={icon} alt="no internet" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
