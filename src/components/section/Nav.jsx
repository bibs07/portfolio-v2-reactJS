import React from "react";
import "../styles/Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="30" height="30" rx="5" fill="#2A4D6C" />
          <path
            d="M21.92 10.88C21.92 11.728 21.352 12.568 20.216 13.4C19.08 14.232 17.688 14.848 16.04 15.248C17.272 15.344 18.256 15.656 18.992 16.184C19.728 16.696 20.096 17.4 20.096 18.296C20.096 19.176 19.648 19.936 18.752 20.576C17.872 21.216 16.824 21.536 15.608 21.536C14.904 21.536 14.208 21.416 13.52 21.176C12.832 20.952 12.488 20.664 12.488 20.312C12.488 20.28 12.504 20.264 12.536 20.264L12.68 20.312C13.048 20.552 13.512 20.672 14.072 20.672C15.448 20.672 16.648 20.344 17.672 19.688C18.696 19.032 19.208 18.408 19.208 17.816C19.208 17.208 18.8 16.696 17.984 16.28C17.184 15.864 16.4 15.656 15.632 15.656C14.88 15.656 14.288 15.744 13.856 15.92C13.696 15.888 13.616 15.784 13.616 15.608C13.616 15.384 13.784 15.224 14.12 15.128L14.888 15.008C16.664 14.528 18.048 13.912 19.04 13.16C20.032 12.392 20.528 11.536 20.528 10.592C20.528 10.128 20.264 9.752 19.736 9.464C19.208 9.176 18.408 9.032 17.336 9.032C16.28 9.032 15.392 9.128 14.672 9.32C13.968 9.496 12.8 9.864 11.168 10.424C9.536 10.968 8.696 11.24 8.648 11.24C8.376 11.24 8.24 11.048 8.24 10.664C8.24 10.488 8.296 10.376 8.408 10.328C11.416 9.128 14.312 8.528 17.096 8.528C20.312 8.528 21.92 9.312 21.92 10.88ZM15.368 10.448C15.368 10.48 15.36 10.504 15.344 10.52C11.888 15.528 10.16 19.232 10.16 21.632C10.16 21.936 10.224 22.232 10.352 22.52C10.48 22.808 10.56 22.952 10.592 22.952V22.928C10.592 23.008 10.544 23.048 10.448 23.048C10.176 23.048 9.936 22.832 9.728 22.4C9.536 21.968 9.44 21.464 9.44 20.888C9.44 18.808 10.6 15.808 12.92 11.888C13.592 10.624 14.04 9.992 14.264 9.992C14.488 9.992 14.728 10.048 14.984 10.16C15.24 10.256 15.368 10.352 15.368 10.448Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};