import React from "react";

const About = () => {
  const [theme] = React.useState(localStorage.getItem("theme") || "light");

  return (
    <div
      className={`${
        theme === "dark" ? "dark-mode bg-gray-900 text-white" : "bg-gray-100 text-black"
      } p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12`}
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
        About Us
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
        Welcome to our About page! 
      </p>
    </div>
  );
};

export default About;
