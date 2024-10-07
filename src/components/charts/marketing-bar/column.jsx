// import React from 'react'

import {
  Category,
  ChartComponent,
  ColumnDirective,
  ColumnsDirective,
  ColumnSeries,
  DataLabel,
  Inject,
  Legend,
  LineSeries,
  MultiColoredLineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { FaMapMarkerAlt } from "react-icons/fa";
import { dataColumn } from "../../../dates/jummy";

const Column = () => {
  return (
    <div className="w-full">
      <div className="relative w-full bg-white h-max p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="inline-flex items-center gap-3">
            <div className="text-zinc-500 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div className="text-zinc-900 font-semibold grow shrink basis-0">
              Sales by Location
            </div>
          </div>
          <div className="text-sm text-right text-orange-600 font-semibold cursor-pointer leading-tight">
            View All
          </div>
        </div>
        <div className="mt-8 w-full">
          <ChartComponent
            id="column-sparkLine"
            height="100%"
            width="100%"
            primaryXAxis={{
              valueType: "Category",
              majorGridLines: { width: 0 },
              chartArea: { width: 20 },
            }}
            primaryYAxis={{
              minimum: 0,
              maximum: 1000,
              interval: 200,
              lineStyle: { width: 0 },
              majorTickLines: { width: 0 },
              minorTickLines: { width: 0 },
            }}
            tooltip={{
              enable: true,
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
            </ColumnsDirective>

            <SeriesCollectionDirective>
              <SeriesDirective
                pointColorMapping="color"
                // marker={marker}
                xName="x"
                yName="y"
                type="Column"
                dataSource={dataColumn}
                columnSpacing={0.1}
                columnWidth={0.5}
                cornerRadius={{
                  topLeft: 2,
                  topRight: 2,
                }}
              ></SeriesDirective>
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Column;
