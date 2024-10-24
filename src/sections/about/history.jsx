import React from "react";

const History = () => {
  return (
    <section className="px-6 lg:px-14 py-20">
      <div className="flex flex-col items-center   justify-center">
        <p className="text-lg text-gray-500 ">History</p>
        <h2 className="font-bold text-2xl lg:text-4xl lg:w-1/2 text-center pt-4">
          Our journey :
          <span className="text-blue-400"> A Legacy of Excellence</span>
        </h2>
        <p className="pt-4 text-center lg:w-[70vw] text-balance text-slate-600">
          Our school offers a variety of innovative programs designed to foster
          creativity and critical thinking. We are commited to nurturing
          well-rounded individuals who excel academically and socially.
        </p>
      </div>
      <div className="md:flex lg:flex-row-reverse md:gap-x-5 lg:gap-x-16 gap-y-10 pt-20 ">
        <div className="md:w-1/2 pb-10  md:pb-0">
          <img
            src="https://images.stockcake.com/public/5/7/5/5752206f-69c1-433f-95bf-645e7ece243c_large/colorful-science-lab-stockcake.jpg"
            alt=""
            className="rounded-md"
          />
        </div>
        <div className="md:w-1/2">
          <p className="font-medium text-zinc-600 leading-8 text-lg tracking-tight">
            Academy De La Salle, founded by Saint Jean-Baptiste de La Salle and
            established by the La Sallian Brothers, is dedicated to fostering
            the values of Faith, Brotherhood, and Quality. Since its inception,
            the Academy has committed itself to nurturing students through a
            holistic approach that emphasizes spiritual growth, a sense of
            community, and educational excellence. By integrating these core
            values into its teaching and school culture, the Academy prepares
            students to excel both academically and personally, embodying the
            enduring principles and vision of its founder.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
