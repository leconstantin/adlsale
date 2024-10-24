import React from "react";
import Hero from "../sections/home/hero";
import Values from "../sections/home/values";
import About from "../sections/home/about";
import Testimonials from "../sections/home/testimonials";
import Programs from "../sections/home/programs";
import Principal from "../sections/home/principal";
import Newsletter from "../sections/home/newsletter";
import Faq from "../sections/home/faq";
const LandingPage = () => {
  return (
    <>
      <article className="hero">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <video
              src="/vidg.mp4"
              poster=""
              autoPlay
              muted
              loop
              className="bg-zinc-100 h-screen object-cover"
            />
          </div>
          <div class="absolute inset-0 bg-black opacity-55"></div>

          <div className="relative z-10 ">
            <Hero />
          </div>
        </div>
      </article>
      <main className="">
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
