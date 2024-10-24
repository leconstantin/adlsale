import React from "react";
import History from "../sections/about/history";
import People from "../sections/about/peolpe";
import Award from "../sections/about/award";
import Mission from "../sections/about/mission";
import Timeline from "../sections/about/timeline";
import Goals from "../sections/about/goals";
const About = () => {
  return (
    <>
      <main className="">
        {/* about */}
        <History />

        {/* people */}
        <People />
        <hr />
        {/* awards */}
        <Award />

        {/* mission,vision */}
        <Mission />

        {/* timeline */}
        <Timeline />

        {/* goals */}
        <Goals />
      </main>
    </>
  );
};

export default About;
