import React from "react";
import Imag from "../assets/sample.jpeg";

export default function About() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col bg-gray-50 px-4 my-72">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full space-y-8 md:space-y-0 md:space-x-16">
        {/* About Section */}
        <div className="flex flex-col items-center md:items-start justify-center w-full md:w-[60%] space-y-8">
          <h1 className="text-4xl font-extrabold text-gray-800 mt-16 mb-4 hover:text-gray-500 transition duration-300 transform hover:scale-105 text-center md:text-left">
            About Me
          </h1>
          <p className="text-3xl text-amber-500 text-center md:text-left m-10 max-w-2xl opacity-90 hover:opacity-100 transition duration-500 ease-in-out">
            Hi! I'm Yordanos, a passionate developer dedicated to bringing
            unique digital experiences to life. My journey is all about
            learning, coding, and building amazing things that people love.
          </p>

          {/* Extra Info */}
          <div className="text-left space-y-4 flex flex-col justify-evenly">
            <h2 className="text-xl font-semibold text-indigo-600">
              Skills & Passion
            </h2>
            <p className="text-gray-600 text-2xl">
              From React and JavaScript to full-stack development, I’m always
              ready to take on new challenges and create innovative projects.
            </p>

            <h2 className="text-xl font-semibold text-indigo-600">
              Current Focus
            </h2>
            <p className="text-gray-600 text-2xl">
              Right now, I'm honing my skills in React, Node.js, and Express to
              build scalable and responsive web apps. I'm also exploring new
              technologies like AI and TypeScript!
            </p>
          </div>
        </div>

        {/* Photo */}
        <div className="relative group mt-12 md:mt-0 md:w-[40%]">
          <img
            src={Imag}
            alt="Yordanos"
            className="w-full h-auto md:w-80 md:h-96 object-cover rounded-lg shadow-lg border-4 border-amber-600 opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition duration-500 ease-in-out"
          />
          {/* Hover effect: Show the photo with a slight zoom */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-600 opacity-50 group-hover:opacity-70 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
}
