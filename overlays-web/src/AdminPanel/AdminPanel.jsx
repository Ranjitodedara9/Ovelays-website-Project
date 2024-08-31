import AddClothes from "./AddClothes";
import AllClothes from "./AllClothes";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EditClo } from "../Redux/MySlices";
const AdminPanel = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setaddclothes = () => {
    dispatch(EditClo(null));
    navigate("/admin/addcloth");
  };

  const setallclothes = () => {
    navigate("/admin/allcloth");
  };

  const myeye = document.getElementsByClassName("sm-eye");

  window.addEventListener("mousemove", (e) => {
    const clientx = (e.clientX * 100) / window.innerWidth + "%";
    const clienty = (e.clientY * 100) / window.innerHeight + "%";

    for (var i = 0; i < 2; i++) {
      myeye[i].style.left = clientx;
      myeye[i].style.top = clienty;

      myeye[i].style.transform = `translate(-${clientx},-${clienty})`;
    }
  });
  return (
    <>
      <div className="flex flex-col items-center justify-start w-full lep:flex-row lep:h-screen bg-slate-800">
        <div className="flex flex-col items-center justify-start w-full  mob:mt-5 lep:w-[50%] lep:border-[1px] lep:border-solid lep:border-white lep:h-screen  lep:mt-0">
          <h1 className="text-orange-600 uppercase mt-4 text-4xl">
            OverLays <span className="text-white">Web</span>
          </h1>
          <div className="w-full  h-[300px] flex justify-center items-center">
            <div className="w-full flex justify-center items-center h-1/2 bg-black">
              <div className="flex gap-2">
                <div className="w-[100px] h-[100px] bg-white rounded-full relative flex justify-center items-center">
                  <div className="w-10 h-10 bg-black rounded-full absolute left-10 top-2 sm-eye"></div>
                </div>
                <div className="w-[100px] h-[100px] bg-white rounded-full relative flex justify-center items-center">
                  <div className="w-10 h-10 bg-black rounded-full absolute right-10 top-2 sm-eye"></div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="p-2 font-bold text-lg text-white capitalize">
            HELLO ADMIN :{" "}
            <span className="text-orange-600">Ranjit odedara</span>
          </h1>
          <hr className=" mx-auto text-white w-[90%]" />
          <div className="flex flex-col items-center justify-center gap-2 mt-3  text-2xl  text-white capitalize">
            {" "}
            <h3 onClick={setaddclothes}>Add Clothes</h3>
            <h3 onClick={setallclothes}>All Clothes</h3>
            <NavLink to="/">
              <h3>Go To Web</h3>
            </NavLink>
          </div>
        </div>
        <div className="w-full  h-screen mob:mt-5  lep:mt-0">
          <Routes>
            <Route
              path="addcloth"
              element={<AddClothes />}
            />
            <Route
              path="allcloth"
              element={<AllClothes />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
