import { useEffect, useState } from "react";
import { LiaRupeeSignSolid } from "react-icons/lia";
import LazyLoad from "react-lazy-load";
import { AddItemInDesc } from "../Redux/MySlices";
import Slider from "react-slick";

import { TypeAnimation } from "react-type-animation";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
function SampleNextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "black",
        width: "40px",
        height: "40px",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        border: "1px solid black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "black",
        width: "40px",
        height: "40px",
        borderRadius: "100%",

        justifyContent: "center",
        alignItems: "center",
        color: "black",
        border: "1px solid black",
      }}
      onClick={onClick}
    />
  );
}
const DiscoverSlider = () => {
  const [Products, setProducts] = useState([]);

  const fetchdiscoverData = async () => {
    const fetchdata = await fetch(
      "http://localhost:4000/products/oversized-tshirt"
    );
    const getjes = await fetchdata.json();
    setProducts(getjes);
  };
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    fetchdiscoverData();
  }, []);

  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="mt-3 mb-4 text-3xl text-center teb:text-3xl teb:font-semibold teb:uppercase lep:text-5xl">
        <span className="text-orange-500">Discover</span>{" "}
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "B",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "BE",
            1000,
            "BES",
            1000,
            "BEST",
            1000,
            "BESTS",
            1000,
            "BESTSE",
            1000,
            "BESTSEL",
            1000,
            "BESTSELL",
            1000,
            "BESTSELLE",
            1000,
            "BESTSELLER",
            1000,
          ]}
          wrapper="span"
          speed={100}
          style={{ fontSize: "1em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h1>

      <div className="flex items-center justify-center lep:p-10 lep:grid lep:grid-cols-1 lep:place-content-center lep:w-[90%] lep:mx-auto ">
        <Slider
          {...settings}
          className="flex w-[70%] teb:w-[90%]  justify-center items-center lep:block lep:w-full">
          {Products.map((val, ind) => {
            return (
              <>
                <NavLink
                  to={`/MainProduct`}
                  key={ind}>
                  <div
                    className=" ms-3"
                    key={ind}
                    onClick={() => dispatch(AddItemInDesc(val))}>
                    <LazyLoad>
                      <img
                        src={val.img}
                        className="w-full  h-[331.5px]  rounded-md teb:w-[320px] "
                      />
                    </LazyLoad>

                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <p className="text-center">{val.name}</p>
                      <p className="flex items-center">
                        <LiaRupeeSignSolid />
                        {val.price}
                      </p>
                      <span className="flex gap-1 p-2">
                        {val.size.map((val, ind) => (
                          <span
                            className="p-1 text-sm border-2"
                            key={ind}>
                            {val}
                          </span>
                        ))}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default DiscoverSlider;
