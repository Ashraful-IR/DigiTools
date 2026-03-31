import React from "react";
import heroImg from "../../../assets/banner.png";
import { RxResume } from "react-icons/rx";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between items-center gap-5 mt-20 container mx-auto lg:flex-row-reverse">
      <img src={heroImg} className="max-w-sm rounded-lg" />
      <div className="flex flex-col justify-between items-start gap-4 px-5 sm:px-0">
        <div className="bg-[#e1e7ff] text-amber-50 rounded-full px-3 py-1 flex justify-between items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-purple-300 items-center flex justify-center">
            <div className="h-2 w-2 rounded-full bg-purple-500 items-center flex justify-center">
              <div className="h-1 w-1 rounded-full bg-purple-900"></div>
            </div>
          </div>
          <p className="bg-linear-to-r from-blue-900  to-purple-600 bg-clip-text text-transparent text-sm font-medium">
            New: AI-Powered Tools Available
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="py-6">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
        </div>
        <div className="flex gap-5 mt-3">
          <button className="btn border rounded-full bg-linear-to-r from-blue-900  to-purple-600 text-amber-50 ">
            Explore Products
          </button>
          <button className="btn border border-purple-600 rounded-full">
            <p className=" flex justify-between items-center gap-3 bg-linear-to-r from-blue-900  to-purple-600 bg-clip-text text-transparent ">
              <RxResume className="text-purple-600 text-2xl" /> Watch Demo
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
