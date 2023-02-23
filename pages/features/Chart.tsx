import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

const data = {
  labels: ["1月", "2月", "3月", "4月"],
  datasets: [
    {
      borderColor: "rgba(35,200,153,1)",
      data: [100, 120, 50, 110],
      lineTension: 0,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Crypto Currency Latest Price",
    },
  },
};

export default function Chart() {
  ChartJS.register(...registerables);

  return (
    <div className="mt-5">
      <Line data={data} options={options} />
    </div>
  );
}
