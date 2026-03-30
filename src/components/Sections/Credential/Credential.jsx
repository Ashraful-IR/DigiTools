import React from "react";
import userImg from "../../../assets/user.png";
import rocketImg from "../../../assets/rocket.png";
import packageImg from "../../../assets/package.png";

const Credential = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="flex flex-col justify-between items-center gap-5">
        <h2 className="text-3xl font-bold text-center mt-10">
          Get Started in 3 Steps
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className=" rounded-xl p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-end items-center">
              <div className="w-8 h-8 rounded-full flex justify-center items-center mb-4 bg-linear-to-r from-blue-900  to-purple-600 text-white">
                1
              </div>
            </div>

            <div className="w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4 bg-purple-100">
              <img src={userImg} alt="User" className="mx-auto mb-4" />
            </div>

            <h2 className="text-xl font-bold text-center">Create Account</h2>
            <p className="text-gray-600 mt-2 text-center">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-end items-center">
              <div className="w-8 h-8 rounded-full flex justify-center items-center mb-4 bg-linear-to-r from-blue-900  to-purple-600 text-white">
                2
              </div>
            </div>

            <div className="w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4 bg-purple-100">
              <img src={packageImg} alt="Package" className="mx-auto mb-4" />
            </div>

            <h2 className="text-xl font-bold text-center">Choose Products</h2>
            <p className="text-gray-600 mt-2 text-center">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex justify-end items-center">
              <div className="w-8 h-8 rounded-full flex justify-center items-center mb-4 bg-linear-to-r from-blue-900  to-purple-600 text-white">
                3
              </div>
            </div>

            <div className="w-20 h-20 rounded-full flex justify-center items-center mx-auto mb-4 bg-purple-100">
              <img src={rocketImg} alt="Rocket" className="mx-auto mb-4" />
            </div>

            <h2 className="text-xl font-bold text-center">Start Creating</h2>
            <p className="text-gray-600 mt-2 text-center">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credential;
