import React from "react";

const LeadershipCard = ({ name, title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2 className="card-title">{name}</h2>
      <h3 className="card-subtitle">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default LeadershipCard;
