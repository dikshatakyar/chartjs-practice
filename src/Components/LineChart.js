import React from "react";
import { Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const LineChart = ({chartData}) => {
  //   console.log("bar begins");
  return (
    <Line
     data={chartData}
    />
  );
  //   console.log("bar ends");
};

export default LineChart;
