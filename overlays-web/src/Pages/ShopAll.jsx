import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AddItemInDesc } from "../Redux/MySlices";
import { LiaDownloadSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

const ShopAll = () => {
  const [allProducts, setAllProd] = useState([]);
  const [filterprod, setfilterprod] = useState([]);
  const [paging, setpagig] = useState(1);

  const lastelem = paging * 6;
  const firstelem = lastelem - 6;
  const pagingprod = filterprod.slice(firstelem, lastelem);

  const fetchallprod = async () => {
    const fetdata = await fetch("http://localhost:4000/products/allProd");
    const getjes = await fetdata.json();
    console.log(getjes);
    setAllProd(getjes);
    setfilterprod(getjes);
  };

  useEffect(() => {
    fetchallprod();
  }, []);

  const dispatch = useDispatch();
  const pagig = Math.ceil(filterprod.length / 6);
  const pagigArr = new Array(pagig).fill(pagig);

  return (
    <>
      <div>
        <div className="mt-[22vh] h-[10vh] lep:h-[20vh] teb:mt-[28vh]">
          <h1 className="uppercase lep:text-4xl text-center p-3 font-semibold text-2xl">
            ALL products
          </h1>
        </div>
        <div className="flex flex-col justify-center  items-start lep:grid lep:grid-cols-[auto_1fr]">
          <div className="lep:sticky lep:top-[28vh]   w-[25vw] h-screen hidden lep:block">
            <div className="w-full flex flex-col    h-full">
              <div className="ms-3 mt-2 ">
                <h1 className=" font-normal text-2xl capitalize ">Filters</h1>
                <hr className="w-[90%] my-2" />
                <div className="me-4 mt-3">
                  <span className="flex justify-between text-xl items-center font-semibold">
                    price{" "}
                    <i className="">
                      <IoIosArrowDown />
                    </i>
                  </span>
                </div>

                <hr className="w-[90%] my-2 mt-3" />
              </div>
            </div>
          </div>
          <p className="text-center mt-3 lep:hidden w-full">
            {allProducts.length} CLOTHES
          </p>
          <div className="">
            <div className=" justify-between items-center hidden lep:flex">
              <h1 className="ms-3 text-lg">{allProducts.length} Products</h1>
              <div className="">
                <span className="flex me-4 items-center gap-2 text-lg">
                  Sort by{" "}
                  <i>
                    <IoIosArrowDown />
                  </i>
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-y-6 teb:grid-cols-3  ">
              {pagingprod.map((cloth) => {
                return (
                  <div
                    key={cloth.id}
                    className="w-full flex justify-evenly items-start  flex-col">
                    <img
                      src={cloth.img}
                      className="w-[90%] mx-auto p-2  lep:w-[100%] lep:h-[70vh]"
                    />
                    <h1 className="w-[80%] ms-4 font-head2 text-center text-[0.875rem]">
                      {cloth.name}
                    </h1>
                    <p className="flex justify-center w-full font-semibold text-lg items-center text-center">
                      <LiaRupeeSignSolid />
                      {cloth.price}.00
                    </p>
                    <div className="flex justify-center items-center gap-1 w-full">
                      {cloth.size.map((size) => (
                        <span
                          key={size}
                          className="border-1 text-[11.2px] p-1 lep:p-2 lep:text-[16px] lep:mt-2">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopAll;
