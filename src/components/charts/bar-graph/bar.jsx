// import React from 'react'

import { useState } from "react";
import { dataBar, dateOptions } from "../../../dates/jummy";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  LineSeries,
  MultiColoredLineSeries,
  ColumnSeries,
  ColumnDirective,
  ColumnsDirective,
} from "@syncfusion/ej2-react-charts";
import { FaChevronDown } from "react-icons/fa";

const Bar = () => {
  let [modalCountries, setModalCountries] = useState(false);
  let [modalCities, setModalCities] = useState(false);
  let [cityArray, setCityArray] = useState([{ city: "not found" }]);
  let [changeCountry, setChangeCountry] = useState("Select Country");
  let [changeCity, setChangeCity] = useState("Cities");

  const toggleModalCountries = () => {
    setModalCountries((prev) => {
      return !prev;
    });
    setModalCities(false);
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
  };
  const SelectedCity = (data) => {
    console.log(data);
    setChangeCity(data);
    setModalCities(false);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="font-medium text-zinc-900">Hourly sales report</div>
        <div className="text-sm font-semibold text-orange-600 cursor-pointer leading-tight">
          View All
        </div>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-3 mb-4 w-full">
        <div className="group relative flex bg-white w-full min-w-fit h-[42px] px-3.5 rounded-lg border border-neutral-200 grow shrink basis-0">
          <div
            className="flex items-center justify-between gap-3 w-full min-w-[120px]"
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
            {dateOptions.map(({ country, cities }, index) => {
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
            {cityArray.map(({ city }, index) => {
              return (
                <div
                  key={index}
                  className="p-2 px-3 text-zinc-900 text-lg hover:text-orange-600 hover:bg-orange-50 hover:font-semibold duration-300"
                  onClick={() => {
                    SelectedCity(city);
                  }}
                >
                  {city}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      `{" "}
      <ChartComponent
        id="column-sparkLine"
        height="100%"
        width="100%"
        primaryXAxis={{
          valueType: "Category",
          minorGridLines: { width: 0 },
          labelRotation: 90,
          chartArea: { width: 20 },
        }}
        primaryYAxis={{
          minimum: 0,
          maximum: 4500,
          interval: 1500,
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorTickLines: { width: 0 },
          // minorGridLines: { width: 0 },
          // rangePadding: "None",
        }}
        tooltip={{
          enable: true,
          format: "<b>${point.x}/${point.y}</b>",
          // added
          // textStyle: {
          //   padding: "10px",
          // },
          // enableTrim: false,
        }}
        legendSettings={{ mode: "Range", background: "white" }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            LineSeries,
            ColumnSeries,
            Legend,
            Tooltip,
            DataLabel,
            Category,
            MultiColoredLineSeries,
          ]}
        />

        <ColumnsDirective>
          <ColumnDirective width="100%"></ColumnDirective>
          <ColumnDirective width="100%"></ColumnDirective>
        </ColumnsDirective>

        <SeriesCollectionDirective>
          <SeriesDirective
            // pointColorMapping="color"
            // marker={marker}
            xName="x"
            yName="hours"
            type="Column"
            fill="#8fbfff"
            dataSource={dataBar}
            columnSpacing={0.1}
            columnWidth={0.5}
            cornerRadius={{
              topLeft: 2,
              topRight: 2,
            }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
      `
    </div>
  );
};

export default Bar;
