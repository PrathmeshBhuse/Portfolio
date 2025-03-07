import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a passionate and detail-oriented web developer with expertise in
          React.js, Node.js, SQL, and ASP.NET. I have successfully developed and
          delivered multiple full-stack applications, including a real-time chat
          app, a job portal, an Aqua Aid system, and an employee management
          system. My technical skills include building responsive user
          interfaces, managing complex backend logic, and ensuring secure user
          authentication. I enjoy transforming ideas into functional and
          user-friendly web solutions while maintaining clean and efficient
          code.
        </p>

        <br />

        <p className="text-xl">
          I am constantly eager to learn and stay updated with the latest
          technologies. My approach to development is both analytical and
          creative, allowing me to tackle challenges and deliver high-quality
          solutions. I am passionate about creating seamless digital experiences
          and am always open to new opportunities where I can contribute, grow,
          and make a positive impact."
        </p>
      </div>
    </div>
  );
};

export default About;
