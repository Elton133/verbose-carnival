import React from "react";
import instagram from "../assets/instagram.png";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/github.png";

const Contact = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-25 mb-10">
      <div>
        <a href="mailto:eltonmorden029@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4caf50"
              d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
            ></path>
            <path
              fill="#1e88e5"
              d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
            ></path>
            <polygon
              fill="#e53935"
              points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            ></polygon>
            <path
              fill="#c62828"
              d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
            ></path>
            <path
              fill="#fbc02d"
              d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
            ></path>
          </svg>
        </a>
      </div>

      <div>
        <a
          href="https://www.linkedin.com/in/elton-morden-9a7bb5261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="LinkedIn" width="27" height="27" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Elton133"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Github" width="27" height="27" />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/_.el_ton/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" width="27" height="27" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
