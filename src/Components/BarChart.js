import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const BarChart = ({chartData}) => {
  //   console.log("bar begins");
  return (
    <Bar
     data={chartData}
    />
  );
  //   console.log("bar ends");
};

export default BarChart;
