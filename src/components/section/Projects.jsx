import React from "react";
import { Header } from "../atoms/Header";
import { ProjectCard } from "../atoms/ProjectCard";
import "../styles/Projects.css";

export const Projects = () => {
  return (
    <section id="projects">
      <Header header="Projects" />
      <div className="projects__cards">
        <ProjectCard
          image={"./images/netflixScn.png"}
          imageAlt={"netflix"}
          title={"Netflix Clone"}
          description={`In this project, I fetched data from api provided by
          https://www.themoviedb.org/ website and used the data to clone the
          netflix design`}
          technology1={"ReactJS"}
          technology2={"HTML"}
          technology3={"CSS"}
          link={"https://github.com/bibs07/netflix-clone-reactjs"}
          linkDisplay={"bibs07/netflix-clone-reactjs"}
        />
        <ProjectCard
          image={"./images/tiktokScn.png"}
          imageAlt={"tiktok"}
          title={"Tiktok Clone"}
          description={`In this project, I copied the layout of tiktok and used firebase to store the data to use in this project.`}
          technology1={"ReactJS"}
          technology2={"CSS"}
          technology3={"Firebase"}
          link={"https://github.com/bibs07/tiktok-clone-reactJS"}
          linkDisplay={"bibs07/tiktok-clone-reactJS"}
        />
        <ProjectCard
          image={"./images/portfolioScn.png"}
          imageAlt={"portfolio"}
          title={"Porfilio Website V1"}
          description={`In this project, I created personal portfolio website with the help of ReactJS.`}
          technology1={"ReactJS"}
          technology2={"HTML"}
          technology3={"TailWindCSS"}
          link={"https://github.com/bibs07/personal-portfolio-react"}
          linkDisplay={"bibs07/personal-portfolio-react"}
        />
        <ProjectCard
          image={"./images/trackerScn.png"}
          imageAlt={"covid tracker"}
          title={"Covid Tracker"}
          description={`In this project, I created daily COVID update for Nepal using api provided by ministry of health of Nepal. It's hosted in https://bsgnews.com/`}
          technology1={"ReactJS"}
          technology2={"HTML"}
          technology3={"CSS"}
          link={"https://github.com/bibs07/covid-tracker-nepali"}
          linkDisplay={"bibs07/covid-tracker-nepali"}
        />
        <ProjectCard
          image={"./images/calculatorScn.png"}
          imageAlt={"calculator"}
          title={"Calculator"}
          description={`In this project, I created simple calculator using jQuery and designed it using Bootstrap.`}
          technology1={"jQuery"}
          technology2={"HTML"}
          technology3={"Bootstrap"}
          link={"https://github.com/bibs07/calculator-jQuery"}
          linkDisplay={"bibs07/calculator-jQuery"}
        />
      </div>
    </section>
  );
};
