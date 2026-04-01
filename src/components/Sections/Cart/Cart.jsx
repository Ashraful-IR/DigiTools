import React from "react";
import cartImg from "../../../assets/products/shopping-cart.png";

const Cart = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-between items-center gap-5 mt-30 mb-50 shadow-xl rounded-xl p-10">
        <img src={cartImg} alt="Cart" className="w-50 h-50"/>
        <h2 className="text-2xl font-bold mt-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-20">
          Browse our products and add items to your cart.
        </p>
      </div>
    </>
  );
};

export default Cart;
