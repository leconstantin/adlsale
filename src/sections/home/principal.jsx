import React from "react";
import { principal } from "../../data/home";

const Principal = () => {
  return (
    <section className="px-6 md:px-14 pt-16 pb-20">
      <div className="flex flex-col items-center   justify-center pb-16">
        <p>📢</p>
        <p className="text-lg text-blue-400 ">Principal Message</p>
      </div>
      <div className="relative">
        {principal.map((le) => (
          <figure className="md:flex rounded-md border-0 ring-1 ring-gray-950/10 bg-white shadow p-8 md:p-0">
            <img
              className="md:w-48 md:h-auto md:rounded-none  rounded-md w-full h-56 object-cover mx-auto"
              src={le.imgUrl}
              alt={le.alt}
              width="384"
              height="512"
            />

            <div class="pt-6 md:p-8  md:text-left space-y-4">
              <blockquote>
                <p class="text-lg text-zinc-700">{le.message}</p>
                {/* className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500" */}
              </blockquote>
              <figcaption class="font-medium">
                <div class="text-sky-500 uppercase">{le.name}</div>
                <div class="text-slate-700 py-2">
                  <mark>{le.title}</mark>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Principal;
