// import React from 'react'

const Items = (props) => {
  return (
    <div className="relative w-full bg-white p-6 rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <div className="text-zinc-900 font-semibold">{props.array.title}</div>
        <div className="text-right text-orange-600 text-sm font-semibold leading-tight">
          View All
        </div>
      </div>
      <div className="inline-flex flex-col w-full gap-4">
        {props.array.items.map(
          ({ img, text, percentage, color, money }, index) => {
            return (
              <div
                key={index}
                className="inline-flex items-center gap-3 bg-white pb-4 w-full border-b border-neutral-200 self-stretch"
              >
                <div className="relative w-12 h-12 md:h-[74px] md:w-[74px]">
                  <img src={img} alt="" className="rounded-xl" />
                </div>
                <div className="flex items-center justify-between gap-2 grow shrink basis-0 h-12 md:items-start">
                  <div className="inline-flex flex-col justify-start gap-2">
                    <div className="text-zinc-900 text-sm font-semibold md:text-base">
                      {text}
                    </div>
                  </div>
                  <div className="hidden sm:flex items-baseline flex-wrap gap-1.5 h-6">
                    <div className="text-zinc-900 font-medium">{money}</div>
                    <div
                      className={`${color} text-sm font-medium text-center grow shrink basis-0 leading-[18px]`}
                    >
                      {percentage}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Items;
