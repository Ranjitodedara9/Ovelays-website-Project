import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

import { IoIosSearch } from "react-icons/io";

import "animate.css";
// eslint-disable-next-line react/prop-types
const MobNav = ({ shownav, setshownav, searchclic, setsearchclic, menu }) => {
  const [man, setman] = useState(false);
  const [woman, setwoman] = useState(false);
  const [sale, setsale] = useState(false);
  const [getintouch, setgetintouch] = useState(false);

  return (
    <div className="fixed top-0 z-50 w-full">
      <div
        className={`w-[90%]  animate__animated animate__fadeInLeft teb:w-1/2  absolute lep:w-1/3  text-black z-40  h-svh flex-col bg-white  flex  justify-center 
           
          }`}
        style={
          shownav || searchclic ? { display: "block" } : { display: "none" }
        }>
        <div className="flex justify-start w-full ">
          <span className="flex items-center justify-between gap-4 p-2 mt-3 text-2xl lep:gap-20 ms-8">
            {shownav && <RxCross1 onClick={() => setshownav(!shownav)} />}{" "}
            {searchclic && (
              <>
                <div className="flex items-center justify-between -ms-4">
                  <IoIosSearch />
                  <input
                    type="text"
                    placeholder="what are you looking for"
                    className="bg-transparent placeholder:text-[16px] placeholder:p-3 mb-2 "></input>{" "}
                </div>

                <RxCross1 onClick={() => setsearchclic(!searchclic)} />
              </>
            )}
          </span>
        </div>
        <div
          className={`flex flex-col   p-3  font-serif w-full gap-4 mt-4 overflow-y-auto h-[70%] scrollbar scrollbar-track-white scrollbar-thumb-slate-100 ${
            searchclic ? "gap-10" : ""
          }`}>
          {
            // eslint-disable-next-line react/prop-types
            menu.map((val, index) => {
              if (typeof val === "string") {
                return (
                  <>
                    <p
                      className="p-0 text-2xl uppercase"
                      key={index}>
                      {val}
                    </p>
                    <hr className="w-[90%]"></hr>
                  </>
                );
              } else {
                return (
                  <>
                    <p className="flex items-center justify-between p-2 text-2xl uppercase">
                      {val.Men.head}
                      {!searchclic && (
                        <FaAngleDown onClick={() => setman(!man)} />
                      )}
                    </p>
                    <hr className="w-[90%]"></hr>
                    {man || searchclic
                      ? val.Men.sublink.map((val, ind) => {
                          return (
                            <>
                              <h1
                                className="ms-2 text-[18px] "
                                key={ind}>
                                {val}
                              </h1>
                            </>
                          );
                        })
                      : ""}{" "}
                    <hr className="w-[90%]"></hr>
                    <p className="flex items-center justify-between gap-1 p-2 text-2xl uppercase">
                      {val.Woman.head}{" "}
                      {!searchclic && (
                        <FaAngleDown onClick={() => setwoman(!woman)} />
                      )}
                    </p>
                    <hr className="w-[90%]"></hr>
                    {woman || searchclic
                      ? val.Woman.sublink.map((val, ind) => {
                          return (
                            <>
                              <h1
                                className="ms-2 text-[18px]"
                                key={ind}>
                                {val}
                              </h1>
                            </>
                          );
                        })
                      : ""}{" "}
                    <hr className="w-[90%]"></hr>
                    <h1 className="text-2xl uppercase ms-2">Sale</h1>
                    <hr className="w-[90%]"></hr>
                    <p className="flex items-center justify-between p-2 text-2xl uppercase ">
                      {val.Rich.head}{" "}
                      {!searchclic && (
                        <FaAngleDown onClick={() => setsale(!sale)} />
                      )}
                    </p>
                    <hr className="w-[90%]"></hr>
                    {sale || searchclic
                      ? val.Rich.sublink.map((val, ind) => {
                          return (
                            <>
                              <h1
                                className="ms-2 text-[18px]"
                                key={ind}>
                                {val}
                              </h1>
                            </>
                          );
                        })
                      : ""}{" "}
                    <p className="flex items-center justify-between p-2 text-2xl uppercase">
                      {val.GetInTouch.head}{" "}
                      {!searchclic && (
                        <FaAngleDown
                          onClick={() => setgetintouch(!getintouch)}
                        />
                      )}
                    </p>
                    <hr className="w-[90%]"></hr>
                    {getintouch || searchclic ? (
                      <>
                        {val.GetInTouch.sublink.map((val, ind) => (
                          <h1
                            className="ms-2 text-[18px]"
                            key={ind}>
                            {val}
                          </h1>
                        ))}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                );
              }
            })
          }
        </div>
        <hr className="border-[1px] border-gray-300/25"></hr>
        <div className="h-[20%] pb-10">
          <span className="flex items-center h-full gap-3 my-auto text-2xl ms-7 ">
            <IoPersonOutline className="" /> <p className="">Account</p>
          </span>
        </div>
      </div>

    </div>
  );
};

export default MobNav;
