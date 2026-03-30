import React from "react";

const Stat = () => {
  return (
    <>
      <div className="mt-10 bg-linear-to-r from-blue-900  to-purple-600  py-10 flex flex-col justify-between items-center gap-5 lg:flex-row">
        <div className=" container mx-auto flex flex-col justify-between items-center gap-5 ">
          <div className="stat-value text-4xl text-amber-50">50K+</div>
          <div className="stat-title text-lg text-amber-100">Active Users</div>
        </div>
        <span className="w-1 h-20 bg-amber-50"></span>
        <div className=" container mx-auto flex flex-col justify-between items-center gap-5 ">
          <div className="stat-value text-4xl text-amber-50">200+</div>
          <div className="stat-title text-lg text-amber-100">Premium Tools</div>
        </div>
        <span className="w-1 h-20 bg-amber-50"></span>
        <div className=" container mx-auto flex flex-col justify-between items-center gap-5 ">
          <div className="stat-value text-4xl text-amber-50">4.9</div>{" "}
          <div className="stat-title text-lg text-amber-100">Rating</div>
        </div>
      </div>
    </>
  );
};

export default Stat;
