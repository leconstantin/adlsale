import React from "react";
import { adminPeolpe } from "../../data/about";

const Peolpe = () => {
  return (
    <section className="px-6 md:px-14 pt-10 pb-20">
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg text-gray-500 ">Dedicated</p>
        <h2 className="font-bold text-4xl w-1/2 text-center pt-4 tracking-tight">
          Our
          <span className="text-blue-400"> Team</span>
        </h2>
        <p className="pt-4 text-center w-[70vw] text-balance text-slate-600 ">
          Meet the passionate individuals behind our school.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 pt-20">
        {adminPeolpe.map((ppl) => (
          <div
            className="flex flex-col items-center justify-center"
            key={ppl.id}
          >
            <div>
              <img
                src={ppl.imgUrl}
                title={ppl.name}
                alt={ppl.name}
                loading="lazy"
                className="h-24 w-24 rounded-full bg-zinc-100 object-cover"
              />
            </div>
            <a className="flex flex-col pt-6 pb-2">
              <span className="font-semibold text-lg text-center text-gray-800 first:first-letter:uppercase">
                {ppl.name}
              </span>
              <span
                className={`text-slate-800 font-medium text-center ${ppl.color}`}
              >
                {ppl.title}
              </span>
            </a>
            <div className="">
              <p className="text-center pt-2 text-zinc-600 tracking-tight font-medium leading-6">
                {ppl.summary}
              </p>

              <div className="flex justify-center mt-5 gap-4">
                <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                  <a href={ppl.fbLink} target="_blank">
                    <img
                      src="/images/fb.svg"
                      alt="facebook"
                      loading="lazy"
                      title="facebook"
                      className="w-4 h-4 text-gray-800"
                    />
                  </a>
                </div>

                <div className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                  <a href={ppl.whatsappLink} target="_blank">
                    <img
                      src="/images/whatsapp.svg"
                      alt="whatsapp"
                      loading="lazy"
                      title="whatsapp"
                      className="w-4 h-4 text-gray-800"
                    />
                  </a>
                </div>

                <div class="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all">
                  <a href={ppl.twitterLink} target="_blank">
                    <img
                      src="/images/xtwitter.svg"
                      alt="twitter"
                      loading="lazy"
                      title="twitter"
                      className="w-4 h-4 text-gray-800"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center pt-16">
        <p className="font-semibold text-xl">We're hiring</p>
        <p className="text-gray-500 pt-6 pb-10">
          Join our dynamic team and make a difference.
        </p>
        <button className="bg-slate-900 hover:bg-slate-700 text-white py-3 px-5 rounded-xl cursor-not-allowed">
          <abbr title="Not now hiring please visit us later">
            Open positions
          </abbr>
        </button>
      </div>
    </section>
  );
};

export default Peolpe;
