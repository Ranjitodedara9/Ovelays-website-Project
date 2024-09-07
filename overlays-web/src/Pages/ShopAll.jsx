/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddItemInDesc } from "../Redux/MySlices";
import { LiaDownloadSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import { Filterr } from "../Redux/MySlices";

const ShopAll = () => {
  const [allProducts, setAllProd] = useState([]);
  const [filterprod, setfilterprod] = useState([]);
  const [showPriceBox, setshowPriceBox] = useState(false);
  const [paging, setpagig] = useState(1);
  const [ProdType, setProdType] = useState([]);
  const [showprodType, setshowprodType] = useState(false);
  const [Rangeval, SetRangeValur] = useState(0);
  const [Type, setType] = useState([]);
  const [Fill, setFILL] = useState([]);
  const lastelem = paging * 6;
  const firstelem = lastelem - 6;
  let pagingprod = filterprod.slice(firstelem, lastelem);

  const fetchallprod = async () => {
    const fetdata = await fetch("http://localhost:4000/products/allProd");
    const getjes = await fetdata.json();
    setAllProd(getjes);
    setfilterprod(getjes);
  };

  useEffect(() => {
    fetchallprod();
  }, []);

  const dispatch = useDispatch();
  const pagig = Math.ceil(filterprod.length / 6);
  const pagigArr = new Array(pagig).fill(pagig);
  const d = useSelector((val) => val.mainslice.FilterProd);
  console.log(d);
  const showpriceBox = () => {
    setshowPriceBox(!showPriceBox);
  };

  const ShowProdType = () => {
    setshowprodType(!showprodType);
    let GetType = allProducts.map((val) => val);
    let getnm = allProducts.map((val) => val.prodinfo);
    setFILL(GetType);
    const onlynm = [...new Set(getnm)];
    setType(onlynm);
    const TypeOfProdAndItsLength = getnm.reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});

    const TypeWithLength = Object.entries(TypeOfProdAndItsLength).map(
      ([key, value]) => `${value}`
    );

    console.log(TypeWithLength);

    setProdType(TypeWithLength);
  };
  useEffect(() => {
    const resultOfRangeFill = allProducts.filter(
      (val) => val.price <= Rangeval
    );

    setAllProd(resultOfRangeFill);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Rangeval]);
  const setFilterOnRange = (R) => {
    SetRangeValur(Number(R));
  };

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
            <div className="w-full flex flex-col    h-full ">
              <div className="ms-3 mt-2 ">
                <h1 className=" font-normal text-2xl capitalize ">Filters</h1>
                <hr className="w-[90%] my-2" />
                <div className="me-4 mt-3 p-1 ">
                  <span
                    onClick={showpriceBox}
                    className="flex justify-between text-lg  items-center font-bold">
                    Price{" "}
                    <i className="">
                      <IoIosArrowDown />
                    </i>
                  </span>
                  {showPriceBox && (
                    <div className="flex justify-center p-2 flex-col">
                      <input
                        type="range"
                        min={999}
                        value={Rangeval}
                        max={5000}
                        onChange={(e) => setFilterOnRange(e.target.value)}
                      />

                      <div className="flex justify-center items-center gap-2  mt-2">
                        <div className="flex justify-center items-center gap-1 border-1 h-8">
                          <LiaRupeeSignSolid />
                          <input
                            type="text"
                            className="w-[50px] "
                          />
                        </div>
                        to
                        <div className="h-8 flex border-1 justify-center items-center gap-1">
                          <LiaRupeeSignSolid />
                          <input
                            type="text"
                            className="w-[50px] "
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <hr className="w-[90%] my-2" />
                <div className="me-4 mt-3 p-1">
                  <span
                    className="flex justify-between text-lg items-center font-bold"
                    onClick={ShowProdType}>
                    Product Type{" "}
                    <i className="">
                      <IoIosArrowDown />
                    </i>
                  </span>
                  {showprodType && (
                    <div className=" grid grid-cols-2 mt-2">
                      <div>
                        {Type.map((type, ind) => (
                          <div
                            className="p-1"
                            key={ind}>
                            <input
                              type="checkbox"
                              value={type}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  var a = Fill.filter(
                                    (val) => val.prodinfo === e.target.value
                                  );
                                  a.map((val) => (val.check = true));
                                  let sh = Fill.filter(
                                    (val) => val.check === true
                                  );
                                  console.log(sh);
                                  setAllProd(sh);
                                  console.log(a);
                                } else {
                                  let reje = Fill.filter(
                                    (val) => val.prodinfo === e.target.value
                                  );
                                  reje.map((val) => (val.check = false));
                                  console.log(Fill);
                                  let final = Fill.filter(
                                    (val) => val.check === true
                                  );
                                  console.log(final);
                                  if (final.length > 0) setAllProd(final);
                                  else fetchallprod();
                                }
                              }}
                            />{" "}
                            <span>{type}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col p-1 gap-2">
                        {ProdType.map((val) => (
                          <span> ({val})</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <hr className="w-[90%] my-2" />
                <div className="me-4 mt-3 p-1">
                  <span className="flex justify-between text-lg items-center font-bold">
                    Sizes{" "}
                    <i className="">
                      <IoIosArrowDown />
                    </i>
                  </span>
                </div>
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
              {allProducts.map((cloth, ind) => {
                return (
                  <NavLink
                    to={`/MainProduct`}
                    key={ind}>
                    <div
                      key={cloth.id}
                      className="w-full flex justify-evenly items-start  flex-col"
                      onClick={() => dispatch(AddItemInDesc(cloth))}>
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
                  </NavLink>
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
