// import React from "react";

import { cards } from "../../dates/jummy";
import { FaChevronRight } from "react-icons/fa";

const Cards = () => {
  return (
    <div className="inline-flex flex-wrap gap-4 w-full xl:flex-nowrap">
      {cards.map(
        (
          { text, icon, money, percent, percentColor, trend, iconColor },
          index
        ) => {
          // console.log(icon);
          return (
            <div
              key={index}
              className="flex gap-4 bg-white min-w-[220px] grow shrink basis-0 rounded-xl drop-shadow xl:w-full"
            >
              <div className="inline-flex flex-col bg-white grow shrink basis-0 rounded-xl">
                <div className="flex flex-col gap-6 w-full h-[164px] px-6 pt-6 pb-4 bg-white rounded-xl shadow">
                  <div className="inline-flex items-center gap-3 self-stretch">
                    <div className={`${iconColor}`}>{icon}</div>
                    <div className="text-zinc-900 text-medium">{text}</div>
                  </div>
                  <div className="flex flex-col justify-center gap-1 h-[72px] self-stretch">
                    <div className="text-[40px] text-zinc-900 font-semibold leading-[48px]">
                      {money}
                    </div>
                    <div className="flex relative gap-2 h-5">
                      <div
                        className={`${percentColor} flex items-center gap-1`}
                      >
                        <div className="text-sm font-semibold leading-tight">
                          {trend}
                        </div>
                        <div className="text-sm font-semibold leading-tight">
                          {percent}
                        </div>
                      </div>
                      <div className="text-xs text-zinc-500 font-medium leading-[18px]">
                        for last month
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex justify-between items-center gap-4 w-full px-6 py-4">
                  <p className="text-sm text-orange-600 font-semibold grow">
                    View details
                  </p>
                  <div className="text-orange-600">
                    <FaChevronRight />
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Cards;
