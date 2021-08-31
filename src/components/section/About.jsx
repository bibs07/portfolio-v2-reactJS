import React from "react";
import "../styles/About.css";
import { Header } from "../atoms/Header";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__photo">
        <img src="./images/userPhoto.jpg" alt="user" />
        <h4>Bibek Dulal</h4>
        <h5>IT Graduate</h5>
        <h6>Federation University Australia</h6>
      </div>
      <div className="about__description">
        <Header header="Web Developer" />
        <p>
          Recently graduated in Information Technology from Federation
          University with a background in web design and development. I'm
          currently working at Barbeques Galore Australia as an Assistant Store
          Manager. Coming from sales background I'm greatly experienced in
          finding and performing tasks as per customer needs and problem solving
          on the go.
        </p>
        <br />
        <p>
          My major interest is in designing and coding so I'm aspiring to become
          a front-end developer. In my spare time, I work on web design projects
          and learn new programming language and frameworks.
        </p>
        <button>
          <a href="./resume.pdf">
            <svg
              width="12"
              height="14"
              viewBox="0 0 12 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="downloadIcon"
            >
              <path
                d="M9 7.75H6.75V0.25H5.25V7.75H3L6 10.75L9 7.75ZM0 12.25V13.75H12V12.25H0Z"
                fill="white"
              />
            </svg>
            Download Resume
          </a>
          {/* Download icon */}
        </button>
      </div>
    </section>
  );
};
