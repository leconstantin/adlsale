import React from "react";

const Admission = () => {
  return (
    <>
      <main>
        {/* programs */}
        <section className="px-6 lg:px-10 pt-10 pb-20">
          <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center lg:justify-start  px-4">
              <p className="text-lg text-gray-500 ">Welcome</p>

              <h2 className="font-bold text-4xl lg:w-1/2 text-center   pt-4">
                Join Our Community of Lifelong Learners
              </h2>
              <p className="pt-4  lg:w-[70vw] lg:text-balance text-center text-slate-600 ">
                Our admission process is designed to be straightforwards and
                welcoming. We invite you to explore the criteria and documents
                needed to apply for a place at our school.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 pt-20">
                <div className="py-4 w-full space-y-5">
                  <div className="md:h-36 py-4">
                    <h3 className="font-medium text-xl text-center pt-4">
                      Admission Criteria and Requirements
                    </h3>
                    <p className="text-center pt-2 text-md">
                      We seek motivated students who are eager to learn.
                    </p>
                  </div>
                  <div className="">
                    <ol className="flex flex-col gap-5">
                      <li>
                        <mark>Application Form :</mark>
                        <p className="text-zinc-700 py-2">
                          Complete a school-specific application form, often
                          available online.
                        </p>
                      </li>
                      <li>
                        <mark>Academic Records :</mark>
                        <p className="text-zinc-700 py-2">
                          Provide transcripts or report cards from previous
                          schools, showing grades and courses taken.
                        </p>
                      </li>
                      <li>
                        <mark>tandardized Test Scores :</mark>
                        <p className="text-zinc-700 py-2">
                          Some schools may require scores from standardized
                          tests (e.g., SAT, ACT, GRE) depending on the
                          educational level.
                        </p>
                      </li>
                      <li>
                        <mark>Letters of Recommendation :</mark>
                        <p className="text-zinc-700 py-2">
                          Request letters from teachers, counselors, or other
                          professionals who can speak to your abilities and
                          character.
                        </p>
                      </li>
                      <li>
                        <mark>Interview :</mark>
                        <p className="text-zinc-700 py-2">
                          Some schools may require an interview as part of the
                          selection process.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="py-4 w-full space-y-5">
                  <div className="md:h-36 py-4">
                    <h3 className="font-medium text-xl text-center pt-4">
                      Essential Documents for Admision
                    </h3>
                    <p className="text-center pt-2 text-md">
                      Please prepare your transcript and identification
                      documents.
                    </p>
                  </div>
                  <div className="">
                    <ol className="flex flex-col gap-5">
                      <li>
                        <mark className="bg-teal-400">
                          Transcripts/Report Cards :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Academic records from previous schools, showing grades
                          and courses.
                        </p>
                      </li>
                      <li>
                        <mark className="bg-teal-400">Birth Certificate :</mark>
                        <p className="text-zinc-700 py-2">
                          Proof of age for enrollment, particularly for
                          elementary schools.
                        </p>
                      </li>
                      <li>
                        <mark className="bg-teal-400">
                          Immunization Records :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Documentation of vaccinations, often required for
                          health compliance.
                        </p>
                      </li>
                      <li>
                        <mark className="bg-teal-400">
                          Letters of Recommendation :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Request letters from teachers, counselors, or other
                          professionals who can speak to your abilities and
                          character.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="py-4 w-full space-y-5">
                  <div className="md:h-36 py-4">
                    <h3 className="font-medium text-xl text-center pt-4">
                      Important Dates to Remember
                    </h3>
                    <p className="text-center pt-2 text-md">
                      Mark your calendar for our application deadlines.
                    </p>
                  </div>
                  <div className="">
                    <ol className="flex flex-col gap-5">
                      <li>
                        <mark className="bg-orange-400">
                          Research Period (6–12 months before applying) :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Start researching schools and programs Or Attend open
                          houses or information sessions.
                        </p>
                      </li>
                      <li>
                        <mark className="bg-orange-400">
                          Application Preparation :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Prepare documents (transcripts, letters of
                          recommendation). Write personal statements or essays.
                          Schedule standardized tests if required.
                        </p>
                      </li>
                      <li>
                        <mark className="bg-orange-400">
                          Application Submission Deadlines :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Early Decision/Early Action: Typically due in November
                          for fall admission. Regular Admission: Usually due
                          between December and March. Rolling Admissions: Check
                          individual schools for specific dates
                        </p>
                      </li>
                      <li>
                        <mark className="bg-orange-400">Interviews :</mark>
                        <p className="text-zinc-700 py-2">
                          Schedule interviews shortly after submitting your
                          application, usually between November and April.
                        </p>
                      </li>
                      <li>
                        <mark className="bg-orange-400">
                          Acceptance Notifications :
                        </mark>
                        <p className="text-zinc-700 py-2">
                          Early Decision: Typically in December. Regular
                          Admission: Usually between March and April.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-10 pt-10 pb-20">
          <div className="flex flex-wrap lg:flex-nowrap justify-between">
            <div className="flex w-full flex-col lg:px-4">
              <p className="text-lg text-zinc-500 ">Apply</p>
              <h2 className="font-semibold text-zinc-800 text-4xl tracking-tight  pt-4">
                Additional Notes
              </h2>
              <button className="flex pt-10">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700"
                >
                  Ask
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
              </button>
            </div>

            <div className="flex w-full flex-col">
              <div>
                <h2 className="font-medium text-xl pt-4">
                  Check Individual School Calendars:
                </h2>
                <p className="pt-2 text-md text-zinc-700">
                  Each school may have its own specific dates and deadlines, so
                  always refer to their official websites.
                </p>
              </div>
              <div>
                <h2 className="font-medium text-xl pt-4">
                  Prepare for Fall Registration:
                </h2>
                <p className="pt-2 text-md text-zinc-700">
                  For those accepted, registration for classes often occurs in
                  late spring or summer..
                </p>
              </div>
              <div>
                <h2 className="font-medium text-xl pt-4">Deadlines</h2>
                <p className="pt-2 text-md text-zinc-700">
                  Keep track of submission deadlines for all documents, as they
                  vary by institution. Always check the specific requirements of
                  the school to ensure you have everything needed for a complete
                  application.
                </p>
              </div>
              <div>
                <h2 className="font-medium text-xl pt-4">
                  Enrollment Confirmation
                </h2>
                <p className="pt-2 text-md text-zinc-700">
                  Confirm your enrollment by May 15 to secure your spot for the
                  fall semester.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-10 pt-10 pb-20">
          <div className="flex flex-col lg:px-4">
            <p className="text-lg text-gray-500 ">Forms</p>
            <h2 className="font-bold text-xl lg:text-4xl lg:w-1/2 text-balance  pt-4">
              Fill Application forms below to be noticed
            </h2>
          </div>
          <div className="flex flex-col overflow-hidden">
            <div className="px-1">
              <div className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-6xl">
                <div className="flex flex-col  gap-y-8 mt-14">
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-x-5 lg:max-w-5xl gap-y-5">
                    <div className="lg:w-full">
                      <label
                        htmlFor="name"
                        className="text-zinc-700 font-medium"
                      >
                        Name
                      </label>
                      <p className="text-zinc-500 py-2 lg:max-w-sm">
                        Enter your full name both first and last name or middle
                        one (if you have it)
                      </p>
                    </div>
                    <div className="lg:w-full">
                      <input
                        type="text"
                        placeholder="academie dela salle"
                        className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center gap-x-5 justify-between lg:max-w-5xl">
                    <div className="lg:w-full">
                      <label
                        htmlFor="name"
                        className="text-zinc-700 font-medium"
                      >
                        Email
                      </label>
                      <p className="text-zinc-500 py-2 lg:max-w-sm">
                        Enter your personal email for easy communicaton (if you
                        don't have it use your parent's email)
                      </p>
                    </div>
                    <div className="lg:w-full">
                      <input
                        type="email"
                        placeholder="youremail@gmail.com"
                        className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5 lg:flex-row lg:items-center gap-x-5 justify-between lg:max-w-5xl">
                    <div className="lg:w-full">
                      <label
                        htmlFor="name"
                        className="text-zinc-700 font-medium"
                      >
                        Gender
                      </label>
                      <p className="text-zinc-500 py-2 lg:max-w-sm">
                        For better accounting process for our school, please
                        choose your gender
                      </p>
                    </div>
                    <div className="lg:w-full accent-blue-400 flex gap-x-4 items-center">
                      <label
                        htmlFor=""
                        className="flex items-center gap-x-3 text-zinc-500"
                      >
                        <div className="h-5 w-5 flex items-center justify-center rounded-full hover:bg-blue-400 bg-slate-50 ring-1 ring-zinc-200">
                          <input type="radio" name="gender" />
                        </div>
                        Boy
                      </label>
                      <label
                        htmlFor=""
                        className="flex items-center gap-x-3 text-zinc-500"
                      >
                        <div className="h-5 w-5 flex items-center justify-center rounded-full hover:bg-blue-400 bg-slate-50 ring-1 ring-zinc-200">
                          <input type="radio" name="gender" />
                        </div>
                        Girl
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-5 lg:flex-row justify-between lg:items-center gap-x-5 lg:max-w-5xl">
                    <div className="lg:w-full">
                      <label
                        htmlFor="name"
                        className="text-zinc-700 font-medium"
                      >
                        Why you chosen to apply on Academie
                      </label>
                      <p className="text-zinc-500 py-2 lg:max-w-sm">
                        In short summary type your answer in provided input (if
                        you don't have it use your parent's email)
                      </p>
                    </div>
                    <div className="lg:w-full">
                      <textarea
                        type="email"
                        placeholder="I chosen to apply because ..."
                        className="block w-full appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none placeholder:text-zinc-500 min-h-28"
                      />
                    </div>
                  </div>
                  <div className="flex lg:flex-row justify-between lg:max-w-5xl lg:gap-x-5">
                    <div className="lg:w-full"></div>
                    <button className="block w-full my-4 appearance-none rounded-md border-0 ring-1 ring-gray-950/10 bg-white px-3 py-2 text-sm text-zinc-950 shadow outline-none hover:text-blue-300 hover:bg-zinc-100 font-semibold">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-14 pt-10 pb-20">
          <div className="flex flex-col items-center  justify-center pt-16">
            <p className="text-lg text-gray-500 ">Connect</p>

            <h2 className="font-bold text-3xl md:text-4xl lg:w-1/2 text-center pt-4">
              Get in touch.
            </h2>
            <p className="pt-4 text-center lg:w-[70vw] text-balance text-zinc-700">
              We're here to assist you with admission inquires.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-10 gap-y-11 pt-16">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-zinc-100 p-4 rounded-full">
                <span>
                  <svg
                    class="w-12 h-12 text-blue-400"
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
                      stroke-width="2"
                      d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                    />
                  </svg>
                </span>
              </div>

              <p className="font-semibold text-3xl text-center pt-4">Email</p>
              <p className="text-center text-balance text-slate-600">
                Reach out to us for any admission questions.
              </p>

              <a
                href=""
                className="text-balance text-blue-400 hover:text-sky-700 hover:underline"
              >
                admission@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-zinc-100 p-4 rounded-full">
                <span>
                  <svg
                    class="w-12 h-12 text-blue-400 "
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
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                </span>
              </div>

              <p className="font-semibold text-3xl w-1/2 text-center pt-4">
                Phone
              </p>
              <p className="text-center text-balance text-slate-600">
                Call us for immediate assistance with your application.
              </p>

              <a
                href=""
                className="text-balance text-blue-400  hover:text-sky-700 hover:underline"
              >
                +250797367637
              </a>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-2">
              <div className="bg-zinc-100 p-4 rounded-full">
                <span>
                  <svg
                    class="w-12 h-12 text-blue-400"
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
                      d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    />
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                    />
                  </svg>
                </span>
              </div>

              <p className="font-semibold text-3xl w-1/2 text-center pt-4">
                Office
              </p>
              <p className="text-center text-balance text-slate-600">
                Visit us for in-person consultations regarding admission.
              </p>

              <a
                href=""
                className="text-balance text-blue-400  hover:text-sky-700 hover:underline"
              >
                Gicumbi - Byumba - Nyamabuye
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Admission;
