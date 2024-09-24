import React, { useEffect } from "react";
import { useState, useRef } from "react";

import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@radix-ui/themes/dist/cjs/index.js";
import { AlertDialog } from "@radix-ui/themes/dist/cjs/index.js";
import { Flex } from "@radix-ui/themes/dist/cjs/index.js";
import { TextField } from "@radix-ui/themes/dist/cjs/index.js";
import DisplyProducts from "./DisplyProducts";
const Products = () => {
  const [success, setsuccess] = useState();
  const [clothes, setclothes] = useState({
    imgurl: null,
    hovimg: null,
    clothnm: null,
    number: null,
    clothinfo: null,
    size: [],
  });
  const location = useLocation();
  const navigate = useNavigate();
  const sendclothes = (e) => {
    const { value, name } = e.target;
    setclothes((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const data = useSelector((val) => val.mainslice.EditItemArr);
  console.log(data);

  const setsize = (e) => {
    const size = e.target.value;

    setclothes((prev) => {
      const newSizeArray = e.target.checked
        ? [...prev.size, size]
        : prev.size.filter((s) => s !== size);

      return {
        ...prev,
        size: newSizeArray,
      };
    });
  };
  const sendclothesfetch = async () => {
    const getfet = await fetch("http://localhost:4000/products/createcloth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothes),
    });
    const getjes = await getfet.json();
    console.log(getjes);
    setsuccess(getjes);
  };

  const fetcheditcloth = async () => {
    const fetchdata = await fetch("http://localhost:4000/products/EditCloth", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(clothes),
    });
    const getjes = await fetchdata.json();
    console.log(getjes);
    if (getjes.mes === "done") {
      navigate("/admin/allcloth");
    }
  };
  const editcloth = () => {
    fetcheditcloth();
  };
  useEffect(() => {
    // Update clothes state with initial data from Redux store if available
    if (data) {
      setclothes({
        ind: data._id || "",
        imgurl: data.img || "",
        hovimg: data.hovimg || "",
        clothnm: data.name || "",
        number: data.price || "",
        clothinfo: data.prodinfo || "",
        size: data.size || [],
      });
    }
  }, [data]);

  const sendonlick = () => {
    sendclothesfetch();
  };
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <button className="bg-black p-2 text-white rounded-md float-right m-3">
            Add Product
          </button>
        </AlertDialog.Trigger>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Add Product</AlertDialog.Title>
          <AlertDialog.Description size="2">
            <div className="flex *:font-semibold flex-col gap-2 p-2">
              <div>
                <span>image Url</span>
                <TextField.Root
                  name="imgurl"
                  type="text"
                  value={clothes.imgurl}
                  placeholder="add img url"
                  onChange={(e) => sendclothes(e)}
                  className=" bg-transparent border-[1px] border-white p-2"
                />
              </div>
              <div>
                <span>Hover Image Url</span>
                <TextField.Root
                  name="hovimg"
                  type="text"
                  placeholder="add hover img url"
                  value={clothes.hovimg}
                  onChange={(e) => sendclothes(e)}
                  className=" bg-transparent border-[1px] border-white p-2"
                />
              </div>
              <div>
                <span>Product Name</span>
                <TextField.Root
                  name="clothnm"
                  type="text"
                  value={clothes.clothnm}
                  placeholder="add cloth name"
                  onChange={(e) => sendclothes(e)}
                  className=" bg-transparent border-[1px] border-white p-2"
                />
              </div>
              <div>
                <span>Product Price</span>
                <TextField.Root
                  name="number"
                  type="number"
                  value={clothes.number}
                  placeholder="add cloth price"
                  onChange={(e) => sendclothes(e)}
                  className=" bg-transparent border-[1px] border-white p-2"
                />
              </div>
              <div>
                <span>Product Type</span>
                <TextField.Root
                  name="clothinfo"
                  type="text"
                  value={clothes.clothinfo}
                  placeholder="add cloth info"
                  onChange={(e) => sendclothes(e)}
                  className=" bg-transparent border-[1px] border-white p-2"
                />
              </div>
              <h1>Add Size </h1>
              <div>
                SM &nbsp;
                <input
                  type="checkbox"
                  name="sm"
                  value="SM"
                  onChange={(e) => setsize(e)}
                />
                &nbsp;M &nbsp;
                <input
                  type="checkbox"
                  value="M"
                  name="m"
                  onChange={(e) => setsize(e)}
                />
                &nbsp;L &nbsp;
                <input
                  type="checkbox"
                  value="L"
                  name="l"
                  onChange={(e) => setsize(e)}
                />
                &nbsp; XL &nbsp;
                <input
                  type="checkbox"
                  value="XL"
                  name="xl"
                  onChange={(e) => setsize(e)}
                />
                &nbsp;XXL &nbsp;
                <input
                  type="checkbox"
                  name="xxl"
                  value="XXL"
                  onChange={(e) => setsize(e)}
                />
              </div>
            </div>
          </AlertDialog.Description>

          <Flex
            gap="3"
            mt="4"
            justify="end">
            <AlertDialog.Cancel>
              <Button
                variant="soft"
                color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button
                variant="solid"
                color="red"
                onClick={sendonlick}>
                Add Product
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>{" "}
      <DisplyProducts />
    </>
  );
};

export default Products;
