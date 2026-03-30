import React from "react";
import { IoCheckmark } from "react-icons/io5";

const Subscription = () => {
  return (
    <div className="container mx-auto mt-10 ">
      <div className="flex flex-col justify-between items-center gap-5">
        <h2 className="text-3xl font-bold text-center mt-10">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-600 mt-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="rounded-xl p-2  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        <div className="card w-96 bg-base-100 shadow-sm rounded-3xl">
          <div className="card-body ">
            <div className="flex flex-col justify-between items-start gap-5">
              <h2 className="text-2xl font-bold text-[#101727]">Starter</h2>
              <p className="text-4 text-[#101727] opacity-75">
                Perfect for getting started
              </p>
              <span className="text-4xl text-[#101727] font-bold">
                $0 <span className="text-sm align-sub">/month</span>
              </span>

              <div className="flex flex-col justify-between items-start gap-2 text-s text-[#101727] opacity-90">
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Access to 10 free tools</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Basic templates</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Community support</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>1 project per month</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="btn mx-auto w-full border rounded-full bg-linear-to-r from-blue-900  to-purple-600  ">
                <p className="text-md  text-white">Get Started Free</p>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-linear-to-b from-blue-900  to-purple-600 shadow-sm relative rounded-3xl ">
          <div className="card-body ">
            <span className="badge badge-xs badge-warning absolute -top-2 mx-auto left-0 right-0 ">
              Most Popular
            </span>
            <div className="flex flex-col justify-between items-start gap-5">
              <h2 className="text-2xl font-bold text-[#ffffff]">Pro</h2>
              <p className="text-4 text-[#ffffff] opacity-75">
                Best for professionals
              </p>
              <span className="text-4xl text-[#ffffff] font-bold">$49<span className="text-sm align-sub">/month</span></span>

              <div className="flex flex-col justify-between items-start gap-2 text-s text-[#ffffff] opacity-90">
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Access to all premium tools</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Unlimited templates</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Priority support</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Unlimited projects</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Cloud sync</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Advanced analytics</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="btn mx-auto w-full border rounded-full  ">
                <p className="text-md bg-linear-to-r from-blue-900  to-purple-600 bg-clip-text text-transparent">
                  Start Pro Trial
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 rounded-3xl">
          <div className="card-body ">
            <div className="flex flex-col justify-between items-start gap-5">
              <h2 className="text-2xl font-bold text-[#101727]">Enterprise</h2>
              <p className="text-4 text-[#101727] opacity-75">
                For teams and businesses
              </p>
              <span className="text-4xl text-[#101727] font-bold">
                $99<span className="text-sm align-sub">/month</span>
              </span>

              <div className="flex flex-col justify-between items-start gap-2 text-s text-[#101727] opacity-90">
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Everything in Pro</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Team collaboration</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Custom integrations</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Dedicated support</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>SLA guarantee</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <IoCheckmark />
                  <p>Contact Sales</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button className="btn mx-auto w-full border rounded-full bg-linear-to-r from-blue-900  to-purple-600  ">
                <p className="text-md  text-white">
                  Contact Sales
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
