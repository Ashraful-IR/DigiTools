import React, { useState } from "react";
import { Bounce, toast } from "react-toastify";

const Card = ({ products, setSelectedProducts, selectedProducts }) => {
  const productDetails = products;
  console.log(productDetails, "card");

  const [activebtn, setActivebtn] = useState(false);

  const handleActiveBtn = () => {
    const newState = !activebtn;
    setActivebtn(newState);
    if (!activebtn) {
      toast.success(`${productDetails.title} added to cart!`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    setSelectedProducts([...selectedProducts, productDetails]);
  };
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

        <img
          src={productDetails.icon}
          alt={productDetails.title}
          className="w-8 h-auto"
        />

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
          <button
            className={`  btn ${activebtn === false ? "bg-linear-to-r from-blue-900 to-purple-600 " : "bg-white border border-green-300 text-green-500 "}text-amber-50  rounded-full w-full`}
            onClick={handleActiveBtn}
            disabled={activebtn}
          >
            {`${activebtn === false ? "Buy Now" : "Added to Cart"}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
