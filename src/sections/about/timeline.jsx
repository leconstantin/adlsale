import React from "react";

const Timeline = () => {
  return (
    <section className="px-6 md:px-14 pt-10 pb-20 ">
      <div className="flex flex-col items-center   justify-center pb-12">
        <p className="text-lg text-gray-500 ">Principals</p>
        <h2 className="font-bold text-4xl lg:w-1/2 text-center pt-4">
          Who Led
          <span className="text-blue-400"> Our Community</span>
        </h2>
        <p className="pt-4 text-center w-[70vw] text-balance text-slate-600 ">
          Our school was led by different leaders in different time.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <ol class="relative  border-s border-gray-200 dark:border-gray-700">
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white"></div>
            <time class="mb-1 text-sm bg-yellow-400 px-2 py-1 rounded-lg font-medium leading-none text-gray-600 ">
              Now
            </time>
            <h3 class="text-lg font-semibold text-gray-900 pt-3">
              MUGISHA Safari
            </h3>
          </li>
          <li class="mb-10 ms-4">
            <div class="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on December 2, 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 ">MUCYO Derrick</h3>
          </li>

          <li class="ms-4 mb-10">
            <div class="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on July 2, 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 ">HIRWA Bonheur</h3>
          </li>

          <li class="ms-4 mb-10">
            <div class="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on July 2, 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 ">HIRWA Leo</h3>
          </li>

          <li class="ms-4 mb-10">
            <div class="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on July 2, 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 ">Hope Jimy</h3>
          </li>

          <li class="ms-4">
            <div class="absolute w-3 h-3 bg-blue-400 rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Released on July 2, 2021
            </time>
            <h3 class="text-lg font-semibold text-gray-900 ">GASANA Byiza</h3>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Timeline;
