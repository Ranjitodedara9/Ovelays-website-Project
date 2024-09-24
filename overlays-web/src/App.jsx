import Navbar from "./HomePage/Navbar";
import AdminPanel from "./AdminPanel/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./HomePage/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import MainHome from "./MainHome";
import Cart from "./HomePage/Cart";
import { lazy, useState } from "react";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import Users from "./Pages/Users.jsx";
import LoginUser from "./LoginUser.jsx";
import SignUp from "./SignUp.jsx";

const ItemDesc = lazy(() => import("./ItemInfo/ItemDesc.jsx"));
const ShopAll = lazy(() => import("./Pages/ShopAll.jsx"));
const App = () => {
  const [showcart, setshowcart] = useState(false);
  window.scroll(0, 0);
  const location = useLocation();

  return (
    <div className={`min-h-screen grid grid-rows-[auto_1fr_auto] `}>
      {location.pathname !== "/admin/Orders" &&
        location.pathname !== "/admin/Products" &&
        location.pathname !== "/admin/dashboard" &&
        location.pathname !== "/admin/" &&
        location.pathname !== "/admin" && <Navbar setshowcart={setshowcart} />}
      <Cart
        showcart={showcart}
        setshowcart={setshowcart}
      />
      <Routes>
        <Route
          path="/"
          element={<MainHome />}></Route>

        <Route
          path="/MainProduct"
          element={
            <Suspense fallback={<div>Loading.....</div>}>
              <ItemDesc />
            </Suspense>
          }></Route>

        <Route
          path="/ShopAll/*"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center items-center h-screen w-full">
                  Loading....
                </div>
              }>
              <ShopAll />
            </Suspense>
          }
        />
      </Routes>
      {location.pathname !== "/admin/Orders" &&
        location.pathname !== "/admin/Products" &&
        location.pathname !== "/admin/dashboard" &&
        location.pathname !== "/admin/" &&
        location.pathname !== "/admin" && <Footer />}

      <Routes>
        <Route
          path="/admin/*"
          element={<AdminPanel />}
        />
      </Routes>
      <LoginUser />
      <SignUp />
    </div>
  );
};

export default App;

