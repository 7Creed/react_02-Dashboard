// import React from "react";
import Options from "../options/options";
import Cards from "../admin-sales-cards/cards";
import Line from "../charts/linchart/line";
import Bar from "../charts/bar-graph/bar";
import { dateCards } from "../../dates/jummy";

const MainItems = () => {
  return (
    <div className="p-6 mb-6 bg-slate-50 min-h-screen">
      <div className="">
        <Options />
      </div>
      <div className="">
        <Cards />
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="p-6 my-4 w-full lg:w-[64%] bg-white rounded-xl">
          <div className="mb-8 text-zinc-900 font-medium leading-normal">
            Selected Location
          </div>
          <div className="flex flex-wrap gap-2">
            {dateCards.map(({ text, earn, percent, color }, index) => {
              return (
                <div
                  key={index}
                  className={`inline-flex flex-col gap-4 ${color} bg-white h-[100px] p-3 rounded-sm grow shrink-0 basis-0 shadow border-t-2`}
                >
                  <div className="text-xs font-medium text-zinc-500 leading-[18px] self-stretch">
                    {text}
                  </div>
                  <div className="inline-flex gap-1 items-baseline self-stretch">
                    <div className="text-xl text-zinc 900 font-semibold leading-[30px]">
                      {earn}
                    </div>
                    <div className="text-xs text-lime-500 grow shrink basis-0 leading-[18px]">
                      +{percent}
                    </div>
                  </div>
                </div>
              );
            })}
            <Line />
          </div>
        </div>
        <div className="bg-white w-full lg:w-1/3 p-6 my-4 rounded-xl">
          <Bar />
        </div>
      </div>
    </div>
  );
};

export default MainItems;
