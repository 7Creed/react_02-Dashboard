// import React from "react";
import { dateStaff } from "../../dates/jummy";

const Staff = () => {
  return (
    <div className="bg-white w-full rounded-xl p-6">
      <div className="flex justify-between pb-4">
        <div className="text-zinc-900 font-semibold">Staff wise report</div>
        <div className="text-sm text-right text-orange-600 font-semibold leading-tight">
          View All
        </div>
      </div>
      <div className="inline-flex flex-col w-full">
        {dateStaff.map(({ name, img, color, percent, money }, index) => {
          return (
            <div
              key={index}
              className="inline-flex items-center gap-4 bg-white w-full p-3 md:px-6 border-b border-neutral-200"
            >
              <div className="flex items-center h-11 gap-4 grow shrink basis-0">
                <img src={img} alt="" className="" />
                <div className="text-zinc-900 font-medium">{name}</div>
              </div>
              <div className="inline-flex flex-col">
                <div className="text-right text-zinc-900 font-medium self-stretch">
                  {money}
                </div>
                <div
                  className={`${color} text-xs text-right leading-[18px] self-stretch`}
                >
                  {percent}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Staff;
