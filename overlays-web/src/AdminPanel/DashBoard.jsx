import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const DashBoard = () => {
  const [products, allproducts] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();

  const data = useSelector((val) => val);
  const showalluser = async () => {
    const users = await axios.get("http://localhost:4000/user/DispUser");
    const prod = await axios.get(
      `http://localhost:4000/products/allProd/${location.state.NavValue}`
    );
    setUsers(users.data);
    allproducts(prod.data);
  };

  useEffect(() => {
    showalluser();
  }, []);
  const DashComp = [
    {
      Name: "Total Products",
      value: products.length,
    },
    {
      Name: "Total Users",
      value: users.length,
    },
  ];

  return (
    <>
      <>
        <div>
          <div className="flex justify-center mt-3 gap-3">
            {DashComp.map((val) => {
              return (
                <>
                  <div className="border-2 w-1/4 h-[16vh] rounded-lg flex justify-center flex-col items-center border-black/60 shadow-sm shadow-gray-400">
                    <span className=" font-bold text-lg ">{val.Name}</span>
                    <span className="text-2xl text-gray-600">{val.value}</span>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    </>
  );
};

export default DashBoard;
