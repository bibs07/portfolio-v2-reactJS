import React from "react";
import "../styles/ProjectCard.css";

export const ProjectCard = ({
  image,
  imageAlt,
  title,
  description,
  technology1,
  technology2,
  technology3,
  link,
  linkDisplay,
}) => {
  return (
    <div className="projectCard">
      <div className="projectCard__image">
        <img src={image} alt={imageAlt} />
      </div>
      <div className="projectCard__description">
        <div className="projectCard__descTop">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="projectCard__technology">
          <h4>{technology1}</h4>
          <h4>{technology2}</h4>
          <h4>{technology3}</h4>
        </div>
        <div className="projectCard__footer">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="projectCard__logo"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.44887 14.9682C14.4541 14.8236 14.9467 13.77 14.9467 7.78864C14.9467 1.18862 14.3467 0.588623 7.74667 0.588623C1.14669 0.588623 0.546692 1.18862 0.546692 7.78864C0.546692 13.7856 1.04229 14.829 6.08347 14.9694C6.12727 14.9148 6.14347 14.8464 6.14347 14.7768C6.14347 14.6268 6.13747 13.0872 6.13447 12.5574C4.31229 12.9408 3.92769 11.706 3.92769 11.706C3.62949 10.9728 3.19989 10.7772 3.19989 10.7772C2.60529 10.3836 3.24489 10.3914 3.24489 10.3914C3.90249 10.4364 4.24869 11.046 4.24869 11.046C4.83309 12.0162 5.78229 11.736 6.15547 11.5734C6.21487 11.1636 6.38407 10.8834 6.57127 10.725C5.11629 10.5648 3.58689 10.02 3.58689 7.58704C3.58689 6.89403 3.84249 6.32764 4.26129 5.88362C4.19349 5.72282 3.96909 5.07722 4.32549 4.20362C4.32549 4.20362 4.87569 4.03262 6.12727 4.85402C6.64987 4.71302 7.21027 4.64282 7.76767 4.64042C8.32387 4.64282 8.88427 4.71302 9.40807 4.85402C10.6591 4.03262 11.2081 4.20362 11.2081 4.20362C11.5657 5.07722 11.3407 5.72282 11.2729 5.88362C11.6929 6.32764 11.9467 6.89403 11.9467 7.58704C11.9467 10.026 10.4149 10.563 8.95507 10.7196C9.19027 10.9158 9.39967 11.3034 9.39967 11.8956C9.39967 12.4632 9.39607 13.467 9.39367 14.1324C9.39247 14.4618 9.39187 14.7078 9.39187 14.7768C9.39187 14.8422 9.40927 14.9112 9.44887 14.9682Z"
              fill="white"
            />
          </svg>
          <a href={link}>{linkDisplay}</a>
        </div>
      </div>
    </div>
  );
};
