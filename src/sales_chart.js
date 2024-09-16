import React from "react";
import { Chart as ChartJs } from "chart.js/auto";
import "./App.css";
import { Bar, Line } from "react-chartjs-2";

import salesGrowth from "./data/salesGrowth.json";

function Sales_chart() {
  return (
    <div className=" row">
      <div class="col-lg-6">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Sales Growth by Market Channels</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <Line

              data = {{
                labels:salesGrowth.map((data) => data.label),
                datasets:[
                  {
                    label : "Chains",
                    data : salesGrowth.map((data) => data.salesGrowth),
                    backgroundColor: "#3c3c3c",
                    bordercolor:"#000"
              },
                
                  {
                    label : "Independent",
                    data : salesGrowth.map((data) => data.salesGrowth)
              },

                  {
                    label : "Ecommerce",
                    data : salesGrowth.map((data) => data.salesGrowth)
              }
                ]
              }}
             />
            
            </h6>
          </div>
        </div>
      </div>


      <div class="col-lg-6">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">Sales per Rep</h5>
            <h6 class="card-subtitle mb-2 text-muted">
              <Bar
                data={{
                  labels: [
                    "GISEL",
                    "HOUSE",
                    "KASANDRA",
                    "MARCY",
                    "ELENA",
                    "MARYA",
                    "LIZ",
                    "BARBIE",
                    "CROSSMARK",
                    "SCOTT",
                    "DORIS",
                    "CHARLES",
                    "EDDY",
                    "NILDA",
                    "CHUCK",
                    "PATRICIA",
                    "IDANYS",
                  ],
                  datasets: [
                    {
                      backgroundColor: "#9BD0F5",
                      hoverBackgroundColor: "rgb(44, 175, 254)",
                      borderRadius: 10,
                      barPercentage: 0.5,
                      barThickness: 10,
                      maxBarThickness: 6,
                      minBarLength: 6,
                      label: "Sales",
                      data: [
                        59, 83, 65, 77, 28, 200, 180, 170, 228, 184, 132, 120,
                        224, 240, 250, 280, 300, 400,
                      ],
                    },
                  ],
                }}
              />
            </h6>
          </div>
        </div>
      </div>


      
    </div>
  );
}
export default Sales_chart;
