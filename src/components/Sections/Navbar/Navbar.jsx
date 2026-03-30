import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm md:px-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>Testimonial</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold bg-linear-to-r from-blue-900  to-purple-600 bg-clip-text text-transparent">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-4 text-[#101727] gap-5">
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Feature</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonial</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-7">
        <a className="text-2xl">
          <CiShoppingCart />
        </a>
        <a className=" text-4">Login</a>
        <a className="btn border rounded-full bg-linear-to-r from-blue-900  to-purple-600 text-amber-50">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
