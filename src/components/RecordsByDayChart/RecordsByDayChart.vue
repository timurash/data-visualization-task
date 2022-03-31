<template>
  <Chart type="bar" :data="chartData" :options="chartOptions" />
</template>

<script>
import { initialDataset } from "@/datasets";
import { prepareDataForRecordsByDayChart } from "@/utils";

export default {
  name: "RecordsByDayChart",
  data() {
    return {
      preparedDataset: [],
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
            data: this.preparedDataset,
          },
        ],
      };
    },
  },
  mounted() {
    this.preparedDataset = prepareDataForRecordsByDayChart(initialDataset);
  },
};
</script>
