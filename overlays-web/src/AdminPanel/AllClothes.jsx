import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { EditClo } from "../Redux/MySlices";
const AllClothes = () => {
  const [Products, setProducts] = useState([]);
  const [pagingind, setpagingind] = useState(1);
  const pagingNum = Math.ceil(Products.length / 8);

  const dispatch = useDispatch();
  const realpagin = new Array(pagingNum).fill(pagingNum);
  console.log(realpagin);
  const firstind = pagingind * 8;
  const lastind = firstind - 8;

  const myslice = Products.slice(lastind, firstind);
  console.log(myslice);
  const pagingProd = Products.filter((val, ind) => ind < 8);
  console.log(pagingProd);
  useEffect(() => {
    const fetchallprod = async () => {
      const fetdata = await fetch("http://localhost:4000/products/allProd");
      const getjes = await fetdata.json();
      console.log(getjes);
      setProducts(getjes);
    };
    fetchallprod();
  }, []);
  const fetchdeletecloth = async (ind) => {
    const fetchdet = await fetch("http://localhost:4000/products/DeleteCloth", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ind: ind }),
    });
    const getjes = await fetchdet.json();
    console.log(getjes);
    if (getjes) {
      window.location.reload(true);
    } else {
      alert("check your code");
    }
  };
  const deleteCloth = (ind) => {
    console.log(ind);
    fetchdeletecloth(ind);
  };
  return (
    <>
      <div className="text-white flex justify-center h-[90vh] items-center">
        <div className="grid grid-cols-4 justify-center items-center px-5  gap-3 w-full">
          {myslice.map((val) => {
            return (
              <>
                <div className="flex flex-col justify-center items-center w-full ">
                  <img
                    src={val.img}
                    width={120}
                    height={200}
                  />
                  <h1 className="text-center">{val.name}</h1>
                  <div className="flex gap-2 mt-1">
                    <button
                      className="border-[1px] border-red-700 p-1 bg-red-700"
                      onClick={() => deleteCloth(val._id)}>
                      DELETE
                    </button>

                    <NavLink
                      to="/admin/addcloth"
                      state={{ res: "edit" }}>
                      {" "}
                      <button
                        className="border-[1px] border-green-700 p-1 bg-green-700"
                        onClick={() => dispatch(EditClo(val))}>
                        EDIT
                      </button>
                    </NavLink>
                  </div>
                </div>{" "}
              </>
            );
          })}
        </div>
      </div>

      <div className="text-white flex justify-center items-center gap-2 ">
        {" "}
        <button
          className="border-[1px] p-2 bg-red-700 uppercase"
          onClick={() =>
            setpagingind(() => (pagingind > 1 ? pagingind - 1 : 1))
          }>
          Prev
        </button>
        {realpagin.map((val, ind) => (
          // eslint-disable-next-line react/jsx-key
          <span
            className="border-[1px] p-2 "
            onClick={() => setpagingind(ind + 1)}>
            {ind + 1}
          </span>
        ))}
        <button
          className="border-[1px] bg-green-700 p-2"
          onClick={() =>
            setpagingind(() =>
              pagingNum === pagingind ? pagingind : pagingind + 1
            )
          }>
          Next
        </button>
      </div>
    </>
  );
};

export default AllClothes;
