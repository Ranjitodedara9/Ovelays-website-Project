import { useEffect, useState } from "react";
import insta1 from "./Insta imaged/insta1.jpg";
import insta2 from "./Insta imaged/insta2.jpg";
import insta3 from "./Insta imaged/insta3.jpg";
import insta4 from "./Insta imaged/insta4.jpg";
import insta5 from "./Insta imaged/insta5.jpg";
import insta6 from "./Insta imaged/insta6.jpg";
import insta7 from "./Insta imaged/insta7.jpg";
import insta8 from "./Insta imaged/insta8.jpg";
import insta9 from "./Insta imaged/insta9.jpg";
import insta10 from "./Insta imaged/insta10.jpg";
import insta11 from "./Insta imaged/insta11.jpg";
import insta12 from "./Insta imaged/insta12.jpg";

const InstaImages = () => {
  const [imglen, setimglen] = useState([]);
  const instaimg = [
    insta1,
    insta2,
    insta3,
    insta4,
    insta5,
    insta6,
    insta7,
    insta8,
    insta9,
    insta10,
    insta11,
    insta12,
  ];

  const mob = instaimg.filter((val, ind) => ind < 4);
  const teb = instaimg.filter((val, ind) => ind < 6);
  const lep = instaimg.filter((val, ind) => ind < 12);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setimglen(mob);
      } else if (window.innerWidth <= 768) {
        setimglen(teb);
      } else {
        setimglen(lep);
      }
    };

    // Initial call to set the initial image list
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean-up function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return (
    <>
      <h1 className="mt-5 font-mono text-5xl text-center uppercase">
        Follow Us On Instagram
      </h1>
      <div className="grid items-center justify-center grid-cols-2 gap-0 px-6 mt-5 teb:grid-cols-3 lep:grid-cols-6">
        {imglen.map((img, index) => (
          <>
            <img
              key={index}
              src={img}
              width="100%"
              className={`h-[188px] `}
              alt={`insta${index + 1}`}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default InstaImages;
