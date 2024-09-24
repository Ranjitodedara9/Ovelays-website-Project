/* eslint-disable no-constant-condition */
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import logo from "./Overlays_Flame_Logo_150x150_2_150x.jpg";
import { RiShoppingBag2Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import MobNav from "./MobNav";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { showPopUp } from "../Redux/MySlices";
const Navbar = ({ setshowcart }) => {
  const [shownav, setshownav] = useState(false);
  const [searchclic, setsearchclic] = useState(false);
  const [man, setman] = useState(false);
  const [Woman, setWoman] = useState(false);
  const [dark, setdark] = useState(false);
  const [Rich, setRich] = useState(false);
  const [GetInTouch, setGetintouch] = useState(false);
  const data = useSelector((val) => val.mainslice.CartItem);

  const dispatch = useDispatch();
  const menu = [
    "Home",
    "shop All",

    {
      Men: {
        head: "Men",
        sublink: [
          "jacket",
          "oversize-tshirt",
          "fullsleeve-shirt",
          "halfsleeve-shirt",
          "hoodie",
          "tshirt",
          "bottom",
          "shirt",
          "polo t-shirt",
        ],
      },
      Woman: {
        head: "Woman",
        sublink: [
          "Empower Her",
          "Crop Top",
          "Hoodies",
          "Sweatshirts",
          "Bottoms",
        ],
      },

      Rich: {
        head: "Rich Cotton",
        sublink: ["Supima + modal", "Supima"],
      },
      GetInTouch: {
        head: "Get In Touch",
        sublink: ["FAQ", "About Us", "Contact Us"],
      },
    },
  ];

  return (
    <div className=" relative z-50">
      <div className={`bg-white  w-full z-30 fixed `}>
        <div className="w-full flex h-[38px]   items-center justify-center bg-[#F3F2F5]   uppercase ">
          <marquee>
            {" "}
            <div className="flex gap-60 ">
              <p className="text-[13px] z-0 teb:text-[15px]">
                SAVE UPTO 499/- | USE CODE MARCH15
              </p>
              <p>Get up to 399 off on 3 OV FREE TECH /- CODE: SAVEBIG15</p>
              <p>Get up to 499 off on 3999 /- Code: HIGH24</p>
            </div>
          </marquee>
        </div>
        <div className={`h-[65px]  grid grid-cols-3 teb:h-[75px] z-20`}>
          <div className="z-20 flex items-center justify-center gap-2 teb:justify-start teb:ms-7">
            {/* Attach handleMenuClick function to HiBars3 icon */}
            <span
              className="lep:hidden"
              onClick={() => setshownav(!shownav)}>
              <HiBars3 className="w-[30px] h-[26px]" />
            </span>
            <span onClick={() => setsearchclic(!searchclic)}>
              <IoIosSearch className="w-[30px] h-[30px]" />
            </span>
            <input
              type="text"
              placeholder="what are you looking for"
              className="bg-transparent placeholder:text-[16px] placeholder:p-3 lep:block hidden  "
              onClick={() => setsearchclic(!searchclic)}></input>
          </div>
          <div className="flex items-center justify-center ">
            <span>
              <img
                src={logo}
                onClick={() => setdark(!dark)}
                height="55px"
                width="55px"
                className="teb:h-[70px] teb:w-[70px]"
              />
            </span>
          </div>
          <div className="flex items-center justify-end teb:gap-3 teb:me-5">
            <NavLink
              to="/admin"
              state={{ ok: true }}>
              <span className="w-[25px]  h-[25px] hidden teb:block">
                <MdOutlineEmail className="w-full h-full" />
              </span>
            </NavLink>{" "}
            <span
              className="w-[25px] h-[25px] hidden teb:block"
              onClick={() => dispatch(showPopUp(true))}>
              <MdOutlinePerson className="w-full h-full" />
            </span>
            <span
              className="teb:h-[25px] flex justify-center  items-center teb:w-[50px] me-6 h-[25px] w-[25px]"
              onClick={() => setshowcart(true)}>
              <RiShoppingBag2Line className="w-full h-full " />
              <p className=" p-2 bg-orange-500 text-white rounded-full w-[20px] h-[20px] flex justify-center items-center absolute top-14 right-12">
                {data.length}
              </p>
            </span>
          </div>
        </div>
        <hr className=" mx-auto w-[94%] border-[1px] border-gray-600/75"></hr>
        <div className="hidden lep:block">
          {" "}
          <div className="flex w-full    h-[60px] gap-4 justify-center items-center uppercase  border-b-[1px] ">
            {menu.map((val, ind) => {
              if (typeof val === "string") {
                return (
                  <p
                    className="hover:border-b-[1px] hover:border-black "
                    key={ind}>
                    <NavLink
                      to={
                        ind == 0
                          ? "/"
                          : "/MainProduct" || ind == 1
                          ? "/ShopAll/allproducts"
                          : "/"
                      }
                      state={{ ok: true, NavValue: "allproducts" }}>
                      {val}
                    </NavLink>
                  </p>
                );
              } else {
                return (
                  <>
                    <p
                      onMouseEnter={() => setman(!man)}
                      onMouseLeave={() => setman(false)}>
                      {val.Men.head}
                    </p>
                    {man && (
                      <div
                        className="absolute   mt-[21%]  p-2 ms-[-6%]"
                        onMouseLeave={() => setman(!man)}
                        onMouseEnter={() => setman(true)}>
                        <span className="flex flex-col gap-2 mx-4 bg-white mt-[23%] border-[1px] p-3">
                          {val.Men.sublink.map((val, ind) => {
                            return (
                              <NavLink
                                to={`/ShopAll/${val}`}
                                state={{ NavValue: val }}>
                                <p key={ind}>{val}</p>
                              </NavLink>
                            );
                          })}
                        </span>
                      </div>
                    )}
                    <p
                      onMouseEnter={() => setWoman(!Woman)}
                      onMouseLeave={() => setWoman(false)}>
                      {val.Woman.head}
                    </p>
                    {Woman && (
                      <div
                        className="absolute   mt-[14%]   p-2"
                        onMouseLeave={() => setWoman(!Woman)}
                        onMouseEnter={() => setWoman(true)}>
                        <span className="flex flex-col gap-2 mx-4 bg-white mt-[29%] ms-[-2%] p-3 border-[1px]">
                          {val.Woman.sublink.map((val, ind) => {
                            return <p key={ind}>{val}</p>;
                          })}
                        </span>
                      </div>
                    )}
                    <p>Sale</p>
                    <p
                      onMouseEnter={() => setRich(!Rich)}
                      onMouseLeave={() => setRich(false)}>
                      {val.Rich.head}
                    </p>
                    {Rich && (
                      <div
                        className="absolute   mt-[7%] ms-[15%]   p-2"
                        onMouseLeave={() => setRich(!Rich)}
                        onMouseEnter={() => setRich(true)}>
                        <span className="flex flex-col gap-2 mx-4 bg-white mt-[25%] ms-[22%] p-3 border-[1px]">
                          {val.Rich.sublink.map((val, ind) => {
                            return <p key={ind}>{val}</p>;
                          })}
                        </span>
                      </div>
                    )}
                    <p
                      onMouseEnter={() => setGetintouch(!GetInTouch)}
                      onMouseLeave={() => setGetintouch(false)}>
                      {val.GetInTouch.head}
                    </p>
                    {GetInTouch && (
                      <div
                        className="absolute   mt-[7%] ms-[38%]   p-2"
                        onMouseLeave={() => setGetintouch(!GetInTouch)}
                        onMouseEnter={() => setGetintouch(true)}>
                        <span className="flex flex-col gap-2 mx-4 bg-white mt-[49%] ms-[22%] p-3 border-[1px]">
                          {val.GetInTouch.sublink.map((val, ind) => {
                            return <p key={ind}>{val}</p>;
                          })}
                        </span>
                      </div>
                    )}
                  </>
                );
              }
            })}
          </div>
        </div>
      </div>
      {/* MobNav with adjusted z-index */}{" "}
      <MobNav
        shownav={shownav}
        setshownav={setshownav}
        searchclic={searchclic}
        setsearchclic={setsearchclic}
        menu={menu}
      />
    </div>
  );
};
export default Navbar;
