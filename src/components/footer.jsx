import React from "react";
import navLinks from "../data/navLinks";
import { Link } from "react-router-dom";
import resource from "../data/resource";
import support from "../data/support";
import footerLinks from "../data/footerLinks";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 px-6 lg:px-10 pt-10 text-white">
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-2 pb-9 pt-5">
        <div className="lg:col-span-2 w-full">
          <h5 className="font-bold uppercase tracking-tight pb-3">
            Academie DLS
          </h5>
          <p className="text-balance leading-5 pr-3">
            We aspire to be a world-leading institution committed to providing
            excellent holistic education to young people. Our focus is on
            nurturing well-rounded individuals who are equipped with the
            knowledge, skills, and values needed to thrive in an ever-changing
            global landscape.
          </p>
        </div>

        <div className=" w-full">
          <h5 className="font-bold uppercase tracking-tight pb-3">
            Quick Links
          </h5>

          <ul className="w-20">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="font-normal  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1"
              >
                <Link to={link.path}>
                  <a href="" className="tracking-tight text-sm">
                    {link.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h5 class="font-bold uppercase tracking-tight pb-3">Resources</h5>

          <ul className="w-40">
            {resource.map((res) => (
              <li
                key={res.id}
                className="font-normal  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1"
              >
                <Link to={res.path}>
                  <a href="" className="tracking-tight text-sm">
                    {res.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h5 className="font-bold uppercase tracking-tight pb-3">Support</h5>
          <ul className="w-40">
            {support.map((sup) => (
              <li
                key={sup.id}
                className="font-normal  text-base transition-[2s] hover:translate-x-2 cursor-pointer pb-1"
              >
                <Link to={sup.path}>
                  <a href="" className=" tracking-tight text-sm">
                    {sup.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <h5 class="font-bold uppercase tracking-tight pb-3">OPEN HOURS</h5>
          <div>
            <p class="text-balance  font-normal leading-5 pb-5">
              Our support available to help you 24 hours a day, seven days a
              week.
            </p>
          </div>
          <ul class="list-unstyled">
            <li class="pb-1 tracking-tight text-sm">
              Monday-Friday: <span>8am to 5pm</span>
            </li>
            <li class="pb-1 tracking-tight text-sm">
              Saturday: <span>10am to 3pm</span>
            </li>
            <li class="pb-1 tracking-tight text-sm">
              Sunday: <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border border-slate-200 mt-4" />

      <div className="flex md:justify-end mt-6 gap-4">
        {footerLinks.map((link) => (
          <div
            className="h-8 w-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-125 transition-all cursor-pointer"
            key={link.id}
          >
            <a href={link.link} target="_blank">
              <img
                src={link.src}
                alt={link.alt}
                title={link.alt}
                loading="lazy"
                className="w-4 h-4 text-gray-800"
              />
            </a>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center py-5">
        <p className="mt-4 text-base text-zinc-200 ">
          © adls.edu, academie dela salle
        </p>
      </div>
    </footer>
  );
};

export default Footer;
