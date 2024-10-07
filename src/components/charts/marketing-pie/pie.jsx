// import React from 'react'
import {
  AccumulationChartComponent,
  AccumulationDataLabel,
  AccumulationLegend,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from "@syncfusion/ej2-react-charts";
import { FaMapMarkerAlt } from "react-icons/fa";
import { dataPie } from "../../../dates/jummy";

const Pie = () => {
  return (
    <div className="w-full">
      <div className="relative bg-white gap-3 h-full p-6">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-3">
            <div className="text-zinc-500 text-xl">
              <FaMapMarkerAlt />
            </div>
            <div className="text-zinc-900 font-semibold grow shrink basis-0">
              Order by Location
            </div>
          </div>
          <div className="text-sm text-right text-orange-600 font-semibold leading-tight cursor-pointer">
            View All
          </div>
        </div>
        <div className="mt-8">
          <AccumulationChartComponent
            id="chart-pie"
            height="100%"
            width="100%"
            tooltip={{
              enable: true,
            }}
            legendSettings={{ visible: true, background: "white" }}
          >
            <Inject
              services={[
                AccumulationDataLabel,
                AccumulationLegend,
                PieSeries,
                AccumulationTooltip,
              ]}
            />
            <AccumulationSeriesCollectionDirective>
              <AccumulationSeriesDirective
                startAggle={0}
                endAggle={360}
                dataSource={dataPie}
                xName="x"
                yName="y"
                explode={true}
                explodeOffset="8%"
                explodeIndex={3}
                innerRadius="55%"
              ></AccumulationSeriesDirective>
            </AccumulationSeriesCollectionDirective>
          </AccumulationChartComponent>
        </div>
      </div>
    </div>
  );
};

export default Pie;
