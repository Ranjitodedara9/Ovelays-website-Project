import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto  mt-4 bg-[#F2F2F2] grid grid-cols-1 lep:grid-cols-2  lep:p-4 lep:place-content-center lep:place-items-center ">
        <div className="grid grid-cols-2 p-3 ">
          <div className="">
            <h1 className="text-sm font-bold uppercase ">about us</h1>
            <ul className="flex flex-col gap-3 mt-3 text-sm font-semibold">
              <li>Overlays clothing Pvt Ltd</li>
              <div>
                <li>Explore To CHANGE.</li>
                <li className="underline ">Learn More</li>
              </div>
            </ul>
          </div>
          <div>
            <h1 className="text-sm font-bold uppercase">Policies</h1>
            <ul className="flex flex-col gap-3 mt-3 text-sm font-semibold">
              <li>Return Your Order</li>

              <li>Shiping Policies</li>
              <li className="">Return,Refund, And Cansellation</li>
              <li>Terms and condition</li>
              <li>Privicy Policy</li>
              <li>Fraud Protection</li>
            </ul>
          </div>
        </div>
        <div className=" teb:grid teb:grid-cols-2 teb:ps-5">
          <div className="flex flex-col gap-2 p-3 mt-3">
            <h1 className="font-bold uppercase  text-[12px]">NewsLetter</h1>
            <ul className="flex flex-col gap-3 ">
              <li className="w-[80%] text-[14px] font-semibold">
                You can be the first one to know about our new releases, latest
                offers and more.{" "}
                <a
                  href="#"
                  className="underline ">
                  Sign Up Now!
                </a>
              </li>
              <li>
                <input
                  type="text"
                  placeholder="Your E-mail"
                  className=" px-[18px] w-[325px] h-[48px] placeholder:text-black  border-[1px] border-gray-400/40 rounded-md"
                />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 p-3 ">
            <h1 className=" font-bold text-[12px] uppercase">Follow Us </h1>
            <p className=" text-[14px]">Stay in touch!</p>
            <div className="flex *:border-[1px] *:border-gray-600/45 *:w-10  *:h-10 *:p-3">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </div>
          <div className="mt-3 mb-4">
            <p className=" text-[14px] capitalize">
              Overlays clothing * Powerd by Shopify
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
