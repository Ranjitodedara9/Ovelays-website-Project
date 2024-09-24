import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Filter = ({
  showpriceBox,
  showPriceBox,
  Rangeval,
  setFilterOnRange,
  showprodType,
  ShowProdType,
  Type,
  setAllProd,
  fetchallprod,
  Fill,
  ProdType,
  SetFilterWithCat,
}) => {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="ms-3 mt-2">
        <h1 className="font-normal text-2xl capitalize">Filters</h1>
        <hr className="w-[90%] my-2" />
        <div className="me-4 mt-3 p-1">
          <span
            onClick={showpriceBox}
            className="flex justify-between text-lg items-center font-bold">
            Price
            <i>
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
              <div className="flex justify-center items-center gap-2 mt-2">
                <div className="flex justify-center items-center gap-1 border-1 h-8">
                  <LiaRupeeSignSolid />
                  <input
                    type="text"
                    className="w-[50px]"
                    value={Rangeval} // Controlled input
                    onChange={(e) => setFilterOnRange(e.target.value)} // Update state
                  />
                </div>
                to
                <div className="h-8 flex border-1 justify-center items-center gap-1">
                  <LiaRupeeSignSolid />
                  <input
                    type="text"
                    className="w-[50px]"
                    // Add another controlled state variable if necessary
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
            Product Type
            <i>
              <IoIosArrowDown />
            </i>
          </span>
          {showprodType && (
            <div className="grid grid-cols-2 mt-2">
              <div>
                {Type.map((type, ind) => (
                  <div
                    className="p-1"
                    key={ind}>
                    <input
                      type="checkbox"
                      value={type}
                      onChange={(e) => SetFilterWithCat(e)}
                    />{" "}
                    <span>{type}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col p-1 gap-2">
                {ProdType.map((val, index) => (
                  <span key={index}> ({val})</span>
                ))}
              </div>
            </div>
          )}
        </div>
        <hr className="w-[90%] my-2" />
        <div className="me-4 mt-3 p-1">
          <span className="flex justify-between text-lg items-center font-bold">
            Sizes
            <i>
              <IoIosArrowDown />
            </i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
