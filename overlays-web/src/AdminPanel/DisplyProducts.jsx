import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { EditClo } from "../Redux/MySlices";
import { useLocation } from "react-router-dom";
const DisplyProducts = () => {
  const location = useLocation();
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
      const fetdata = await fetch(
        `http://localhost:4000/products/allProd/${location.state.NavValue}`
      );
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
      <div>
        <table className="table-auto border-collapse border w-[100%]  text-center">
          <thead>
            <tr className="border">
              <th className="border px-4 py-2">Image</th>
              <th className="border px-4 py-2">Hover Image</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myslice.map((val) => (
              <tr key={val._id}>
                <td className="border px-4 py-2">
                  <img
                    src={val.img}
                    alt={val.name}
                    width={120}
                    height={200}
                  />
                </td>
                <td className="border px-4 py-2">
                  <img
                    src={val.hovimg} // assuming you have hover image data in val.hoverImg
                    alt={val.name}
                    width={120}
                    height={200}
                  />
                </td>
                <td className="border px-4 py-2">{val.name}</td>
                <td className="border px-4 py-2">${val.price}</td>
                <td className="border px-4 py-2">{val.prodinfo}</td>
                <td className="border px-4 py-2">
                  <div className="flex gap-2 justify-center">
                    <button
                      className="border-[1px] border-red-700 p-1 bg-red-700 text-white"
                      onClick={() => deleteCloth(val._id)}>
                      DELETE
                    </button>
                    <NavLink
                      to="/admin/addcloth"
                      state={{ res: "edit" }}>
                      <button
                        className="border-[1px] border-black text-white p-1 bg-black"
                        onClick={() => dispatch(EditClo(val))}>
                        EDIT
                      </button>
                    </NavLink>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="text-black flex justify-center items-center gap-2  mt-4">
          {" "}
          <button
            className="border-[1px] p-2 bg-black text-white uppercase"
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
            className="border-[1px] bg-black text-white p-2"
            onClick={() =>
              setpagingind(() =>
                pagingNum === pagingind ? pagingind : pagingind + 1
              )
            }>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default DisplyProducts;
