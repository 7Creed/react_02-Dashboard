// import React from 'react'

import Navbar from "../../components/admin-navbar/navbar";
import Sidebar from "../../components/admin-sidebar/sidebar";
import MainItems from "../../components/admin-main/main-items";
import Marketing from "../../components/admin-marketing/marketing";
import { Context } from "../../context/context";
import { Route, Routes, useParams } from "react-router-dom";
import { Data } from "../../dates/jummy";
import { useContext, useEffect, useState } from "react";

const AdminDashboard = () => {
  let { state, dispatch } = useContext(Context);
  let [size, setSize] = useState(1000);
  window.addEventListener("resize", (e) => {
    setSize(e.currentTarget.innerWidth);
  });

  useEffect(() => {
    size < 768
      ? dispatch({ type: "SET_TOGGLE_NAVBAR", payload: false })
      : dispatch({ type: "SET_TOGGLE_NAVBAR", payload: true });
  }, [size, dispatch]);

  return (
    <div className="bg-slate-50">
      <div className="">
        <Navbar />
        <div className="main flex justify-between max-w-[2300px] mt-[76px]">
          <Sidebar />
          <div
            className={`main ${
              state.toggle
                ? `${state.toggleNavbar ? "md:ml-[310px]" : "ml-0"}`
                : `${state.toggleNavbar ? "md:ml-[90px]" : "ml-0"}`
            } overflow-auto w-full h-full z-10`}
          >
            {/* {category === "main" && <MainItems />}
            {category === "marketing" && <Marketing />} */}

            <Routes>
              <Route path="/admin-dashboard/main" element={<MainItems />} />
              <Route
                path="/admin-dashboard/marketing"
                element={<Marketing />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
