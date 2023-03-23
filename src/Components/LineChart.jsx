import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { themeContext } from "../App";

function LineChart({ chartData }) {
  let { dark } = useContext(themeContext);
  return (
    <>
      <Line
        data={chartData}
        options={{
          plugins: {
            legend: {
              labels: {
                color: dark ? "white" : "black",
              },
            },
          },
          scales: {
            y: {
              ticks: {
                color: dark ? "white" : "black",
              },
              grid: {
                display: true,
                color: dark ? "white" : "black",
              },
            },
            x: {
              ticks: {
                color: dark ? "white" : "black",
              },
              grid: {
                color: dark ? "white" : "black",
                display: false,
                borderColor: dark ? "red" : "blue",
                tickColor: dark ? "white" : "black",
              },
            },
          },
        }}
      />
    </>
  );
}

export default LineChart;
