import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navLinks from "../data/navLinks";
const Header = (props) => {
  return (
    <header className="relative z-20 bg-transparent">
      <nav className="flex items-center justify-between px-4 md:px-8 py-6 md:py-7">
        <div className="text-lg  sm:text-2xl lg:text-xl">
          <Link to={""}>
            <a
              href=""
              className="font-semibold font-poppins uppercase  hover:text-slate-700
              "
            >
              Academie
              <span className="text-blue-400"> Dela </span>
              Salle
            </a>
          </Link>
        </div>
        <div className={`lg:flex ${props.menu ? "menu" : "hidden"}`}>
          <ul className="lg:flex gap-x-8">
            {props.menu && (
              <div className="bg-white w-full py-2 px-2 text-center rounded-md mb-4">
                Welcome on our website
              </div>
            )}
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link to={link.path} onClick={() => props.handleLink(link.id)}>
                  <a
                    href=""
                    className={`font-poppins ${
                      props.menu ? "px-2" : ""
                    }  hover:text-sky-500 leading-6
                    ${
                      props.active === link.id
                        ? "text-blue-400"
                        : "text-zinc-700"
                    }
                    `}
                  >
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center border-l border-slate-200  md:ml-6 pl-6 gap-x-2">
          <div className={`${props.dark ? "hidden" : ""}`}>
            <span>
              <span href="" onClick={props.handleClick}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="w-6 h-6"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    class="fill-blue-400/20 stroke-blue-400"
                  ></path>
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    class="stroke-blue-400"
                  ></path>
                </svg>
              </span>
            </span>
          </div>
          <div className={`${props.dark ? "" : "hidden"}`}>
            <span href="" onClick={props.handleClick}>
              <svg
                class="w-6 h-6 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
                />
              </svg>
            </span>
          </div>
          <div className="group relative">
            <Link to={"/contact"}>
              <span>
                <svg
                  class="w-6 h-6 text-blue-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="fill-blue-400/20 stroke-blue-400"
                    stroke-width="2"
                    d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                  />
                </svg>
              </span>
            </Link>

            <span className="hidden absolute right-7 pt-5  group-hover:flex">
              <span className="border-r-2 px-2 text-sky-400 font-semibold">
                Gicumbi
              </span>
              <span className="px-2 text-sky-400 font-semibold">Byumba</span>
            </span>
          </div>
          <div>
            <span
              className={`lg:hidden ${props.menu ? "hidden" : ""}`}
              onClick={props.toggleMenu}
            >
              <svg
                className="w-8 h-8 text-blue-400 hover:scale-105 cursor-pointer hover:text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
            </span>
            <span
              className={`lg:hidden ${props.menu ? "" : "hidden"}`}
              onClick={props.toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-sky-400 hover:scale-105 cursor-pointer hover:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
