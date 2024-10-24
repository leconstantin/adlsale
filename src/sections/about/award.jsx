import React from "react";

const Award = () => {
  return (
    <section className=" px-6 lg:px-14 pt-10 pb-20">
      <div className="md:flex lg:flex-row-reverse  gap-y-10 pt-20 md:gap-x-5 lg:gap-x-16">
        <div className="pb-10 md:pb-0">
          <h2 className="text-3xl font-bold">
            Celebrating
            <span className="text-blue-400"> Excellence :</span> Our School's
            <span className="text-blue-400"> Achievements</span>
          </h2>
          <p className="py-14 font-medium leading-8 text-lg">
            We are proud to announce that our school has been recognized for its
            commitment to academic excellence, creativity, and community
            involvement. Here are some of the awards we have received:
          </p>
          <ol className="flex flex-col gap-5">
            <li>
              <mark>Academic Achievement Award :</mark>
              <p className="text-zinc-700 py-2">
                Recognizing our students' outstanding performance in state
                assessments.
              </p>
            </li>
            <li>
              <mark>Excellence in Arts Award :</mark>
              <p className="text-zinc-700 py-2">
                Celebrating our talented students in visual arts, music, and
                performing arts competitions.
              </p>
            </li>
            <li>
              <mark>Community Service Award :</mark>
              <p className="text-zinc-700 py-2">
                Honoring our dedication to giving back through various service
                projects and initiatives.
              </p>
            </li>
            <li>
              <mark>STEM Innovation Award :</mark>
              <p className="text-zinc-700 py-2">
                Acknowledging our efforts in promoting science, technology,
                engineering, and mathematics education.
              </p>
            </li>
          </ol>

          <a
            href="#"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
          >
            Learn more{" "}
            <svg
              class="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        <div className="flex flex-col gap-y-8">
          <img
            src="https://images.stockcake.com/public/9/5/f/95f1a273-383f-4d11-9b7f-c3552dfab866_large/wall-of-achievements-stockcake.jpg"
            alt=""
            className="rounded-lg"
          />
          <img
            src="https://images.stockcake.com/public/5/e/b/5eb2249a-67eb-4605-ad0d-a9066a35cf43_large/champion-trophy-display-stockcake.jpg"
            alt=""
            className="rounded-lg"
          />
          <img
            src="https://images.stockcake.com/public/b/b/a/bbab6337-ce7a-4529-950d-08b28765cbb0_large/trophies-in-sunlight-stockcake.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Award;
