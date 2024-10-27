import React, { useEffect, useState, useRef } from "react";
import Hero from "../sections/home/hero";
import Values from "../sections/home/values";
import About from "../sections/home/about";
import Testimonials from "../sections/home/testimonials";
import Programs from "../sections/home/programs";
import Principal from "../sections/home/principal";
import Newsletter from "../sections/home/newsletter";
import Faq from "../sections/home/faq";
const LandingPage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = (e) => {
    e.preventDefault();

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <article className="hero">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              src="/vidg.mp4"
              poster="/school/likes.jpg"
              muted
              loop
              className="bg-zinc-100 h-screen object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-black opacity-55"></div>

          <div className="relative z-10 ">
            <div className="absolute right-4  top-2 ">
              <a
                href=""
                className="ring-1 ring-white  p-2 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer"
                title="play video"
                onClick={togglePlayPause}
              >
                {isPlaying ? (
                  <svg
                    class="w-7 h-7 text-gray-100"
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
                      d="M9 6H8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Zm7 0h-1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                ) : (
                  <svg
                    class="w-7 h-7 text-gray-100"
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
                      d="M8 18V6l8 6-8 6Z"
                    />
                  </svg>
                )}
              </a>
            </div>
            <Hero />
          </div>
        </div>
      </article>
      <main className="font-poppins">
        {/* values */}
        <Values />

        {/* about */}
        <About />

        {/* programs */}
        <Programs />

        {/* Testimonials */}
        <Testimonials />

        {/* principal */}
        <Principal />

        {/* questions */}
        <Faq />

        {/* newsletter */}
        <Newsletter />
      </main>
    </>
  );
};

export default LandingPage;
