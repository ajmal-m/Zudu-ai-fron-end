import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ["Completed", "on Hold", "on Progress", "Pending"],
    datasets: [
      {
        label: "",
        data: [32,25,25,18],
        backgroundColor: [
          "#238899",
          "#625ED7",
          "#39B4F3",
          "#D32C20"
        ],
        borderColor: [
         "#238899",
          "#625ED7",
          "#39B4F3",
          "#D32C20"
        ],
        borderWidth: 1,
      },
    ],
  };

  const options : any = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
         labels: {
          color: "#2B3A4A",       // text color
          font: {
            size: '20',          
            weight: "bold",   
            family: "Nunito",   
          },
          padding: 15, 
          boxWidth: 20,   
        },
      },
      
    },
  };

  return <Pie data={data} options={options} />;
}
