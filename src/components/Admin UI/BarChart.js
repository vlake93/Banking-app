import React from "react";
import { Line, Doughnut, Pie, defaults } from "react-chartjs-2";
import "./BarChart.css";

defaults.global.tooltips.enabled = true;
defaults.global.legend.position = "bottom";

const BarChart = () => {
  const signedUpUsers = JSON.parse(
    localStorage.getItem("localRegisteredUsers")
  );

  const labels = signedUpUsers.map((user) => {
    return user.username;
  });

  const balances = signedUpUsers.map((balance) => {
    return balance.balance;
  });

  return (
    <div className="bar-chart">
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              label: "Total deposit shares",
              data: balances,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
                "rgba(224, 187, 228, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(224, 187, 228, 1)",
              ],
              borderWidth: 4,
              hoverOffset: 4,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 20,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
