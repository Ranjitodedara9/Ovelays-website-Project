/* eslint-disable react/jsx-key */
import { lazy, Suspense, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddItemInDesc } from "../Redux/MySlices";
import { LiaDownloadSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

const Filter = lazy(() => import("./Filter.jsx"));
const ShopAll = () => {
  const [allProducts, setAllProd] = useState([]);
  const [filterprod, setfilterprod] = useState([]);
  const [showPriceBox, setshowPriceBox] = useState(false);
  const [paging, setpagig] = useState(1);
  const [ProdType, setProdType] = useState([]);
  const [showprodType, setshowprodType] = useState(false);
  const [Rangeval, SetRangeValur] = useState(100);
  const [Type, setType] = useState([]);
  const [Fill, setFILL] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [DefaultProd, setDefaultAllProd] = useState([]);
  const lastelem = paging * 6;
  const firstelem = lastelem - 6;
  let pagingprod = filterprod.slice(firstelem, lastelem);
  const location = useLocation();
  console.log(location.state.NavValue);
  const fetchallprod = async () => {
    const fetdata = await fetch(
      `http://localhost:4000/products/allProd/${location.state.NavValue}`
    );
    const getjes = await fetdata.json();
    setAllProd(getjes);
    setfilterprod(getjes);
    setFILL(getjes);
    setDefaultAllProd(getjes);
  };

  useEffect(() => {
    fetchallprod();
  }, [location.state.NavValue]);

  const dispatch = useDispatch();
  const pagig = Math.ceil(filterprod.length / 6);
  const pagigArr = new Array(pagig).fill(pagig);
  const d = useSelector((val) => val.mainslice.FilterProd);

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

    setProdType(TypeWithLength);
  };
  const setFilterOnRange = (R) => {
    SetRangeValur(Number(R));

    setLoading(true); // Show loading spinner
    setTimeout(() => {
      const resultOfRangeFill = Fill.filter((val) => val.price <= Rangeval);
      setAllProd(resultOfRangeFill);
      setLoading(false); // Hide loading spinner after filtering is done
    }, 500); // 500ms delay to simulate loading
  };

  const SetFilterWithCat = (e) => {
    setLoading(true);
    setTimeout(() => {
      let updatedFill = [...DefaultProd]; // Make a copy of Fill
      if (e.target.checked) {
        var a = updatedFill.filter((val) => val.prodinfo === e.target.value);
        a.forEach((val) => (val.check = true));
        let sh = updatedFill.filter((val) => val.check === true);
        setAllProd(sh);
        setFILL(sh);
        setLoading(false);
      } else {
        let reje = updatedFill.filter((val) => val.prodinfo === e.target.value);
        reje.forEach((val) => (val.check = false));
        let final = updatedFill.filter((val) => val.check === true);
        if (final.length > 0) setAllProd(final);
        else fetchallprod();
        setLoading(false);
      }
    }, 500);
  };

  return (
    <>
      <div>
        <div className="mt-[22vh] h-[10vh] lep:h-[20vh] teb:mt-[28vh]">
          <h1 className="uppercase lep:text-4xl text-center p-3 font-semibold text-2xl">
            {location.state.NavValue}
          </h1>
        </div>
        <div className="flex flex-col justify-center  items-start lep:grid lep:grid-cols-[auto_1fr]">
          <div className="lep:sticky lep:top-[28vh]   w-[25vw] h-screen hidden lep:block">
            <Suspense fallback={<div>Loading.....</div>}>
              <Filter
                showpriceBox={showpriceBox}
                showPriceBox={showPriceBox}
                Type={Type}
                Fill={Fill}
                fetchallprod={fetchallprod}
                Rangeval={Rangeval}
                setFilterOnRange={setFilterOnRange}
                setAllProd={setAllProd}
                ProdType={ProdType}
                showprodType={showprodType}
                ShowProdType={ShowProdType}
                SetFilterWithCat={SetFilterWithCat}
              />
            </Suspense>
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
              {Loading ? (
                <div className="flex justify-center w-full items-center">
                  <span>Loading.....</span>
                </div>
              ) : Array.isArray(allProducts) && allProducts.length > 0 ? (
                allProducts.map((cloth, ind) => {
                  return (
                    <NavLink
                      to={`/MainProduct`}
                      key={ind}>
                      <div
                        key={cloth.id}
                        className="w-full flex justify-evenly items-start flex-col"
                        onClick={() => dispatch(AddItemInDesc(cloth))}>
                        <img
                          src={cloth.img}
                          className="w-[90%] mx-auto p-2 lep:w-[100%] lep:h-[70vh]"
                        />
                        <h1 className="w-[80%] ms-4 font-head2 text-center text-[0.875rem]">
                          {cloth.name}
                        </h1>
                        <p className="flex justify-center w-full font-semibold text-lg items-center text-center">
                          <LiaRupeeSignSolid />
                          {cloth.price}.00
                        </p>
                        <div className="flex justify-center items-center gap-1 w-full">
                          {Array.isArray(cloth.size) &&
                            cloth.size.map((size) => (
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
                })
              ) : (
                <div>No products found.</div>
              )}
            </div>
            <div className="flex justify-center items-center mt-2">
              {pagigArr.map((val, ind) => {
                return (
                  <>
                    <span
                      className="border-[1px] border-black p-2 m-1"
                      onClick={() => setpagig(ind + 1)}>
                      {ind + 1}
                    </span>
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

export default ShopAll;
