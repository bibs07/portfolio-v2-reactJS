import React from "react";
import { SkillsCard } from "../atoms/SkillsCard";
import { Header } from "../atoms/Header";
import "../styles/Skills.css";

export const Skills = () => {
  return (
    <section className="skills">
      <Header header="Skills" />
      <div className="skills__container">
        <div className="skills__row">
          <SkillsCard
            image="./images/jsIcon.png"
            alt="javascript"
            caption="JavaScript"
          />
          <SkillsCard
            image="./images/pythonIcon.png"
            alt="Python"
            caption="Python"
          />
          <SkillsCard
            image="./images/htmlIcon.png"
            alt="HTML5"
            caption="HTML5"
          />
        </div>
        <div className="skills__row">
          <SkillsCard
            image="./images/reactIcon.png"
            alt="react"
            caption="React JS"
          />
          <SkillsCard image="./images/cssIcon.png" alt="css" caption="CSS" />
          <SkillsCard
            image="./images/jqueryIcon.png"
            alt="jquery"
            caption="jQuery"
          />
        </div>
      </div>
    </section>
  );
};
