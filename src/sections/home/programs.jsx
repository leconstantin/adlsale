import React from "react";
import { programContent } from "../../data/home";

const Programs = () => {
  return (
    <section className="px-6 md:px-14 pt-10 pb-20">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg text-gray-500 ">Excellence</p>
          <h2 className="font-bold text-4xl lg:w-1/2 text-center pt-4">
            Discover Our Unique
            <span className="text-blue-400 block">Educational Programs</span>
          </h2>
          <p className="pt-4 text-center tracking-tight lg:w-[70vw] md:text-balance text-slate-600 ">
            Our school offers a variety of innovative programs designed to
            foster creativity and critical thinking. We are commited to
            nurturing well-rounded individuals who excel academically and
            socially.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-20">
            {programContent.map((article) => (
              <div className="py-4 md:px-4">
                <div className="">
                  <img
                    src={article.src}
                    alt={article.alt}
                    title={article.alt}
                    loading="lazy"
                    className="rounded-lg lg:h-[11.5rem] w-full"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-xl text-center pt-4 text-zinc-800 tracking-tight">
                    {article.title}
                  </h3>
                  <p className="text-center text-zinc-700 tracking-tight pt-2 text-md">
                    {article.subtitile}.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;