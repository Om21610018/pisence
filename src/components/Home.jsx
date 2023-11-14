import React, { useState } from "react";
import DAYS from "./DAYS";
import jsonData from "../data/data.json";
import GoogleChartComponent from "./GoogleChartComponent";

function Home() {
  const pieChartData = {
    labels: ["Good", "Bad"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  // console.log(jsonData.NAME);
  const [days, setDays] = useState(jsonData.ATTENDANCE);
  // console.log(jsonData.homework);
  return (
    <div className="w-full flex flex-col gap-y-4 overflow-hidden">
      <div className="mt-8 h-full  w-full justify-between flex flex-col bg-slate-950 ">
        <h2 className=" font-semibold text-3xl mb-7">Hello! {jsonData.NAME}</h2>
        <div className=" bg-gray-500 box-border px-5 py-5 rounded-md items-center w-full flex flex-col">
          <p className=" font-bold text-xl mb-5">ATTENDANCE</p>
          <div className=" overflow-auto flex w-full justify-between gap-x-4 item-center">
            {Object.keys(days).map((day) => (
              <DAYS day={day} days={days}></DAYS>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full justify-between flex gap-x-4  ">
        <div className=" w-full px-5 py-5 bg-gray-500 rounded-md flex flex-col items-center">
          <p className="font-bold text-xl  uppercase mb-5">Homework</p>
          <div className="w-full flex flex-col flex-wrap">
            {jsonData.homework.map((sub) => (
              <div className=" capitalize text-md py-2 px-5">{sub}</div>
            ))}
          </div>
        </div>
        <div className=" w-full  flex flex-col bg-gray-500 rounded-md px-5 py-5  items-center justify-between h-full">
          <p className=" font-bold text-xl mb-5">BEHAVIORAL ANALYSIS</p>
          <div>
            <GoogleChartComponent></GoogleChartComponent>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
