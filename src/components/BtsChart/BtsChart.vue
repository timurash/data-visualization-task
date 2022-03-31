<template>
  <Chart
    :height="400"
    type="pie"
    :data="chartData"
    :options="chartOptions"
    style="width: 50%"
  />
</template>

<script>
import { initialDataset } from "@/datasets";
import { prepareDataForBtsTop3Chart } from "@/utils";

export default {
  name: "BtsChart",
  data() {
    return {
      preparedDataset: {
        values: [],
        labels: [],
      },
      chartOptions: {
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 50,
              color: "#495057",
            },
          },
        },
        layout: {
          padding: {
            top: 20,
          },
        },
        legend: {
          labels: {
            padding: {
              top: 500,
            },
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.preparedDataset.labels,
        datasets: [
          {
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726"],
            hoverBackgroundColor: ["#64B5F6", "#81C784", "#FFB74D"],
            data: this.preparedDataset.values,
          },
        ],
      };
    },
  },
  mounted() {
    this.preparedDataset = prepareDataForBtsTop3Chart(initialDataset);
  },
};
</script>
