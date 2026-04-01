import React, { useState } from "react";
import Card from "../../ui/Card/Card";
import Cart from "../Cart/Cart";
import AvailableProduct from "../AvailableProduct/AvailableProduct";

const Products = ({ products, selectedProducts, setSelectedProducts }) => {
  const [active, setActive] = useState("products");

  return (
    <>
      <div className="container mx-auto mt-10 ">
        <div className="flex flex-col justify-between items-center gap-5">
          <h2 className="text-3xl font-bold text-center mt-10">
            Premium Digital Tools
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Choose from our curated collection of premium digital products
            designed <br />
            to boost your productivity and creativity.
          </p>
          <div className="flex justify-center items-center mt-5">
            <button
              className={`btn ${active === "products" ? "bg-linear-to-r from-blue-900 to-purple-600 text-amber-50" : ""}  rounded-l-full rounded-r-none"}`}
              onClick={() => setActive("products")}
            >
              Products
            </button>
            <button
              className={`btn ${active === "cart" ? "bg-linear-to-r from-blue-900 to-purple-600 text-amber-50" : ""} rounded-r-full rounded-l-none "}`}
              onClick={() => setActive("cart")}
            >
              Cart ({selectedProducts.length})
            </button>
          </div>
        </div>

        {active === "products" ? (
          <AvailableProduct
            products={products}
            setSelectedProducts={setSelectedProducts}
            selectedProducts={selectedProducts}
          />
        ) : (
          <Cart
            products={products}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        )}
      </div>
    </>
  );
};

export default Products;
