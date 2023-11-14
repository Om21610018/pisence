import React from "react";

function DAYS({ day, days }) {
  // console.log(days[day]);
  let date = days[day].date;
  let an = days[day].an;
  let fn = days[day].fn;
  // console.log(date, an, fn);
  let ancolor = an == "present" ? "bg-green-500" : "bg-red-500";
  let fncolor = fn == "present" ? "bg-green-500" : "bg-red-500";
  return (
    <div className="flex flex-col gap-y-3 justify-center items-center">
      <p className=" uppercase font-bold">{day}</p>
      <p className=" ">{date}</p>
      <div className={`rounded-md h-[25px] w-[25px] ${ancolor}`}></div>
      <div className={` rounded-md h-[25px] w-[25px] ${fncolor}`}></div>
    </div>
  );
}

export default DAYS;
