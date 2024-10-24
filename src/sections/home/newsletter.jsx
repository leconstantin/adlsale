import React from "react";
import { newsletters } from "../../data/home";

const Newsletter = () => {
  return (
    <section className="px-6 md:px-14 pt-10">
      <div className="flex flex-wrap lg:flex-nowrap gap-10 pb-20">
        {newsletters.map((le) => (
          <div className="lg:w-1/2 sm:w-full">
            <h2 class="mb-6 font-bold text-3xl text-blue-400">{le.title}</h2>
            <p className="pb-4 text-xl text-slate-800">{le.subtitile}</p>
            <p className="text-md leading-7 text-gray-700 text-xl">
              {le.subsub}
            </p>
          </div>
        ))}

        <div className="lg:w-1/2 pt-10 sm:w-full">
          <div className=" bg-blue-300 p-2 rounded-md">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="First Name"
              className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500"
            />
            {/* <input type="text" placeholder="First Name" /> */}
          </div>
          <div className="my-4 bg-blue-300 p-2 rounded-md">
            <label htmlFor="email"></label>
            {/* <input type="text" placeholder="Email*" /> */}
            <input
              type="text"
              placeholder="orgaization@gmail.com"
              className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500"
            />
          </div>
          <div>
            <p className="text-gray-600 leading-5">
              By signing up, you'll receive communications from Academie. for
              more information, see our
              <a
                href=""
                className="text-sky-400 transition duration-150 hover:underline px-1"
              >
                {" "}
                contact info
              </a>
              .
            </p>
          </div>
          <div className="mt-6 bg-blue-300 p-2 flex justify-center items-center rounded-lg">
            <button className="text-white uppercase font-semibold text-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
