import React from "react";
import { buttons, heroContent } from "../../data/home/hero";
import { Link, Router } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 md:px-14">
      {heroContent.map((content) => (
        <div className="flex flex-col items-center justify-center">
          <div>
            <p className="mx-auto max-w-5xl text-4xl md:text-5xl font-semibold tracking-tight text-slate-50 text-center">
              {content.title}
            </p>
          </div>
          <div className="max-w-3xl">
            <p className="mx-auto my-6 text-2xl tracking-tight text-slate-50 text-center">
              {content.subtitle}
              <span className="text-blue-400 font-semibold font-mono">
                {" "}
                Together we can.
              </span>{" "}
              🖐️
            </p>
          </div>
        </div>
      ))}

      <div className="flex gap-x-12 pt-20 md:pt-14">
        {buttons.map((btn) => (
          <button key={btn.id}>
            <Link to={btn.toLink}>
              <a
                href="#"
                class="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
                download={btn.download}
              >
                {btn.left ? btn.text : ""}
                <img src={btn.src} alt="" className={btn.class} />
                {btn.left ? "" : btn.text}
              </a>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
