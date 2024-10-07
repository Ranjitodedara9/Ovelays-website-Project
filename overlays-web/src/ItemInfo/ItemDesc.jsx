import { useEffect, useState } from "react";
import img1 from "./chart img/IMG_4485 (1).jpg";
import { FaTruck } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Redux/MySlices";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ItemDesc = () => {
  const [count, setcount] = useState(1);
  const [care, showcare] = useState(false);
  const [desc, showdesc] = useState(false);
  useEffect(()=>{

    window.scroll(0, 0);
  },[])
  const dispatch = useDispatch();
  const ItemInDesc = useSelector((val) => val.mainslice.ItemInDesc);
  console.log(ItemInDesc);

  const addtocart = () => {
    const nvo = { ...ItemInDesc, qty: count };
    dispatch(AddToCart(nvo));
  };
  return (
    <>
      <ToastContainer />
      <div className="flex  h-auto  lep:flex-row">
        <div className="mt-[14%] flex flex-col lep:flex-row w-full lep:gap-5 justify-center ">
          <div className="flex  items-center  justify-center h-screen lep:justify-end lep:me-5 lep:h-auto lep:items-start  w-[100%] ">
            <img
              src={ItemInDesc.img}
              className="rounded-md h-[90vh]  w-[90%]  lep:w-[70%]"
              alt="Image"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-3 lep:ms-4  w-[90%] mx-auto lep:w-[100%]">
            <div className="lep:w-[80%] w-full flex flex-col gap-3 justify-start items-start  ">
              <h3 className="text-[14px] font-futura text-[#1A1A1A]  font-bold mt-3">
                OVERLAYS CLOTHING
              </h3>
              <h2 className=" font-futura text-2xl lep:text-4xl font-thin text-[#1A1A1] ">
                {ItemInDesc.name}
              </h2>
              <div className="flex items-center justify-center ">
                <LiaRupeeSignSolid className="text-2xl text-orange-600" />
                <span className="  flex items-end text-orange-600 justify-center text-[14px] lep:text-[18px]">
                  <p className="text-2xl lep:text-3xl">{ItemInDesc.price}.00</p>{" "}
                  <p
                    className="text-[15px] ms-2
             text-[#808080]">
                    M.R.P
                  </p>
                </span>
              </div>
              <p className=" text-[14px] -mt-3">(include all taxes)</p>
              <hr className="text-black/50 w-[95%]" />

              <div className="flex justify-between w-full">
                <span className=" text-[14px]">Size: </span>
                <span className="me-4 text-[14px]  text-[#1A1A1AB3] underline">
                  Size chart :
                </span>
              </div>
              <span className="flex flex-wrap gap-1 w-[70%] ">
                {ItemInDesc.size.map((val, ind) => (
                  <span
                    className=" text-sm flex justify-center rounded-md items-center p-4  border-[1px] w-[48.6px] h-[43.2px]"
                    key={ind}>
                    {val}
                  </span>
                ))}
              </span>
              <div className="flex flex-col w-full gap-3">
                <p className="text-[14px] font-normal">Quantity:</p>
                <div className="w-[140px] rounded-md border-[1px]  border-solid h-[50px] flex justify-around items-center">
                  <span
                    className="font-bold text-[25px]"
                    onClick={() => {
                      if (count <= 0) {
                        setcount(0);
                      } else {
                        setcount(count - 1);
                      }
                    }}>
                    -
                  </span>
                  <span>{count}</span>
                  <span
                    className=" font-bold text-[25px]"
                    onClick={() => setcount(count + 1)}>
                    +
                  </span>
                </div>
              </div>
              <div className="items-center justify-center hidden w-full gap-2 lep:flex-col -ms-4 lep:flex">
                <button
                  className="w-[90%] rounded-sm bg-gray-300 uppercase flex justify-center items-center p-2 h-50px"
                  onClick={addtocart}>
                  Add To Cart
                </button>
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-sm text-center w-[50%] text-white bg-blue-900 bg-opacity-90 rounded-tr-md rounded-tl-md">
                    5% off on prepaid orders
                  </p>
                  <button className="w-[90%] rounded-sm bg-black text-white capitalize flex justify-center items-center p-2  ">
                    Proceed to Buy
                  </button>
                </div>
              </div>
              <div className="w-full">
                <div
                  className="flex justify-between w-[90%] mt-2"
                  onClick={() => showdesc(!desc)}>
                  <span className="font-bold ">Description</span>
                  <span className="font-bold ">
                    {desc ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </div>
                {desc && (
                  <div className="flex justify-center w-full">
                    <img
                      src={img1}
                      className={` lep:w-[411px]  ${
                        desc ? "animate__animated animate__fadeIn" : ""
                      }`}
                    />
                  </div>
                )}
                <hr className="w-[96%] mt-3" />
              </div>
              <div
                className="flex justify-between w-[90%] mt-2"
                onClick={() => showcare(!care)}>
                <span className="font-bold ">Product care</span>
                <span className="font-bold ">
                  {care ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </div>

              {care && (
                <p className=" text-[14px]">
                  Machine wash inside out in cold water, use mild detergent. Dry
                  and iron inside out, avoid fabric softeners.
                </p>
              )}
              <hr className="w-[96%] text-black" />
            </div>
          </div>
          <div className="lep:hidden fixed bottom-0 flex flex-col items-center justify-center w-full gap-2 bg-white border-t border-black/25 h-[30%]">
            <button className="w-[90%] rounded-sm bg-gray-300 uppercase flex justify-center items-center p-2 h-50px">
              Add To Cart
            </button>
            <div className="flex flex-col items-center justify-center w-full">
              <p className="text-sm text-center w-[50%] text-white bg-blue-900 bg-opacity-90 rounded-tr-md rounded-tl-md">
                5% off on prepaid orders
              </p>
              <button className="w-[90%] rounded-sm bg-black text-white capitalize flex justify-center items-center p-2  ">
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-2 p-4 mt-10 lep:justify-evenly lep:flex-row">
        <div className="flex flex-col items-center justify-center w-full gap-2 lep:w-1/3">
          <span>
            <FaTruck className="text-6xl" />
          </span>
          <p className="text-sm font-bold">FREE & FAST DELIVERY</p>
          <p className="text-sm">Shipping within 48 hours across India.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 lep:w-1/3">
          <span>
            <TbTruckReturn className="text-6xl" />
          </span>
          <p className="text-sm font-bold">RETURN POLICY </p>
          <p className="text-sm">Returns with 7 days.</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-2 lep:w-1/3">
          <span>
            <IoMdMail className="text-6xl" />
          </span>
          <p className="text-sm font-bold">CONTACT US</p>
          <p className="text-sm">Write us at support@overlaysclothing.com</p>
        </div>
      </div>
    </>
  );
};

export default ItemDesc;
