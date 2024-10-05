// import React from "react";

import { useState } from "react";
import { FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { multilocations, time } from "../../dates/jummy";

const Options = () => {
  let [modalCountries, setModalCountries] = useState(false);
  let [modalCities, setModalCities] = useState(false);
  let [cityArray, setCityArray] = useState([{ city: "not found" }]);
  let [changeCountry, setChangeCountry] = useState("Select Country");
  let [changeCity, setChangeCity] = useState("Cities");
  let [multiLocation, setMultiLocation] = useState(["not found"]);
  let [modalMultiLocation, setModalMultiLocation] = useState(false);
  let [changeMultiLocation, setChangeMultiLocation] =
    useState("Multi-locations");
  let [changeWalkIn, setChangeWalkIn] = useState("walk-In");
  let [walkin, setWalkin] = useState(false);

  const toggleModalCountries = () => {
    setModalCountries((prev) => {
      return !prev;
    });
    setModalCities(false);
    setModalMultiLocation(false);
  };
  const SelectedCountry = (data) => {
    setChangeCountry(data);
    setModalCountries(false);
  };

  const toggleModalCities = () => {
    setModalCities((prev) => {
      return !prev;
    });
    setModalCountries(false);
    setModalMultiLocation(false);
  };
  const SelectedCity = (data) => {
    console.log(data);
    setChangeCity(data);
    setModalCities(false);
  };

  const toggleModalMultiLocation = () => {
    setModalMultiLocation((prev) => {
      return !prev;
    });
    setModalCities(false);
    setModalCountries(false);
  };
  const SelectedMultiLocation = (data) => {
    setChangeMultiLocation(data);
    setModalMultiLocation(false);
  };

  const toggleModalWalkin = () => {
    setWalkin((prev) => !prev);
  };
  const SelectedWalkin = (data) => {
    setChangeWalkIn(data);
    setWalkin(false);
  };

  return (
    <div className="inline-flex flex-wrap justify-between items-center w-full mb-4 gap-9">
      <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
        <div className="group relative flex bg-white min-w-fit h-[42px] px-3.5 rounded-lg border border-neutral-200 grow shrink basis-0">
          <div
            className="flex items-center gap-3 w-full min-w-[120px]"
            onClick={toggleModalCountries}
          >
            <div className="text-sm text-zinc-900 grow shrink basis-0 leading-[18px]">
              {changeCountry}
            </div>
            <div className="">
              <FaChevronDown />
            </div>
          </div>
          <div
            className={`${
              modalCountries ? "block" : "hidden"
            } absolute top-full left-0 py-3 mt-1 z-50 bg-white w-full duration-300 overflow-hidden drop-shadow-lg`}
          >
            {multilocations.map(({ country, cities }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 px-3 text-zinc-900 text-lg hover:text-orange-600 hover:bg-orange-50 hover:font-semibold duration-300"
                  onClick={() => {
                    SelectedCountry(country);
                    setCityArray(cities);
                  }}
                >
                  {country}
                </div>
              );
            })}
          </div>
        </div>

        <div className="group relative flex bg-white min-w-fit h-[42px] px-3.5 rounded-lg border border-neutral-200 grow shrink basis-0">
          <div
            className="flex items-center gap-3 w-full min-w-[120px]"
            onClick={toggleModalCities}
          >
            <div className="text-sm text-zinc-900 grow shrink basis-0 leading-[18px]">
              {changeCity}
            </div>
            <div className="">
              <FaChevronDown />
            </div>
          </div>
          <div
            className={`${
              modalCities ? "block" : "hidden"
            } absolute top-full left-0 py-3 mt-1 z-50 bg-white w-full duration-300 overflow-hidden drop-shadow-lg`}
          >
            {cityArray.map(({ city, multilocation }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 px-3 text-zinc-900 text-lg hover:text-orange-600 hover:bg-orange-50 hover:font-semibold duration-300"
                  onClick={() => {
                    SelectedCity(city);
                    setMultiLocation(multilocation);
                  }}
                >
                  {city}
                </div>
              );
            })}
          </div>
        </div>

        <div className="group relative flex bg-white min-w-fit h-[42px] px-3.5 rounded-lg border border-neutral-200 grow shrink basis-0">
          <div
            className="flex items-center gap-3 w-full min-w-[120px]"
            onClick={toggleModalMultiLocation}
          >
            <div className="text-sm text-zinc-900 grow shrink basis-0 leading-[18px]">
              {changeMultiLocation}
            </div>
            <div className="">
              <FaChevronDown />
            </div>
          </div>
          <div
            className={`${
              modalMultiLocation ? "block" : "hidden"
            } absolute top-full left-0 py-3 mt-1 z-50 bg-white w-full duration-300 overflow-hidden drop-shadow-lg`}
          >
            {multiLocation.map((el, index) => {
              return (
                <div
                  key={index}
                  className="p-2 px-3 text-zinc-900 text-lg hover:text-orange-600 hover:bg-orange-50 hover:font-semibold duration-300"
                  onClick={() => {
                    SelectedMultiLocation(el);
                  }}
                >
                  {el}
                </div>
              );
            })}
          </div>
        </div>

        <div className="group relative flex bg-white min-w-fit h-[42px] px-3.5 rounded-lg border border-neutral-200 grow shrink basis-0">
          <div
            className="flex items-center gap-3 w-full min-w-[120px]"
            onClick={toggleModalWalkin}
          >
            <div className="text-sm text-zinc-900 grow shrink basis-0 leading-[18px]">
              {changeWalkIn}
            </div>
            <div className="">
              <FaChevronDown />
            </div>
          </div>
          <div
            className={`${
              walkin ? "block" : "hidden"
            } absolute top-full left-0 py-3 mt-1 z-50 bg-white w-full duration-300 overflow-hidden drop-shadow-lg`}
          >
            {time.map((el, index) => {
              return (
                <div
                  key={index}
                  className="p-2 px-3 text-zinc-900 text-lg hover:text-orange-600 hover:bg-orange-50 hover:font-semibold duration-300"
                  onClick={() => {
                    SelectedWalkin(el);
                  }}
                >
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-white w-full px-3 5 py-3 h-[42px] rounded border border-neutral-200 lg:w-auto">
        <div className="text-lg text-orange-600">
          <FaCalendarAlt />
        </div>
        <div className="text-xs text-zinc-900 grow shrink basis-0 leading-[18px]">
          Today: Apr 25 2020 12:00 AM - Apr 25 2022 12:00 AM
        </div>
      </div>
    </div>
  );
};

export default Options;
