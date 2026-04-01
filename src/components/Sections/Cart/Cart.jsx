import React from "react";
import cartImg from "../../../assets/products/shopping-cart.png";
import { MdDelete } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const Cart = ({ selectedProducts, products, setSelectedProducts }) => {
  const productDetails = products;
  console.log(productDetails, "cart");
  console.log(selectedProducts, "cart");

  const handleDeletedProduct = (products) => {
    console.log(products, "deleted product");
    const updatedProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.title !== products.title,
    );
    setSelectedProducts(updatedProducts);
    toast.warn(`${productDetails.title} removed from cart!`, {
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
  };
  const handleProccedBtn = (products) => {
    const updatedProducts = selectedProducts.filter(
      (selectedProduct) => selectedProduct.title === products.title,
    );
    setSelectedProducts(updatedProducts);
    toast.success(`Proceeding to checkout!`, {
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
  };


  return (
    <>
      {selectedProducts.length === 0 ? (
        <div className="container mx-auto flex flex-col justify-between items-center gap-5 mt-30 mb-50 shadow-xl rounded-xl p-10">
          <img src={cartImg} alt="Cart" className="w-50 h-50" />
          <h2 className="text-2xl font-bold mt-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-20">
            Browse our products and add items to your cart.
          </p>
        </div>
      ) : (
        <div className="rounded-xl shadow-2xl p-5">
          <div>
            <p className="text-3xl font-bold text-black ">Your Cart</p>
          </div>
          <div className="container mx-auto mt-10 rounded-xl shadow-xl p-5  flex flex-col justify-center items-start ">
            {selectedProducts.map((productDetails) => (
              <div
                key={productDetails.id}
                className="card mb-10 mt-5  bg-base-100 shadow-sm w-full "
              >
                <div className="card-body gap-5 w-full bg-white rounded-lg p-2">
                  <div className="flex justify-between items-center w-full gap-5 ">
                    <div className="flex justify-start items-start w-full gap-10 p-3 ">
                      <img
                        src={productDetails.icon}
                        alt={productDetails.title}
                        className="w-10 h-10"
                      />
                      <div className="FLEX flex-col justify-between items-start gap-5">
                        <p className="text-black text-xl font-semibold">
                          {productDetails.title}
                        </p>
                        <span className="text-4 font-normal text-gray-600">
                          ${productDetails.price}/mo
                        </span>
                      </div>
                    </div>
                    <div>
                      <button className="btn btn-sm text-2xl text-red-500 bg-transparent border-none">
                        <MdDelete
                          onClick={() => handleDeletedProduct(productDetails)}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="container mx-auto w-full mt-10 rounded-xl p-2 flex justify-between items-center gap-6">
              <div className="flex justify-between items-center gap-5 w-full">
                <p className="text-lg font-bold text-gray-400">Total: </p>
                <p className="text-xl font-bold text-black">
                  ${" "}
                  {selectedProducts.reduce(
                    (total, product) => total + product.price,
                    0,
                  )}
                </p>
              </div>
            </div>
            <div className="container mx-auto w-full mt-10  rounded-xl p-2 flex justify-center items-center gap-6">
              <button
                className="btn bg-linear-to-r from-blue-900 to-purple-600 w-11/12 text-amber-50 mb-10 rounded-full"
                onClick={() => handleProccedBtn(productDetails)}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
