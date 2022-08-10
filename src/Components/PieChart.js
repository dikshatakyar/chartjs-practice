import React from "react";
import { Pie, defaults } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
  //   console.log("bar begins");
  return (
    <Pie
      data={chartData}
      options={{
        maintainAspectRatio: false,
        legend: {
          labels: {
            fontSize: 75,
          },
        },
        layout: {
          padding: 60,
        },
      }}
    />
  );
  //   console.log("bar ends");
};

export default PieChart;
