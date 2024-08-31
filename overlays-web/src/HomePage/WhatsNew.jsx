/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

import { LiaRupeeSignSolid } from "react-icons/lia";
import { AddItemInDesc } from "../Redux/MySlices";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const WhatsNew = () => {
  const [WhatsNewProd, setWhatsNewProd] = useState([]);
  const [otherWhatsNew, setOtherWhatsNew] = useState([]);
  const fetchprdforclic = async (val) => {
    const fetchdata = await fetch(`http://localhost:4000/products/${val}`);
    const getjes = await fetchdata.json();
    const filterWhatsNew = getjes.filter((val, ind) => ind < 4);
    const gettshirt = getjes.filter(
      (val, ind) => val.prodinfo === "tshirt" && ind < 4
    );
    const getjacketonly = getjes.filter((val) => val.prodinfo === "jacket");
    if (val === "both") {
      setWhatsNewProd(gettshirt);
      setOtherWhatsNew(getjacketonly);
    } else if (val === "jacket" || val === "hoodie") {
      setOtherWhatsNew(filterWhatsNew);
    } else {
      setWhatsNewProd(filterWhatsNew);
    }
  };
  useEffect(() => {
    fetchprdforclic("both");
  }, []);
  const showprodonclic = (val) => {
    fetchprdforclic(val);
  };
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h1 className=" capitalize text-3xl text-center mt-5 teb:text-5xl font-head2">
          What's New👍
        </h1>
        <div className="flex  justify-center  gap-3   mt-5  flex-col items-center ">
          <div className="flex *:tracking-[4px] teb:text-3xl text-2xl gap-3 *:border-b-2 *:border-black/60 *:font-links">
            <button
              className="hover:border-orange-700"
              onClick={() => showprodonclic("tshirt")}>
              Tshirt
            </button>
            <button
              className="hover:border-orange-700"
              onClick={() => showprodonclic("shirt")}>
              shirt
            </button>
          </div>
          <div
            className={`teb:flex teb:justify-center lep:w-[80%] grid grid-cols-2 teb:items-start  mt-3    w-[90%] gap-1 ${
              WhatsNewProd ? "animate__animated animate__fadeInUp" : ""
            }`}>
            {WhatsNewProd.map((val) => {
              return (
                <>
                  <NavLink to="/MainProduct">
                    <div
                      onClick={() => dispatch(AddItemInDesc(val))}
                      key={val.id}
                      className="flex  flex-col  justify-center items-center text-center gap-1 mt-4 w-full">
                      <img
                        src={val.img}
                        className="teb:w-[90%] lep:w-[80%] "
                      />
                      <p className="text-md mt-2 teb:w-[80%] font-semibold">
                        {val.name}
                      </p>
                      <span className="font-semibold teb:text-lg text-md flex justify-center items-center">
                        <LiaRupeeSignSolid />
                        {val.price}
                      </span>
                      <div className="flex teb:gap-2 gap-1 mt-2">
                        {val.size.map((size, ind) => (
                          <span
                            className="teb:p-2 p-1 text-sm border-[1px] border-gray-600/50"
                            key={`${val.id}-${ind}`}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </NavLink>
                </>
              );
            })}
          </div>

          <div className="w-full mt-5">
            <div className="flex gap-3 *:text-2xl *:border-b-[2px]  *:border-black  justify-center items-center *:cursor-pointer ">
              <span
                className="hover:border-red-500"
                onClick={() => showprodonclic("jacket")}>
                JACKET
              </span>
              <span
                className="hover:border-red-500"
                onClick={() => showprodonclic("hoodie")}>
                HOODIE
              </span>
              <span
                className="hover:border-red-500"
                onClick={() => showprodonclic("sweatshirt")}>
                SWEARSHIRT
              </span>
            </div>

            <div
              className={`teb:flex teb:justify-center mx-auto   lep:w-[80%] grid grid-cols-2 teb:items-start   mt-3    w-[90%] gap-1 ${
                WhatsNewProd ? "animate__animated animate__fadeInUp" : ""
              }`}>
              {otherWhatsNew.map((val) => {
                return (
                  <>
                    <NavLink to="/MainProduct">
                      <div
                        className="flex  flex-col  justify-center items-center text-center gap-1 mt-4 w-full"
                        key={val.id}
                        onClick={() => dispatch(AddItemInDesc(val))}>
                        <img
                          src={val.img}
                          className="teb:w-[90%] lep:w-[90%] "
                        />
                        <p className="text-lg mt-2 teb:w-[80%] font-semibold ">
                          {val.name}
                        </p>
                        <span className="font-semibold teb:text-lg text-md flex justify-center items-center">
                          <LiaRupeeSignSolid />
                          {val.price}
                        </span>
                        <div className="flex teb:gap-2 gap-1 mt-2">
                          {val.size.map((size, ind) => (
                            <span
                              className="teb:p-2 p-1 text-sm border-[1px] border-gray-600/50"
                              key={`${val.id}-${ind}`}>
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                    </NavLink>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsNew;
