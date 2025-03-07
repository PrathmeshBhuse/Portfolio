import React from "react";
import jobHunter from "../assets/portfolio/Job Hunter.png";

import chatapp from "../assets/portfolio/chatapp.png";
import printify from "../assets/portfolio/printify.png";
import aquaaid from "../assets/portfolio/aquaaid.png";
import ecommerse from "../assets/portfolio/ecommerse.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jobHunter,
    },
    {
      id: 2,
      src: chatapp,
    },
    {
      id: 3,
      src: printify,
    },
    {
      id: 4,
      src: aquaaid,
    },
    {
      id: 5,
      src: ecommerse,
    }
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => window.open('https://vercel.com/prathmesh-bhuses-projects', '_blank')}>
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => window.open('https://github.com/PrathmeshBhuse?tab=repositories', '_blank')}>
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
