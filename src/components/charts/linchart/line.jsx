// import React from 'react'

// import "../../../index.css";
import { dataLine } from "../../../dates/jummy";
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
} from "@syncfusion/ej2-react-charts";

const Line = () => {
  let marker = { visible: true, width: 4, height: 4 };

  return (
    <div className="w-[730px]">
      <ChartComponent
        id="line-chart"
        height="100%"
        width="100%"
        primaryXAxis={{ valueType: "Category" }}
        primaryYAxis={{
          minimum: 100,
          maximum: 500,
          interval: 200,
          lineStyle: { width: 0 },
          majorTickLines: { width: 0 },
          minorGridLines: { width: 0 },
          rangePadding: "None",
        }}
        tooltip={{
          enable: true,
          format: "<b>${point.x}/${point.y}</b>",
          textStyle: {
            padding: "10px",
          },
          enableTrim: false,
        }}
        legendSettings={{ background: "white" }}
        chartArea={{ border: { width: 0 } }}
      >
        <Inject
          services={[
            LineSeries,
            Legend,
            Tooltip,
            DataLabel,
            Category,
            MultiColoredLineSeries,
          ]}
        />

        <SeriesCollectionDirective>
          {dataLine.map((el, i) => {
            return (
              <SeriesDirective
                key={i}
                type="MultiColoredLine"
                pointColorMapping="color"
                marker={marker}
                dataSource={el}
                xName="x"
                yName="y"
                width={2}
              ></SeriesDirective>
            );
          })}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Line;
