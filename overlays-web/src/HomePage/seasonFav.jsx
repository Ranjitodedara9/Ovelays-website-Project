import { useState } from "react";

import { BsDot } from "react-icons/bs";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import LazyLoad from "react-lazy-load";
const SeasonFav = () => {
  const [imgnum, setimgnum] = useState(0);
  const [qty, setqty] = useState(0);
  if (imgnum > 2) {
    setimgnum(2);
  }
  if (imgnum < 0) {
    setimgnum(0);
  }

  const sizes = [
    {
      nm: "XS",
      stock: false,
    },
    {
      nm: "S",
      stock: false,
    },
    {
      nm: "m",
      stock: true,
    },
    {
      nm: "l",
      stock: false,
    },
    {
      nm: "xl",
      stock: false,
    },
    {
      nm: "xxl",
      stock: false,
    },
  ];
  return (
    <>
      {" "}
      <h1 className="mt-10 text-4xl  text-center uppercase">
        {
          // eslint-disable-next-line react/no-unescaped-entities
          <span className="font-head2">Season's FAV 🌤️</span>
        }
      </h1>
      <div className="w-full mt-2 lep:grid lep:grid-cols-2">
        <div className="">
          {imgnum === 0 && (
            <LazyLoad>
              <img
                src="https://i.ibb.co/3hyBj17/img1.jpg"
                className="mx-auto w-[90%]  lep:w-[80%] mt-4"
              />
            </LazyLoad>
          )}
          {imgnum === 1 && (
            <LazyLoad>
              <img
                src="https://i.ibb.co/wKBtDQw/img2.jpg"
                className="mx-auto w-[90%]  lep:w-[80%] mt-4"
              />
            </LazyLoad>
          )}
          {imgnum === 2 && (
            <LazyLoad>
              <img
                src="https://i.ibb.co/bW9KXhL/img3.jpg"
                className="mx-auto w-[90%]  lep:w-[80%] mt-4"
              />
            </LazyLoad>
          )}

          <div className="flex justify-between p-2 lep:hidden">
            <button
              className="ms-4"
              onClick={() => setimgnum(imgnum - 1)}>
              <FaArrowLeft />
            </button>
            <div className="flex text-xl text-[30px]">
              <span
                className={`text-gray-500 ${
                  imgnum == 0 ? "text-black font-bold " : ""
                }`}>
                <BsDot />
              </span>
              <span
                className={`text-gray-500 ${
                  imgnum == 1 ? "text-black font-bold " : ""
                }`}>
                <BsDot />
              </span>
              <span
                className={`text-gray-500 ${
                  imgnum == 2 ? "text-black font-bold " : ""
                }`}>
                <BsDot />
              </span>
            </div>
            <button
              className="me-4"
              onClick={() => setimgnum(imgnum + 1)}>
              <FaArrowRight />
            </button>
          </div>
          <div className="hidden lep:justify-start lep:ms-14 lep:gap-2 lep:p-3 lep:flex none lep:items-center">
            <img
              src="https://i.ibb.co/3hyBj17/img1.jpg"
              className="   lep:w-[12%] "
              onClick={() => setimgnum(0)}
            />

            <img
              src="https://i.ibb.co/wKBtDQw/img2.jpg"
              className=""
              width="12%"
              onClick={() => setimgnum(1)}
            />

            <img
              src="https://i.ibb.co/bW9KXhL/img3.jpg"
              className=""
              width="12%"
              onClick={() => setimgnum(2)}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-3 ps-3 lep:mt-5">
            <p className="uppercase text-[12px] font-bold">overlays clothing</p>
            <h1 className=" font-semibold text-[26px]">
              Fire OverSize Hoodie - Orange
            </h1>
            <div>
              <span className="flex gap-1 text-[18px]">
                2,699.00{" "}
                <p className="text-gray-400 text-[15px] mt-1 ">M.R.P</p>
              </span>
              <p>{"(incl. all taxes)"}</p>
            </div>
            <hr className="w-[95%] text-center" />
          </div>

          <div className="mt-3">
            <div className="flex justify-between">
              {" "}
              <p className="ms-3">size: M</p>
              <p className="gap-1 underline me-3">Size Chart</p>
            </div>
            <div className="flex gap-2 ms-3 w-[70%] mt-4 flex-wrap">
              {sizes.map((size, ind) => {
                return (
                  <>
                    <span
                      className={` rounded-md border-[1px] border-black p-3 uppercase ${
                        size.stock
                          ? " font-bold "
                          : " line-through text-gray-400"
                      }`}
                      key={ind}>
                      {size.nm}
                    </span>
                  </>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4 ms-3 ">
            <span>Quantity</span>
            <div className=" h-[48px] border-[1px] border-gray-400 rounded-md flex w-[139px]   text-lg justify-between items-center">
              <button
                className="p-2 text-3xl font-semibold"
                onClick={() => setqty(qty > 0 ? qty - 1 : 0)}>
                -
              </button>
              <p>{qty}</p>
              <button
                className="p-2 text-3xl font-semibold "
                onClick={() => setqty(qty + 1)}>
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-4">
            <button className="w-[90%] h-[48px] bg-slate-200 rounded-md p-2">
              ADD TO CART{" "}
            </button>
            <div className="flex justify-center w-full mt-3">
              <p className="w-1/2 text-xs text-center bg-blue-700 rounded-sm ">
                5% off on prepaid order
              </p>
            </div>
            <div className="flex justify-center w-full">
              <button className="bg-black w-[90%] flex justify-center items-center flex-col h-[48px] text-white rounded-md">
                Proceed to buy{" "}
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default SeasonFav;
