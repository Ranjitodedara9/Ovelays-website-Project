import React from "react";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineDashboard } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import { LuBadgeCheck } from "react-icons/lu";
import DashBoard from "./DashBoard";
import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Orders from "./Orders";

const AdminPanel = () => {
  const navigate = useNavigate();
  const gotodashboard = () => {
    navigate("/admin/", { state: { NavValue: "allproducts" } });
  };
  const gotoProducts = () => {
    navigate("/admin/Products", { state: { NavValue: "allproducts" } });
  };
  const gotoOrders = () => {
    navigate("/admin/Orders");
  };

  return (
    <>
      <div className="grid grid-cols-[auto,1fr]">
        <div className="w-[20vw] bg-white h-svh shadow-sm ">
          <div className="flex justify-center gap-3 p-2 h-[10vh] w-full  items-center">
            <span className="text-2xl">
              <GrUserAdmin />
            </span>
            <h1 className=" font-head2 text-2xl font-bold">Admin Panel</h1>
          </div>
          <div className="flex justify-start ms-5 mt-3 w-full">
            <div className="  flex justify-start flex-col items-start gap-2 ">
              <span
                className="font-thin capitalize text-xl font-sans flex justify-center items-center gap-2 "
                onClick={gotodashboard}>
                <MdOutlineDashboard className="text-md" />
                dashboard
              </span>
              <span
                className="font-thin capitalize text-xl font-sans flex justify-center items-center gap-2"
                onClick={gotoProducts}>
                <RiShoppingBasketLine className="text-md" />
                Products
              </span>
              <span
                className="font-thin capitalize text-xl font-sans flex justify-center items-center gap-2"
                onClick={gotoOrders}>
                <LuBadgeCheck className="text-md" />
                Orders
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-slate-100/30 h-svh">
          <Header />
          <Routes>
            <Route
              path="/"
              element={<DashBoard />}
            />
            <Route
              path="Products"
              element={<Products />}
            />
            <Route
              path="Orders"
              element={<Orders />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
