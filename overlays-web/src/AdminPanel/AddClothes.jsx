import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const AddClothes = () => {
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
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-full h-svh flex justify-center items-center flex-col">
        <div className="border-2 text-white border-solid border-white w-full lep:w-1/2  h-[90%] flex flex-col justify-start  items-center gap-3">
          <h1 className="bg-orange-500 mb-10 w-full text-center p-2 text-white uppercase font-bold text-2xl">
            Add Clothes in You web
          </h1>
          {success && (
            <p className="text-green-600 text-lg">Successfully added....</p>
          )}
          <input
            name="imgurl"
            type="text"
            value={clothes.imgurl}
            placeholder="add img url"
            onChange={(e) => sendclothes(e)}
            className=" bg-transparent border-[1px] border-white p-2"
          />
          <input
            name="hovimg"
            type="text"
            placeholder="add hover img url"
            value={clothes.hovimg}
            onChange={(e) => sendclothes(e)}
            className=" bg-transparent border-[1px] border-white p-2"
          />
          <input
            name="clothnm"
            type="text"
            value={clothes.clothnm}
            placeholder="add cloth name"
            onChange={(e) => sendclothes(e)}
            className=" bg-transparent border-[1px] border-white p-2"
          />
          <input
            name="number"
            type="number"
            value={clothes.number}
            placeholder="add cloth price"
            onChange={(e) => sendclothes(e)}
            className=" bg-transparent border-[1px] border-white p-2"
          />
          <input
            name="clothinfo"
            type="text"
            value={clothes.clothinfo}
            placeholder="add cloth info"
            onChange={(e) => sendclothes(e)}
            className=" bg-transparent border-[1px] border-white p-2"
          />
          <hr className="w-full " />
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
          {location.state === null && (
            <button
              className="bg-white text-black p-2 uppercase font-bold"
              onClick={sendonlick}>
              Add Clothes
            </button>
          )}
          {location.state !== null && (
            <button
              className="w-[90%] bg-pink-800 p-2"
              onClick={editcloth}>
              {" "}
              EDIT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddClothes;
