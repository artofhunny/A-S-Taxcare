import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

const AchievementsSection = () => {
  const [showCounters, setShowCounters] = useState(false);

  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCounters(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const section = document.getElementById("achievements-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="achievements-section"
      className="py-10 px-3 md:px-8 lg:px-10 flex flex-col items-center bg-emerald-950"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-200">Our Achievements</h2>
      <div className="flex gap-5 lg:flex-nowrap flex-wrap justify-center text-center">
        {/* Happy Clients */}
        <div className="shadow-xl bg-emerald-900 w-36 lg:w-44 md:w-40   text-white p-5 rounded">
          {showCounters && (
            <CountUp end={500} duration={3} className="xl:text-5xl text-3xl font-bold" />
          )}
          <p className=" mt-2">Happy Clients</p>
        </div>
        {/* Years of Experience */}
        <div className="shadow-xl bg-emerald-900 w-36 lg:w-44 md:w-40   text-white p-5 rounded">
          {showCounters && (
            <CountUp end={6} duration={3} className="xl:text-5xl text-3xl font-bold" />
          )}
          <p className=" mt-2">Years of Experience</p>
        </div>
        {/* Projects Completed */}
        <div className="shadow-xl bg-emerald-900 w-36 lg:w-44 md:w-40   text-white p-5 rounded">
          {showCounters && (
            <CountUp end={300} duration={3} className="xl:text-5xl text-3xl font-bold" />
          )}
          <p className=" mt-2">Projects Completed</p>
        </div>
        {/* GST Applied */}
        <div className="shadow-xl bg-emerald-900 w-36 lg:w-44 md:w-40   text-white p-5 rounded">
          {showCounters && (
            <CountUp end={400} duration={3} className="xl:text-5xl text-3xl font-bold" />
          )}
          <p className=" mt-2">GST Applied</p>
        </div>
        {/* Income Tax Return */}
        <div className="shadow-xl bg-emerald-900 w-36 lg:w-44 md:w-40   text-white p-5 rounded">
          {showCounters && (
            <CountUp end={975} duration={3} className="xl:text-5xl text-3xl font-bold" />
          )}
          <p className=" mt-2">Income Tax Return</p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
