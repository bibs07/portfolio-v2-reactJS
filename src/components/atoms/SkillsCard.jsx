import React from "react";
import "../styles/SkillsCard.css";

export const SkillsCard = ({ image, alt, caption }) => {
  return (
    <div className="skillsCard">
      <img src={image} alt={alt} />
      <figcaption>{caption}</figcaption>
    </div>
  );
};
