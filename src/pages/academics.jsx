import React from "react";
import { academicFaqs } from "../data/academics";

const Academics = () => {
  return (
    <>
      <main>
        {/* Buttons */}
        <section className="px-6 lg:px-14 pt-10 pb-20">
          <div className=" gap-x-10 gap-y-5 grid grid-cols-2  lg:grid-cols-4">
            <button>
              <a
                href="#curriculum"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Curriculum Overview
              </a>
            </button>

            <button>
              <a
                href="#support"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Support for All Learners
              </a>
            </button>

            <button>
              <a
                href="#excurriculum"
                class="inline-flex items-center px-2 md:px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Extracurricular Academic Enrichment
              </a>
            </button>

            <button>
              <a
                href="#assesment"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Assessment and Evaluation
              </a>
            </button>

            <button>
              <a
                href="#calendar"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Academic Calendar
              </a>
            </button>

            <button>
              <a
                href="#educator"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Meet Our Educators
              </a>
            </button>

            <button>
              <a
                href="#student"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Student Success Stories
              </a>
            </button>
            <button>
              <a
                href="#faqs"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
              >
                Frequently Asked Questions (FAQs)
              </a>
            </button>
          </div>
        </section>

        <section className=" pt-10 pb-20" id="curriculum">
          <div className="flex flex-col items-center  justify-center pt-16 px-4 lg:px-14">
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              <span className="text-blue-400">Curriculum </span>
              Overview
            </h2>
            <p className="pt-6 text-center lg:w-[70vw] lg:text-balance text-gray-600 ">
              Our educational philosophy centers around a student-centered
              approach, emphasizing critical thinking, creativity, and
              collaboration. We strive to create a learning environment that
              encourages exploration and discovery.
            </p>
          </div>

          <div>
            <div className="px-6 lg:px-14 pt-10 pb-20 hover:bg-zinc-50 rounded-xl">
              <h3 className="text-blue-400 font-medium text-2xl">Nursery</h3>

              <div className="md:flex md:gap-x-5 lg:gap-x-16 gap-y-10 pt-4">
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <p className="font-medium text-gray-700 leading-8 text-lg py-4">
                    <span className="text-blue-400">Aim : </span>
                    Nurturing Young Minds
                  </p>
                  <p className="font-medium text-gray-700 leading-8 text-lg">
                    Our nursery program is designed for children aged 3 to 5
                    years, providing a warm and welcoming environment where
                    early learning begins. We focus on holistic development
                    through play-based learning, fostering social, emotional,
                    physical, and cognitive skills. Our experienced educators
                    encourage exploration and creativity, helping children build
                    a strong foundation for lifelong learning
                  </p>
                </div>
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <h2 className="py-4 font-medium text-blue-400 leading-8 text-lg">
                    Activities include :
                  </h2>
                  <ul className="font-medium text-gray-700 leading-8 text-lg flex flex-col gap-4">
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Creative Play: Engaging in imaginative play to enhance
                        social skills and creativity
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Literacy and Numeracy: Introduction to letters, numbers,
                        and basic concepts through fun activities.
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Arts and Crafts: Encouraging self-expression through
                        various art mediums.
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Outdoor Activities: Promoting physical health and
                        teamwork through guided outdoor play.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-6 lg:px-14 pt-10 pb-20 hover:bg-zinc-50 rounded-xl">
              <h3 className="text-blue-400 font-medium text-2xl">Primary</h3>

              <div className="md:flex md:gap-x-5 lg:gap-x-16 gap-y-10 pt-4">
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <p className="font-medium text-gray-700 leading-8 text-lg py-4">
                    <span className="text-blue-400">Aim : </span>
                    Nurturing Young Minds
                  </p>
                  <p className="font-medium text-gray-700 leading-8 text-lg">
                    Our nursery program is designed for children aged 3 to 5
                    years, providing a warm and welcoming environment where
                    early learning begins. We focus on holistic development
                    through play-based learning, fostering social, emotional,
                    physical, and cognitive skills. Our experienced educators
                    encourage exploration and creativity, helping children build
                    a strong foundation for lifelong learning
                  </p>
                </div>
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <h2 className="py-4 font-medium text-blue-400 leading-8 text-lg">
                    Activities include :
                  </h2>
                  <ul className="font-medium text-gray-700 leading-8 text-lg flex flex-col gap-4">
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Creative Play: Engaging in imaginative play to enhance
                        social skills and creativity
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Literacy and Numeracy: Introduction to letters, numbers,
                        and basic concepts through fun activities.
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Arts and Crafts: Encouraging self-expression through
                        various art mediums.
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Outdoor Activities: Promoting physical health and
                        teamwork through guided outdoor play.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-6 lg:px-14 pt-10 pb-20 hover:bg-zinc-50 rounded-xl">
              <h3 className="text-blue-400 font-medium text-2xl">Secondary</h3>

              <div className="md:flex md:gap-x-5 lg:gap-x-16 gap-y-10 pt-4">
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <p className="font-medium text-gray-700 leading-8 text-lg py-4">
                    <span className="text-blue-400">Aim : </span>
                    Nurturing Young Minds
                  </p>
                  <p className="font-medium text-gray-700 leading-8 text-lg">
                    Our nursery program is designed for children aged 3 to 5
                    years, providing a warm and welcoming environment where
                    early learning begins. We focus on holistic development
                    through play-based learning, fostering social, emotional,
                    physical, and cognitive skills. Our experienced educators
                    encourage exploration and creativity, helping children build
                    a strong foundation for lifelong learning
                  </p>
                </div>
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <h2 className="py-4 font-medium text-blue-400 leading-8 text-lg">
                    Activities include :
                  </h2>
                  <ul className="font-medium text-gray-700 leading-8 text-lg flex flex-col gap-4">
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Creative Play: Engaging in imaginative play to enhance
                        social skills and creativity
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Literacy and Numeracy: Introduction to letters, numbers,
                        and basic concepts through fun activities.
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Arts and Crafts: Encouraging self-expression through
                        various art mediums.
                      </p>
                    </li>
                    <li className="flex items-center justify-center gap-2">
                      <mark className="h-4 w-4 inline-flex mr-2 rounded-full bg-yellow-200"></mark>
                      <p className="tracking-tight leading-7">
                        Outdoor Activities: Promoting physical health and
                        teamwork through guided outdoor play.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="hover:bg-sky-50 px-6 lg:px-14 pt-10 pb-20 rounded-xl">
              <h3 className="text-sky-400 font-medium text-2xl">Primary</h3>
              <div className="md:flex lg:flex-row-reverse md:gap-x-5 lg:gap-x-16 gap-y-10 pt-20">
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <p className="font-medium text-gray-700 leading-8 text-lg py-4">
                    <span className="text-sky-500">Content Example: </span>
                    Building Strong Foundation
                  </p>
                  <p className="font-medium text-gray-700 leading-8 text-lg">
                    Our primary program, catering to students aged 6 to 11,
                    emphasizes a balanced curriculum that nurtures academic and
                    personal growth. We strive to instill a love for learning
                    while developing critical thinking and problem-solving
                    skills.
                  </p>
                </div>
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <h2 className="py-4 font-medium text-sky-500 leading-8 text-lg">
                    Key features include:
                  </h2>
                  <ul className="font-medium text-gray-700 leading-8 text-lg">
                    <li>
                      ✔️ Core Subjects: Comprehensive instruction in
                      Mathematics, Science, Language Arts, and Social Studies,
                      aligned with educational standards.
                    </li>
                    <li>
                      ✔️ Hands-On Learning: Incorporating projects and
                      interactive lessons to make learning engaging and
                      relevant.
                    </li>
                    <li>
                      ✔️ Social Development: Emphasizing collaboration and
                      communication through group activities and discussions.
                    </li>
                    <li>
                      ✔️ Character Education: Fostering values such as respect,
                      responsibility, and empathy through dedicated programs.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="px-6 lg:px-14 pt-10 pb-20 hover:bg-zinc-50 rounded-xl">
              <h3 className="text-sky-400 font-medium text-2xl">Secondary</h3>
              <div className="md:flex lg:flex-row-reverse md:gap-x-5 lg:gap-x-16 gap-y-10 pt-20">
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <p className="font-medium text-gray-700 leading-8 text-lg py-4">
                    <span className="text-sky-500">Content Example: </span>
                    Preparing for the Future
                  </p>
                  <p className="font-medium text-gray-700 leading-8 text-lg">
                    Our secondary program, for students aged 12 to 18, focuses
                    on academic rigor and personal development, preparing
                    students for higher education and the workforce. We offer a
                    wide range of courses and extracurricular activities to
                    cater to diverse interests and aspirations.
                  </p>
                </div>
                <div className="md:w-1/2 pb-10  md:pb-0">
                  <h2 className="py-4 font-medium text-sky-500 leading-8 text-lg">
                    Highlights include:
                  </h2>
                  <ul className="font-medium text-gray-700 leading-8 text-lg">
                    <li>
                      ✔️ Rigorous Curriculum: Advanced courses in Mathematics,
                      Science, Language Arts, Social Studies, and Electives such
                      as Arts and Technology.
                    </li>
                    <li>
                      ✔️ Advanced Placement (AP) Options: Opportunities to take
                      AP courses for college credit, helping students gain a
                      competitive edge.
                    </li>
                    <li>
                      ✔️Extracurricular Activities: A variety of clubs, sports,
                      and volunteer opportunities to promote leadership and
                      teamwork.
                    </li>
                    <li>
                      ✔️ College and Career Counseling: Dedicated support for
                      college applications, career exploration, and skill
                      development.
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section className="px-6 lg:px-14 pt-10 pb-20" id="support">
          <div
            className="flex flex-col items-center justify-center "
            id="support"
          >
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              Support for All Learners
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-balance text-slate-600 ">
              "we believe that every student deserves the opportunity to
              succeed, regardless of their individual challenges or backgrounds.
              Our comprehensive support programs are designed to foster an
              inclusive environment where all learners can thrive."
            </p>
            <p className="pt-10 text-center w-[70vw] text-balance text-slate-600">
              Here are some key components of our support services:
            </p>
          </div>

          <div className="flex gap-5 flex-wrap items-center justify-center px-10 lg:px-0 py-16">
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-sky-300 hover:bg-sky-400"></div>
              Special Education Services
            </div>

            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-blue-600"></div>
              English Language Learning (ELL)
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-yellow-200"></div>
              Academic Support Services
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-indigo-400"></div>
              Counseling and Guidance
            </div>
            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-green-400"></div>
              Parental Involvement
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-10">
            <div className="flex flex-col items-center">
              <div className="bg-sky-300 hover:bg-sky-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Individualized Education Plans (IEPs)
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-sky-300 hover:bg-sky-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Collaborative Teaching
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-sky-300 hover:bg-sky-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
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
                    d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Skill Development Programs
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 hover:bg-blue-600 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.133 12.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V3.1a1 1 0 0 0-2 0v2.364a.955.955 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C6.867 15.018 5 15.614 5 16.807 5 17.4 5 18 5.538 18h12.924C19 18 19 17.4 19 16.807c0-1.193-1.867-1.789-1.867-4.175ZM6 6a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 6 6Zm-2 4H3a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 18 6Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM8.823 19a3.453 3.453 0 0 0 6.354 0H8.823Z" />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Dedicated ELL Instruction
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 hover:bg-blue-600 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
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
                    d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Cultural Enrichment Activities
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-200 hover:bg-yellow-300 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Tutoring Programs
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-200 hover:bg-yellow-300 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Homework Clubs
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-yellow-200 hover:bg-yellow-300 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.586 2.586A2 2 0 0 1 11 2h2a2 2 0 0 1 2 2v.089l.473.196.063-.063a2.002 2.002 0 0 1 2.828 0l1.414 1.414a2 2 0 0 1 0 2.827l-.063.064.196.473H20a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.089l-.196.473.063.063a2.002 2.002 0 0 1 0 2.828l-1.414 1.414a2 2 0 0 1-2.828 0l-.063-.063-.473.196V20a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-.089l-.473-.196-.063.063a2.002 2.002 0 0 1-2.828 0l-1.414-1.414a2 2 0 0 1 0-2.827l.063-.064L4.089 15H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h.09l.195-.473-.063-.063a2 2 0 0 1 0-2.828l1.414-1.414a2 2 0 0 1 2.827 0l.064.063L9 4.089V4a2 2 0 0 1 .586-1.414ZM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Learning Resources
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-300 hover:bg-indigo-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                One-on-One Counseling
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-indigo-300 hover:bg-indigo-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Workshops and Group Sessions
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-300 hover:bg-green-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-10 h-10 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M17 10v1.126c.367.095.714.24 1.032.428l.796-.797 1.415 1.415-.797.796c.188.318.333.665.428 1.032H21v2h-1.126c-.095.367-.24.714-.428 1.032l.797.796-1.415 1.415-.796-.797a3.979 3.979 0 0 1-1.032.428V20h-2v-1.126a3.977 3.977 0 0 1-1.032-.428l-.796.797-1.415-1.415.797-.796A3.975 3.975 0 0 1 12.126 16H11v-2h1.126c.095-.367.24-.714.428-1.032l-.797-.796 1.415-1.415.796.797A3.977 3.977 0 0 1 15 11.126V10h2Zm.406 3.578.016.016c.354.358.574.85.578 1.392v.028a2 2 0 0 1-3.409 1.406l-.01-.012a2 2 0 0 1 2.826-2.83ZM5 8a4 4 0 1 1 7.938.703 7.029 7.029 0 0 0-3.235 3.235A4 4 0 0 1 5 8Zm4.29 5H7a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h6.101A6.979 6.979 0 0 1 9 15c0-.695.101-1.366.29-2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Workshops for Parents
                {/* <span>
                Regular sessions that provide parents with tools and strategies to support their children's learning at home.
                </span> */}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-green-300 hover:bg-green-400 h-20 w-20 flex items-center justify-center rounded-full">
                <svg
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1.707.707L9.414 13H15a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8.023 17.215c.033-.03.066-.062.098-.094L10.243 15H15a3 3 0 0 0 3-3V8h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1v2a1 1 0 0 1-1.707.707L14.586 18H9a1 1 0 0 1-.977-.785Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span className="pt-4 text-center text-balance text-slate-600 ">
                Open Communication
              </span>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-14 pt-10 pb-20" id="excurriculum">
          <div className="flex flex-col items-center  justify-center pt-16 px-14">
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              Extracurricular Academic Enrichment
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-slate-600 ">
              Exploring Knowledge Beyond the Classroom
            </p>
          </div>
        </section>

        <section className=" px-6 lg:px-14 pt-10 pb-20" id="assesment">
          <div className="flex flex-col items-center  justify-center pt-16 px-14">
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              Assessment and Evaluation
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-slate-600 ">
              Guiding Learning with Insightful Assessments
            </p>
          </div>
        </section>

        <section className=" px-6 lg:px-14 pt-10 pb-20" id="calendar">
          <div className="flex flex-col items-center  justify-center pt-16 px-14">
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              Academic Calendar
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-slate-600 ">
              Planning for Success: Important Dates Ahead
            </p>
          </div>
        </section>

        <section className=" px-6 lg:px-14 pt-10 pb-20" id="educator">
          <div className="flex flex-col items-center  justify-center pt-16 px-14">
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              Meet Our Educators
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-slate-600 ">
              Passionate Educators Committed to Excellence
            </p>
          </div>
        </section>

        <section className=" px-6 lg:px-14 pt-10 pb-20" id="student">
          <div className="flex flex-col items-center  justify-center pt-16 px-14">
            <h2 className="font-bold text-3xl lg:text-4xl lg:w-1/2 text-center pt-4">
              Student Success Stories
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-slate-600 ">
              From Dreams to Reality: Success Stories
            </p>
          </div>
        </section>

        <section id="faqs" className="px-6 md:px-14 pt-20 pb-24">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-x-7 gap-y-16">
            <div className="md:w-[90%] sm:w-full">
              <p className="text-base font-semibold text-indigo-500">
                Frequently asked questions 🙋🏽
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800  xl:text-4xl xl:leading-[3.5rem]">
                Understanding Our
                <span className="text-blue-400 block"> Academic Framework</span>
              </h2>
            </div>
            <div className="min-w-[50%] sm:w-full">
              <h2 className=" text-sm font-semibold leading-7 text-slate-400">
                General
              </h2>

              <dl className="mt-2 divide-y divide-slate-100 ">
                {academicFaqs.map((faq) => (
                  <details
                    key={faq.id}
                    className="group py-4 marker:content-[&#39;&#39;]"
                  >
                    <summary className="flex w-full cursor-pointer select-none justify-between items-center gap-x-3 lg:gap-x-3 md:gap-0 text-left text-base font-semibold leading-7 text-slate-900 group-open:text-indigo-600 [&amp;::-webkit-details-marker]:hidden">
                      <h4>{faq.question}</h4>

                      <svg
                        class="ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-700  group-open:stroke-indigo-500"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 12H6"></path>
                        <path className="group-open:hidden" d="M12 6v12"></path>
                      </svg>
                    </summary>
                    <div>
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Academics;
