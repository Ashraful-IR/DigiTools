import React from "react";

const Explore = () => {
  return (
    <>
      <div className=" bg-linear-to-b from-blue-900  to-purple-600 mt-20">
        <div className="flex flex-col justify-between items-center gap-5 py-10">
          <h2 className="text-[40px] font-extrabold text-center text-[#ffffff] mt-10">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-center text-[#ffffff] text-4 mt-4 ">
            Join thousands of professionals who are already using Digitools to
            work smarter.
            <br />
            Start your free trial today.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-5 mt-3">
            <button className="btn border rounded-full bg-white ">
              <p className="bg-linear-to-r from-blue-900  to-purple-600 bg-clip-text text-transparent">
                Explore Products
              </p>
            </button>
            <button className="btn border border-white rounded-full bg-transparent">
              <p className="text-white">View Pricing</p>
            </button>
          </div>
          <p className="text-center text-[#ffffff] text-4 mt-4 mb-15 ">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </>
  );
};

export default Explore;
