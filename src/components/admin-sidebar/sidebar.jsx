import { useContext, useState } from "react";
import { Context } from "../../context/context";
import { Data } from "../../dates/jummy";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let { state, dispatch } = useContext(Context);
  const [activeIcon, setActiveIcon] = useState(
    Data.length > 0 ? Data[0].icon : <FaChartPie />
  );
  const [category, setCategory] = useState(Data[0].inside);
  const [activeCat, setActiveCat] = useState("Sales");

  const ClickedIcon = ({ icon, inside }) => {
    // console.log(icon);
    if (icon === activeIcon) {
      dispatch({ type: "SET_TOGGLE", payload: !state.toggle });
    } else {
      dispatch({ type: "SET_TOGGLE", payload: true });
      setActiveIcon(icon);
      setCategory(inside);
    }
  };

  // const setActiveCat = (text) => {};

  return (
    <div className={`${state.toggleNavbar ? "block" : "hidden"}`}>
      <div
        onClick={() => {
          console.log("yeyeye");
          dispatch({ type: "SET_TOGGLE_NAVBAR", payload: false });
        }}
        className="fixed md:hidden z-40 left-0 top-0 right-0 bottom-0 bg-slate-700 backdrop:blur-md opacity-60"
      >
        sidegftdresersdserzssr
      </div>
      <div className="flex h-full z-50 fixed drop-shadow-2xl md:drop-shadow">
        <div className="flex flex-col gap-4 justify-start bg-zinc-900 px-4 py-6 min-h-full overflow-hidden md:overflow-auto">
          {Data.map((icon, index) => {
            return (
              <div
                onClick={() => {
                  ClickedIcon(icon);
                }}
                key={index}
                className={`flex flex-col items-center p-3.5 gap-2 rounded-lg cursor-pointer hover:text-white duration-300 ${
                  activeIcon === icon.icon
                    ? "text-white bg-gradient-to-bl from-amber-500 to-pink-500"
                    : "text-neutral-400"
                }`}
              >
                {/* <i
                  onClick={() => {
                    ClickedIcon(icon);
                  }}
                  className={`${icon.icon} text-xl w-6 h-6 text-center`}
                ></i> */}
                <div className="text-xl w-6 h-6 text-center">{icon.icon}</div>
              </div>
            );
          })}
        </div>
        <div
          className={`${
            state.toggle ? "block" : "hidden"
          } inline-flex flex-col gap-4 h-full w-56 overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-200 `}
        >
          {category.map(({ text, icon, url }, index) => {
            return (
              <Link
                to={`/admin-dashboard/${url}`}
                key={index}
                onClick={() => {
                  setActiveCat(text);
                }}
                className={`inline-flex items-center gap-3 px-[18px] py-3.5 cursor-pointer duration-300 self-stretch ${
                  activeCat === text
                    ? "bg-orange-50 bg-opacity-80 border-r-2 border-orange-600"
                    : "text-zinc-500 hover:bg-neutral-200"
                }`}
              >
                <div
                  className={`relative w-6 ${
                    activeCat === text ? "text-orange-600" : "text-zinc-500"
                  } text-xl`}
                >
                  {icon}
                </div>
                <div
                  className={`text-sm leading-tight grow shrink basis-0 ${
                    activeCat === text
                      ? "text-orange-600 font-semibold"
                      : "text-zinc-500"
                  }`}
                >
                  {text}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
