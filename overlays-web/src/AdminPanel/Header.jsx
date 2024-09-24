import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-[10vh] p-3 border-[0.5px] bg-white border-gray-200/30 items-center flex justify-end w-full">
        <button className="h-[7vh] border-[1px] bg-black rounded-md text-white w-[80px]">
          Logout
        </button>
      </div>
    </>
  );
};

export default Header;
