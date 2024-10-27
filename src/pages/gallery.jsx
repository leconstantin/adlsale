import React from "react";
import { galleryStore } from "../data/gallery";

const Gallery = () => {
  return (
    <>
      <main className="">
        <div className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 block h-20"></div>
        {/* photo */}
        {galleryStore.map((article) => (
          <section className="px-6 lg:px-14 pt-10 pb-20" key={article.id}>
            <div className="flex flex-col items-center   justify-center pt-16">
              <h2 className="font-bold text-4xl lg:w-1/2 text-center pt-4">
                {article.h1}
                <span className="text-blue-400"> {article.h2}</span>
              </h2>
              <p className="pt-4 text-center w-[70vw] text-balance text-zinc-500 ">
                {article.p}
              </p>
            </div>

            <div className="pt-20">
              <div class="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {article.gallery.map((pic) => (
                    <div>
                      <img
                        class="h-auto max-w-full rounded-lg bg-zinc-200 hover:bg-zinc-300 hover:scale-105 transition-all min-h-52"
                        src={pic.src}
                        alt={pic.alt}
                        title={pic.alt}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </>
  );
};

export default Gallery;
