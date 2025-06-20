import React from "react";
import HeroImage from "../assets/heroimage.png";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto  flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-12">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a detail-oriented web developer with expertise in React.js,
            Node.js, SQL, and ASP.NET. I have successfully developed various
            full-stack applications, including a real-time chat app, a job
            portal, an Aqua Aid system, and an employee management system. My
            experience spans creating responsive user interfaces, handling
            backend logic, and implementing secure user authentication. I am
            passionate about building clean, efficient, and user-friendly web
            solutions."
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-[1500px] h-[610px] ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
