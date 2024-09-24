import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Redux/MySlices";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
const Cart = ({ showcart, setshowcart }) => {
  const getcartItem = useSelector((val) => val);
  const [count, setcount] = useState(0);
  const navigate = useNavigate();
  const [products, setProduct] = useState([]);
  let data = getcartItem.mainslice.CartItem;
  useEffect(() => {
    setProduct(data);
  }, [data]);
  const dispatch = useDispatch();
  const fe = localStorage.getItem("cart");

  let ar = [];
  ar.push(JSON.stringify(fe));
  console.log(JSON.parse(ar));

  let Totalprice = products.reduce((firstval, prodval) => {
    let total = firstval + prodval.price;
    return total;
  }, 0);
  console.log(Totalprice);
  const gotoshopall = () => {
    setshowcart(false);
    navigate("/ShopAll/allproducts", {
      state: { NavValue: "allproducts", ok: true },
    });
  };
  return (
    <>
      {showcart && (
        <div className="fixed  z-50 w-full top-0">
          <div className="w-[90%]  animate__animated animate__fadeInRight teb:w-1/2  absolute lep:w-1/3  text-black z-40  h-svh flex-col bg-white  flex   right-0 ">
            <div className="flex justify-between items-center">
              <h1 className="text-center p-2 uppercase text-2xl font-semibold">
                C<span className="text-orange-600 font-serif">a</span>rt
              </h1>
              <span
                className="text-3xl me-4"
                onClick={() => setshowcart(false)}>
                {" "}
                <RxCross2 />
              </span>
            </div>
            <hr className="w-[90%] mx-auto" />
            <div className="flex flex-col mt-2 gap-2 overflow-y-auto scrollbar scrollbar-track-white scrollbar-thumb-slate-100 h-[80vh] ">
              {products.length <= 0 ? (
                <div className="flex justify-center items-center h-full">
                  <p className="text-center uppercase font-bold text-red-600 text-2xl flex flex-col gap-4">
                    Please add Product
                    <button
                      className="p-2 border-[1px] bg-black text-white text-xl  uppercase font-head2"
                      onClick={gotoshopall}>
                      Buy products
                    </button>
                  </p>
                </div>
              ) : (
                ""
              )}
              {products.map((val, ind) => {
                return (
                  <>
                    <div className=" mx-auto p-2 flex border-[1px]  w-[90%]  flex-col">
                      <div className="grid grid-cols-[auto]">
                        <div className="flex  gap-2">
                          <img
                            src={val.img}
                            width={80}
                          />
                          <div className="grid  ">
                            <div className="flex flex-col gap-2">
                              <h1 className=" ">{val.name}</h1>

                              <p className=" flex gap-2  items-center">
                                {val.price}{" "}
                                <span
                                  className="text-xs  uppercase underline cursor-pointer"
                                  onClick={() =>
                                    dispatch(removeFromCart(val._id))
                                  }>
                                  remove
                                </span>
                              </p>
                              <div className="w-[60px]  rounded-md border-[1px]  border-solid h-[30px] flex justify-around items-center">
                                <span
                                  className="font-bold text-[16px]"
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
                                  className=" font-bold text-[16px]"
                                  onClick={() => setcount(count + 1)}>
                                  +
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>

            <div className="bottom-0 bg-white w-full  absolute">
              <hr className="w-[90%] mx-auto border-[1px] border-black p-2 " />
              <div className="flex  flex-col gap-3">
                <div className="flex justify-between p-2">
                  <h1 className="p-2 font-semibold uppercase">
                    Total Amount : {Totalprice}{" "}
                    <span className="text-sm">Rs</span>
                  </h1>
                  <p className="p-2 font-semibold uppercase">
                    Items: {products.length}
                  </p>
                </div>

                <button className="border-[1px] w-[90%] bg-black p-2 text-white mx-auto mb-3 rounded-sm">
                  Proceed To Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
