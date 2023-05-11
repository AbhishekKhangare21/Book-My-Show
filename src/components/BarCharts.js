import React from "react";
import { Doughnut } from "react-chartjs-2";
import { doughnutData } from "./Data";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const BarCharts = () => {
  return (
    <div>
      <h1 style={{ padding: "20px" }}>Create Circular Background in Doghnut</h1>
      <div style={{ padding: "20px", margin: "auto", width: "40%" }}>
        <Doughnut data={doughnutData}></Doughnut>
      </div>
    </div>
  );
};

export default BarCharts;
