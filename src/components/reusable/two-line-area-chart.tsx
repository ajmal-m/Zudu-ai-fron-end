import ReactApexChart from "react-apexcharts";

export default function LineChart() {

const series = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 350,
      width:800,
      type: "area",
    },
    colors: ["#FB896B", "#6956E5"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-10-19T01:30:00.000Z",
        "2018-11-19T02:30:00.000Z",
        "2018-12-19T03:30:00.000Z",
        "2019-01-19T04:30:00.000Z",
        "2019-02-19T05:30:00.000Z",
        "2019-03-19T06:30:00.000Z",
      ],
      labels: {
        formatter: (value: string) => {
          const date = new Date(value);
          return date.toLocaleString("en-US", { month: "short" });
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy HH:mm",
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="line" height={350} width={800} />
    </div>
  );
}
