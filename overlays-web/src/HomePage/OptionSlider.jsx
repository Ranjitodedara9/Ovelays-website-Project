import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/virtual";
import DiscoverSlider from "./DiscoverSlider";
const OptionSlider = () => {
  const [products, setProducts] = useState([]);
  const fetchdata = async () => {
    const getfet = await fetch("http://localhost:4000/products/optionslide");
    const getjes = await getfet.json();

    setProducts(getjes);
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 ">
        <h1 className="mt-8  text-3xl teb:text-4xl lep:text-5xl font-head2 lep:uppercase  ">
          Use Code: MARCH15
        </h1>
        <p className="text-gray-600 uppercase teb:mt-2 lep:mt-6 lep:mb-6">
          buy to save upto 499/-
        </p>
      </div>
      <div className="flex teb:hidden ps-3">
        <Swiper
          spaceBetween={2} // Adjust the space between slides as needed
          slidesPerView={4} // Number of slides per view
          className="w-full ">
          {products.map((val, index) => (
            <SwiperSlide
              key={index}
              className="mt-8 ">
              <img
                src={val.img}
                alt={val.info}
                className="w-[86px] border-orange-900/25 border-[1px] p-[2px]   h-[86px] rounded-full"
              />
              <p className="text-[10.5px] text-center me-3 mt-2">{val.info}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <DiscoverSlider />
    </div>
  );
};

export default OptionSlider;
