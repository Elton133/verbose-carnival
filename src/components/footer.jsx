import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-4"> 
      <hr className="border-gray-600 pb-10 md:mx-10" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center pb-5">
        <nav>
          <ul className="flex space-x-8 text-sm">
            <li>
              <Link to="/articles" className=" ">
                Articles
              </Link>
            </li>
            <li>
              <Link to="/projects" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/speaking" className="">
                Speaking
              </Link>
            </li>
            <li>
              <Link to="/now" className="">
                Now
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-4 md:mt-0 text-gray-400 text-sm">
          © 2025 Elton Morden. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
