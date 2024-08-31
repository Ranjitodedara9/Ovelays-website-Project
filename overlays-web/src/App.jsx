import Navbar from "./HomePage/Navbar";
import AdminPanel from "./AdminPanel/AdminPanel";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./HomePage/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import MainHome from "./MainHome";
import ItemDesc from "./ItemInfo/ItemDesc";
import ShopAll from "./Pages/ShopAll";
import { useEffect, useState } from "react";

const App = () => {
  window.scroll(0, 0);
  const location = useLocation();
  console.log(location);
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
      {location.pathname !== "/admin/addcloth" &&
        location.pathname !== "/admin/allcloth" &&
        location.pathname !== "/admin" && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={<MainHome />}></Route>
        <Route
          path="/MainProduct"
          element={<ItemDesc />}></Route>
        <Route
          path="/ShopAll"
          element={<ShopAll />}
        />
      </Routes>
      {location.pathname !== "/admin/addcloth" &&
        location.pathname !== "/admin/allcloth" &&
        location.pathname !== "/admin" && <Footer />}

      <Routes>
        <Route
          path="/admin/*"
          element={<AdminPanel />}
        />
      </Routes>
    </div>
  );
};

export default App;

