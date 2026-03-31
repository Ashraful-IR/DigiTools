import React from "react";
import aiImg from "../../../assets/products/writing_2327400 1.png";

const Card = ({ products }) => {
  const productDetails = products;
  console.log(productDetails, "card");
  return (
    <div className="card w-96 bg-base-100 shadow-sm ">
      <div className="card-body gap-5">
        <div className="flex justify-end items-end w-full">
          <span
            className={`badge ${productDetails.tag === "new" ? "bg-green-100 text-purple-700 rounded-full" : productDetails.tag === "popular" ? "bg-blue-100 text-purple-800 rounded-full" : productDetails.tag === "bestSeller" ? "bg-yellow-100 text-red-800 rounded-full" : ""}`}
            badge-sm
            badge-warning
          >
            {productDetails.tag}
          </span>
        </div>

        <img src={aiImg} alt="AI Tool" className="w-8 h-auto" />

        <div className="flex flex-col justify-between gap-3">
          <h2 className="text-3xl font-bold">{productDetails.title}</h2>
          <span className="text-xl">${productDetails.price}/mo</span>
        </div>
        <ul className="mt-6 flex flex-col gap-2 text-xs">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{productDetails.feature[0]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{productDetails.feature[1]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{productDetails.feature[2]}</span>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 me-2 inline-block text-success"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>{productDetails.feature[3]}</span>
          </li>
        </ul>
        <div className="mt-6">
          <button className="btn b bg-linear-to-r from-blue-900  to-purple-600 rounded-full w-full text-amber-50 text-md font-normal mt-12">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
