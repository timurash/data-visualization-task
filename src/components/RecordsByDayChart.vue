<template>
  <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script>
import { initialDataset } from "@/datasets";

export default {
  name: "RecordsByDayChart",
  data() {
    return {
      parsedData: [],
      chartOptions: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            title: {
              display: true,
              text: "Date",
            },
          },
          y: {
            title: {
              display: true,
              text: "Records count",
            },
            beginAtZero: false,
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        datasets: [
          {
            backgroundColor: "#42A5F5",
            data: this.parsedData,
          },
        ],
      };
    },
  },
  mounted() {
    let parsedData = [];

    initialDataset.forEach((x) => {
      const [date] = x.Time.split(" ");
      const [day, month, year] = date.split(".");

      const dateValue = new Date(Number(year), Number(month) - 1, Number(day));

      parsedData.push(dateValue);
    });

    const counts = {};

    parsedData.forEach((date) => {
      counts[date] = counts[date] ? counts[date] + 1 : 1;
    });

    const parsedData2 = [];

    Object.keys(counts).forEach((key) => {
      parsedData2.push({
        x: new Date(key),
        y: counts[key],
      });
    });

    this.parsedData = parsedData2;
  },
};
</script>

<style scoped></style>
