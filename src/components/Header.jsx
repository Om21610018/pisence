import React from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/userimg.jpg"
import menu from "../assets/menu.png";
import "../App.css";
import { useState } from "react";

function Header() {
  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };
  return (
    <div className="  flex items-center justify-between  bg-gray-500 text-white px-3">
      <div className="flex w-full justify-between py-3 item-centeer">
        <img src={menu} alt="" onClick={toggleDrawer} className=" cursor-pointer" />

        <div className="h-[45px] w-[45px] bg-red-600 rounded-full">
          <img src={user} alt="" className=" rounded-full" />
        </div>
      </div>

      <div
        className={`absolute left-0 top-0 w-64 h-full bg-slate-900 transition-transform transform ${
          showDrawer ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <button
          className="absolute text-red-600 text-2xl top-0 right-0 m-3"
          onClick={toggleDrawer}
        >
          X
        </button>
        {/* You can add any content you want here */}
        <div className="  flex flex-col gap-x-3 gap-y-3 mt-10 px-6 text-gray-400 ">
          <NavLink to="/">
            <div>
              <p>Summary Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/tracking">
            <div>
              <i></i>
              <p>Attendance Tracking</p>
            </div>
          </NavLink>
          <NavLink to="/analytics">
            <div>
              <i></i>
              <p>Bheavioral Analytics</p>
            </div>
          </NavLink>
          <NavLink to="/performance">
            <div>
              <i></i>
              <p>Academic Peformance Tracking</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
