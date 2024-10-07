// import React from "react";

import Options from "../options/options";
import Column from "../charts/marketing-bar/column";
import Pie from "../charts/marketing-pie/pie";
import Items from "../admin-items/items";
import Staff from "../staff/staff";
import { topSellingAndGrossingItems } from "../../dates/jummy";
// import { useState } from "react";

const Marketing = () => {
  // const [num, setNum] = useState(0);

  // For INPUT
  // const handleClick = (e) => {
  //   let value = e.target.value;

  //   let cleanValue = value.replace(/,/g, "");

  //   if (cleanValue === "") {
  //     setNum("0");
  //   } else {
  //     const formattedValue = parseInt(cleanValue).toLocaleString();
  //     setNum(formattedValue);
  //   }
  // };

  return (
    <div className="p-6 min-h-screen">
      {/* <input
        type="text"
        value={num}
        onChange={handleClick}
        onFocus={() => num === "0" && setNum("")}
      /> */}

      <Options />
      <div className="flex flex-wrap gap-6 mb-6 justify-between lg:flex-nowrap">
        <div className="w-full">
          <Column />
        </div>
        <div className="w-full">
          <Pie />
        </div>
      </div>
      <div className="flex flex-wrap gap-6 w-full justify-between lg:flex-nowrap">
        {topSellingAndGrossingItems.map((date, index) => {
          return <Items key={index} array={date} />;
        })}
      </div>
      <div className="w-full my-6">
        <Staff />
      </div>
    </div>
  );
};

export default Marketing;
