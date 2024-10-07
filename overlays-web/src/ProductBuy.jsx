import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Buyproduct() {
  const [billingDetails, setBillingDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [productData, setProductData] = useState({});
  const location = useLocation();
  console.log(location);
  const buyProduct = useSelector((state) => state.mainslice.data);
  console.log(buyProduct);

  const handleBillingChange = (e) => {
    setBillingDetails({
      ...billingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const getProductApi = useCallback(async () => {
    try {
      setProductData(location.state);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [location.state]);

  useEffect(() => {
    if (location.state) {
      getProductApi();
    }
  }, [getProductApi, location.state]);

  const submitorderdet = async () => {
    const data = {
      name: billingDetails.name,
      address: billingDetails.address,
      city: billingDetails.city,
      state: billingDetails.state,
      pincode: billingDetails.pincode,
    };
    const fet = await fetch("http://localhost:4000/order/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const getjes = await fet.json();
  };
  return (
    <div className="flex flex-col items-center p-6 pt-32">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
          <div className="mb-8 contact-box">
            <h2 className="mb-4 text-2xl font-bold">Billing Address</h2>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={billingDetails.name}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="address">
                Address
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                value={billingDetails.address}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="city">
                City
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                name="city"
                value={billingDetails.city}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="state">
                State
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="state"
                type="text"
                name="state"
                value={billingDetails.state}
                onChange={handleBillingChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="pincode">
                ZIP Code
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="pincode"
                type="number"
                name="pincode"
                value={billingDetails.pincode}
                onChange={handleBillingChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full px-3 md:w-1/2">
          <div className="mb-8 product-details">
            <h2 className="mb-4 text-2xl font-bold">Product Details</h2>
            {location.state.img && (
              <div className="mb-4">
                <img
                  src={location.state.img}
                  alt={productData.title}
                  className="object-cover h-[20vh] rounded"
                />
              </div>
            )}
            <p className="mb-4">
              <span className="font-bold">Product Name:</span>{" "}
              {location.state.name}
            </p>
            <p className="mb-4">
              <span className="font-bold">Quantity:</span> {location.state.qty}
            </p>
            <p className="mb-4">
              <span className="font-bold">Price:</span>
              {location.state.price * location.state.qty} rs
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={submitorderdet}>
          Submit Billing Details
        </button>
      </div>
    </div>
  );
}

export default Buyproduct;
